/**
 * Calculates the distance in meters between two geographical points using the Haversine formula.
 * @param {Array} start - The starting point [latitude, longitude].
 * @param {Array} end - The ending point [latitude, longitude].
 * @returns {number} - The distance between the two points in meters.
 * @throws Will throw an error if the input arrays are not of length 2 or if values are not numbers.
 */
function calculateDistance(start, end) {
    // Check if both inputs are arrays of length 2 (latitude and longitude)
    if (
      !Array.isArray(start) ||
      !Array.isArray(end) ||
      start.length !== 2 ||
      end.length !== 2
    ) {
      throw new Error(
        "Input must be two arrays, each containing exactly two numbers (latitude and longitude)."
      );
    }
  
    // Destructure the latitude and longitude from the arrays
    const [lat1, lon1] = start;
    const [lat2, lon2] = end;
  
    // Ensure that all values are valid numbers
    if (
      typeof lat1 !== "number" ||
      typeof lon1 !== "number" ||
      typeof lat2 !== "number" ||
      typeof lon2 !== "number"
    ) {
      throw new Error("Both latitude and longitude must be valid numbers.");
    }
  
    // Convert degrees to radians
    const toRadians = (degrees) => (degrees * Math.PI) / 180;
  
    // Earth's radius in meters
    const R = 6371000;
  
    // Convert latitude and longitude from degrees to radians
    const lat1Rad = toRadians(lat1);
    const lat2Rad = toRadians(lat2);
    const deltaLatRad = toRadians(lat2 - lat1); // Difference in latitude
    const deltaLonRad = toRadians(lon2 - lon1); // Difference in longitude
  
    // Haversine formula to calculate the distance between two points on the Earth
    const a =
      Math.sin(deltaLatRad / 2) * Math.sin(deltaLatRad / 2) +
      Math.cos(lat1Rad) *
        Math.cos(lat2Rad) *
        Math.sin(deltaLonRad / 2) *
        Math.sin(deltaLonRad / 2);
  
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    // Distance in meters
    const distance = R * c;
  
    return distance;
  }
  
  // Example usage:
  // const start = [48.8566, 2.3522]; // Paris (latitude, longitude)
  // const end = [51.5074, -0.1278]; // London (latitude, longitude)
  // console.log(calculateDistance(start, end)); // Outputs the distance in meters
  
  module.exports = calculateDistance;