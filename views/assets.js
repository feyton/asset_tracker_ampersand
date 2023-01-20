
import { Asset } from "../models/asset.js";
import resHandler from "../utils/resHandler.js";

export const createAsset = async (req, res) => {
  const asset = await Asset.create(req.body);
  return resHandler(res, 201, asset);
};

export const getAssets = async (req, res) => {
  const assets = await Asset.find({});
  return resHandler(res, 200, assets);
};
export const deleteAsset = async (req, res) => {
  const { id } = req.params;
  const deleted = await Asset.findByIdAndDelete(id);
  return resHandler(res, 200, { deleted });
};
export const getAsset = async (req, res) => {
  const { id } = req.params;
  const asset = await Asset.findById(id);
  if (!asset) return resHandler(res, 404, "Not found");
  return resHandler(res, 200, asset);
};

export const updateAsset = async (req, res) => {
  const { id } = req.params;
  const updatedAsset = await Asset.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  return resHandler(res, 200, updatedAsset);
};
