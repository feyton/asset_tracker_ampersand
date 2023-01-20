import cors from "cors";
import "dotenv/config";
import express from "express";
import http from "http";
import path from "path";
import { Server } from "socket.io";
import connect from "./config/db.js";
import { Asset } from "./models/asset.js";
import { AssetRepository } from "./repositories/assets.js";
import router from "./routes/indexRouter.js";
import errLogger from "./utils/errorLogger.js";
import { initializeTracker } from "./utils/initializeTracker.js";
import reqLogger from "./utils/reqLogger.js";
import logger from "./utils/winston.js";
const __dirname = path.resolve();

const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json({ limit: "30mb" }));
app.use(cors());
app.use(reqLogger);
app.use("/", router);
app.use(errLogger);

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    transports: ["websocket", "polling"],
    credentials: true,
  },
  allowEIO3: true,
});

io.on("connection", (socket) => {
  io.emit("message", { message: "Welcome" });
  socket.on("location_update", async (data) => {
    if (!data.id) {
      return;
    }
    let asset = await AssetRepository.fetch(data.id);
    if (asset) {
      asset.location = data.location;
      asset.locationUpdated = new Date();
      asset.direction = data.direction;
      asset.battery_level = data.battery_level;
      asset.speed = data.speed;
      asset.num = data.num

      await AssetRepository.save(asset);
    } else {
      const asset = await Asset.findById(data.id);
      if (!asset.driver) return;
      await initializeTracker(asset, data);
    }
    io.emit("location_update", data);
  });
});

connect.then(() => {
  console.log("Database connected");
  server.listen(PORT, () => {
    server.emit("Started");
    logger.info(`Open http://localhost:${PORT}`);
  });
});
