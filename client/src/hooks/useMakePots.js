import { useCallback } from "react";
import { atom, useRecoilState, useRecoilValue, selector } from "recoil";
import formParser from "../utils/formParser";
import myAxios from "../utils/myAxios";

const deliveryFormState = atom({
  key: "deliveryForm",
  default: {
    title: "",
    endTime: "",
    latitude: null,
    longitude: null,
    appLink: "",
    kakaoLink: "",
    memo: "",
    fee: "",
    categoryId: 1,
  },
});

// 셀렉터 - 아톰으로 부터 파생된 데이터 조각()
const deliveryJSONFormState = selector({
  key: "deliveryJSONForm",
  get: ({ get }) => {
    const deliveryForm = get(deliveryFormState);
    return formParser.chageDeliveryFormToJSON(deliveryForm);
  },
});

export default function useMakePots() {
  const [deliveryForm, setDeliveryForm] = useRecoilState(deliveryFormState);
  const deliveryJSONForm = useRecoilValue(deliveryJSONFormState);
  const resetDeliveryForm = () => {
    setDeliveryForm({
      title: "",
      endTime: "",
      latitude: null,
      longitude: null,
      appLink: "",
      kakaoLink: "",
      memo: "",
      fee: "",
      categoryId: 1,
    });
  };
  const postDeliveryPot = useCallback(
    async (endTime, latitude, longitude) => {
      const modifiedDeliveryJSONForm = {
        ...deliveryJSONForm,
        endTime,
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
      };
      await myAxios.post("/pot", modifiedDeliveryJSONForm);
    },
    [deliveryJSONForm]
  );

  return {
    deliveryForm,
    setDeliveryForm,
    deliveryJSONForm,
    postDeliveryPot,
    resetDeliveryForm,
  };
}
