import { Router } from "express";
import asyncHandler from "../utils/asyncHandler.js";
import {
  createAsset,
  deleteAsset,
  getAsset,
  getAssets,
  updateAsset,
} from "../views/assets.js";

const router = Router();

router.get("", asyncHandler(getAssets));
router.post("", asyncHandler(createAsset));
router.get("/{id}", asyncHandler(getAsset));
router.put("/{id}", asyncHandler(updateAsset));
router.delete("/{id}", asyncHandler(deleteAsset));

export default router;
