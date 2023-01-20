import mongoose, { Schema } from "mongoose";
import codeGenerator from "../utils/codeGenerator";

const StationSchema = new Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
    },
    location: {
      type: {
        type: String,
        enum: "Point",
        required: true,
      },
      coordinates: {
        type: [Number],
        required: true,
      },
    },
    available_batteries: Number,
  },
  {
    timestamps: true,
  }
);

StationSchema.pre('validate', function(){
    let station = this 
    if (!station.code) {
        station.code = codeGenerator()
        return station
    }
    return station
})


export const Station = mongoose.model('Station', StationSchema)