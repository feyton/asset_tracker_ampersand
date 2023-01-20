
import { Station } from "../models/station.js";
import resHandler from "../utils/resHandler.js";

export const createStation = async (req, res) => {
  const station = await Station.create(req.body);
  return resHandler(res, 201, station);
};

export const getStations = async (req, res) => {
  const stations = await Station.find({});
  return resHandler(res, 200, stations);
};
export const deleteStation = async (req, res) => {
  const { id } = req.params;
  const deleted = await Station.findByIdAndDelete(id);
  return resHandler(res, 200, { deleted });
};
export const getStation = async (req, res) => {
  const { id } = req.params;
  const station = await Station.findById(id);
  if (!station) return resHandler(res, 404, "Not found");
  return resHandler(res, 200, station);
};

export const updateStation = async (req, res) => {
  const { id } = req.params;
  const updatedStation = await Station.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  return resHandler(res, 200, updatedStation);
};
