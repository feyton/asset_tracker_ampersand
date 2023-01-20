import mongoose, { Schema } from "mongoose";

const EventSchema = new Schema({
  asset: {
    type: mongoose.Types.ObjectId,
    ref: "Asset",
    required: true,
  },
  station: {
    type: mongoose.Types.ObjectId,
    ref: "Station",
  },

  type: String,
  description: String,
});

export const Event = mongoose.model("Event", EventSchema);
