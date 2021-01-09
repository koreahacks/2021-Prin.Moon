import PotEntity from "../entity/pot.entity";

const sortPotsByLocation = (
  potList: PotEntity[],
  latitude: number,
  longitude: number
) => {
  const filteredPotList = potList.filter(
    (pot) => pot.latitude && pot.longitude
  );

  const PotListWithDistance = filteredPotList.map((pot) => {
    const distance = getDistance(
      latitude,
      longitude,
      pot.latitude as number,
      pot.longitude as number
    );
    return { ...pot, distance };
  });

  PotListWithDistance.sort((a, b) => a.distance - b.distance);

  return PotListWithDistance;
};

const getDistance = (
  userLatitude: number,
  userLongitude: number,
  potLatitude: number,
  potLongitude: number
) => {
  const latA = 11;
  const lngB = 88.8;
  const distance =
    Math.sqrt(
      Math.pow(Math.abs(userLatitude - potLatitude) * latA, 2) +
        Math.pow(Math.abs(userLongitude - potLongitude) * lngB, 2)
    ) * 1000;

  return distance;
};

export default sortPotsByLocation;
