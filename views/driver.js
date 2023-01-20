import { Driver } from "../models/driver.js";
import resHandler from "../utils/resHandler.js";

export const createDriver = async (req, res) => {
  const driver = await Driver.create(req.body);
  return resHandler(res, 201, driver);
};

export const getDrivers = async (req, res) => {
  const drivers = await Driver.find({});
  return resHandler(res, 200, drivers);
};
export const deleteDriver = async (req, res) => {
  const { id } = req.params;
  const deleted = await Driver.findByIdAndDelete(id);
  return resHandler(res, 200, { deleted });
};
export const getDriver = async (req, res) => {
  const { id } = req.params;
  const driver = await Driver.findById(id);
  if (!driver) return resHandler(res, 404, "Not found");
  return resHandler(res, 200, driver);
};

export const updateDriver = async (req, res) => {
  const { id } = req.params;
  const updatedDriver = await Driver.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  return resHandler(res, 200, updatedDriver);
};
