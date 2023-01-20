import { Router } from "express";
import asyncHandler from "../utils/asyncHandler.js";
import {
  createDriver,
  deleteDriver,
  getDriver,
  getDrivers,
  updateDriver,
} from "../views/driver.js";

const router = Router();

router.get("", asyncHandler(getDrivers));
router.post("", asyncHandler(createDriver));
router.get("/{id}", asyncHandler(getDriver));
router.put("/{id}", asyncHandler(updateDriver));
router.delete("/{id}", asyncHandler(deleteDriver));

export default router;
