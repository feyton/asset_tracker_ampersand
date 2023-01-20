#### Answer for the second question of the assessment


## The problem
How would you calculate the distance traveled by each driver? 
Total energy consumed by each driver. The total energy is theoretically consumed by each driver.

## Overview

#### 1. How would you calculate the distance traveled by each driver?

To calculate the distance traveled by each driver, the system would need to track the location of the electric motorcycle in real-time and record the location data over time. This data could then be used to calculate the distance traveled by the driver using various method. As mentioned in the design, use accurate data collected by GPS Trackers, we can use

> Haversine formula which is widely used formula to calculate the distance between two points on the earth's surface. Given the latitude and longitude of the starting and ending points, the Haversine formula can be used to calculate the distance traveled. This feature is available in Leaflet.js which is an open source mapping library

> Google Maps API: The Google Maps API can be used to calculate the distance between two points on the earth's surface although it would require payment for the API integration when the product scale


> Distance from GPS coordinates: The distance can be calculated from the GPS coordinates using the Pythagorean theorem. The difference in latitude and longitude coordinates can be used to calculate the distance traveled.


#### 2. Total energy consumed by each driver

> To calculate the total energy consumed by each driver, the system would need to track the energy usage of the battery in real-time. This data could then be used to calculate the total energy consumed by the driver over a given period of time as per demand.

> The system can integrate the energy used by the battery over time, using the energy usage data, to get the total energy consumed by the driver over a given period of time

#### Where the risks may arise:

These calculations does not account for energy loss from other environmental factors or battery properties like:

- Temperature
- Internal resistance