
import { Event } from "../models/event.js";
import resHandler from "../utils/resHandler.js";

export const createEvent = async (req, res) => {
  const event = await Event.create(req.body);
  return resHandler(res, 201, event);
};

export const getEvents = async (req, res) => {
  const events = await Event.find({});
  return resHandler(res, 200, events);
};
export const deleteEvent = async (req, res) => {
  const { id } = req.params;
  const deleted = await Event.findByIdAndDelete(id);
  return resHandler(res, 200, { deleted });
};
export const getEvent = async (req, res) => {
  const { id } = req.params;
  const event = await Event.findById(id);
  if (!event) return resHandler(res, 404, "Not found");
  return resHandler(res, 200, event);
};

export const updateEvent = async (req, res) => {
  const { id } = req.params;
  const updatedEvent = await Event.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  return resHandler(res, 200, updatedEvent);
};
