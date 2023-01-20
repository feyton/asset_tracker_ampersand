import mongoose, { Schema } from "mongoose";
import codeGenerator from "../utils/codeGenerator.js";

const AssetSchema = new Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
    },
    latest_location: {
      type: {
        type: String,
        enum: "Point",
      },
      coordinates: {
        type: [Number],
      },
    },
    direction: String,
    speed: Number,
    battery_level: {
      type: Number,
      default: 100,
    },
    driver: {
      type: mongoose.Types.ObjectId,
      ref: "Driver",
    },
  },
  {
    timestamps: true,
  }
);

AssetSchema.pre("validate", function () {
  let asset = this;
  if (!asset.code) {
    asset.code = codeGenerator();
    return asset;
  }
  return asset;
});

export const Asset = mongoose.model("Asset", AssetSchema);
