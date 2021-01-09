export const calculateDistance = (distance) => {
  let result = distance;
  if (distance > 1000) {
    result = distance / 1000;
    return `${result.toFixed(1)} km`;
  }
  return `${parseInt(result)} m`;
};
