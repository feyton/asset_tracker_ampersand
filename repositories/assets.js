import { Entity, Schema } from "redis-om";
import client from "../config/redis.js";

class Asset extends Entity {}

const AssetSchema = new Schema(Asset, {
  id: { type: "string" },
  code: { type: "string" },
  location: { type: "point" },
  speed: { type: "number" },
  battery_level: { type: "number" },
  driver_name: { type: "string" },
  direction: { type: "string" },
  location_updated: { type: "string" },
  num: { type: "number" },
});

export const AssetRepository = client.fetchRepository(AssetSchema);

await AssetRepository.createIndex();
