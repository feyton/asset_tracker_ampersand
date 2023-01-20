import { Router } from "express";
import resHandler from "../utils/resHandler.js";
import driverRouter from "./driver.js";
import assetsRouter from "./assets.js";

const router = Router();

router.use("/drivers", driverRouter);
router.use("/assets", assetsRouter);
router.get("/", (_, res) => {
  return resHandler(res, 200, "Welcome");
});
export default router;
