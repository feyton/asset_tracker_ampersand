import mongoose from "mongoose";
import mongooseVirtuals from "mongoose-lean-virtuals";

const emailRgx =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

mongoose.plugin(mongooseVirtuals);

const DriverSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    phone_number: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /(0|7|8)\d{9}$/.test(v);
        },
        message: (props) => `${props.value} is not a valid phone number`,
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: function (v) {
          return emailRgx.test(v);
        },
        message: (props) => `${props.value} is not a valid email`,
      },
    },

    billing: [
      {
        type: String,
        number: String,
        default: Boolean,
      },
    ],
    notifications: [
      {
        time: Date,
        message: String,
        read: Boolean,
        model: String,
      },
    ],
    support_pin: String,
  },
  {
    timestamps: true,
  }
);

DriverSchema.index({ name: 1 });

export const Driver = mongoose.model("Driver", DriverSchema);
