import { useCallback } from "react";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import GeoCoder from "../utils/geocode";

// 아톰 = 데이터 조각(키와 기본값만 설정)
const myLocationState = atom({
  key: "myLocation",
  default: {
    address: null,
    place: null,
    lat: null,
    lng: null,
    category: null,
  }, // 고려대 좌표
});

const positionsByAddressState = atom({
  key: "positionsByAddress",
  default: [],
});

const selectedPositionState = atom({
  key: "selectedPosition",
  default: {
    address: "",
    place: "",
    lat: null,
    lng: null,
    category: null,
  },
});

// 커스텀 Hook을 만들어 사용하는 예시 (일반 상태)
function useGeoLocation() {
  const [myLocation, setMyLocation] = useRecoilState(myLocationState); // 일반적인 Atom으로 사용하는 경우(Read, Write 동시에)
  const [positionsByAddress, setPositionsByAddress] = useRecoilState(
    positionsByAddressState
  );

  const [selectedPosition, setSelectedPosition] = useRecoilState(
    selectedPositionState
  );
  const getPositionsByAddress = useCallback(async (address) => {
    try {
      const results = await GeoCoder.getLatLngFromAddress(address);
      setPositionsByAddress(
        results.map((result) => ({
          address: result.address_name,
          place: result.place_name,
          lat: result.y,
          lng: result.x,
          category: result.category_name,
        }))
      );
    } catch (e) {
      console.log(e);
    }
  });

  return {
    myLocation,
    setMyLocation,
    positionsByAddress,
    getPositionsByAddress,
    selectedPosition,
    setSelectedPosition,
  };
}

export default useGeoLocation;
