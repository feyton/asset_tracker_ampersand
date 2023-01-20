import { AssetRepository } from "../repositories/assets.js";

export const initializeTracker = async (asset, data) => {
  const track = await AssetRepository.createAndSave({
    id: data.id,
    driver_name: asset.driver_name,
    code: asset.code,
    speed: data.speed,
    battery_level: data.battery_level,
    direction: data.direction,
    location_updated: new Date(),
    location: data.location,
    num: data.num
  });
  return track;
};
