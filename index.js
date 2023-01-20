import cors from "cors";
import "dotenv/config";
import express from "express";
import http from "http";
import path from "path";
import { Server } from "socket.io";
import router from "./routes/indexRouter.js";
import reqLogger from "./utils/reqLogger.js";
import logger from "./utils/winston.js";
const __dirname = path.resolve();

const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json({ limit: "30mb" }));
app.use(cors());
app.use(reqLogger);
app.use("*", router);

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
});

server.listen(PORT, () => {
  server.emit("started");
  logger.info(`app is listening on port http://localhost:${PORT}`);
});
