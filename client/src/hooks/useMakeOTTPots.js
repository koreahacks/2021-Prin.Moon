import { useCallback } from "react";
import { atom, useRecoilState, useRecoilValue, selector } from "recoil";
import formParser from "../utils/formParser";
import myAxios from "../utils/myAxios";

const OTTFormState = atom({
  key: "OTTForm",
  default: {
    title: "",
    fee: "",
    kakaoLink: "",
    memo: "",
    totalPeople: "",
    categoryId: 2,
  },
});

const OTTJSONFormState = selector({
  key: "OTTJSONForm",
  get: ({ get }) => {
    const OTTForm = get(OTTFormState);
    return formParser.changeOTTFormToJSON(OTTForm);
  },
});

export default function useMakeOTTPots() {
  const [OTTForm, setOTTForm] = useRecoilState(OTTFormState);
  const OTTJSONForm = useRecoilValue(OTTJSONFormState);
  const resetOTTForm = () => {
    setOTTForm({
      title: "",
      kakaoLink: "",
      memo: "",
      totalPeople: "",
      fee: "",
      categoryId: 2,
    });
  };
  const postOTTPot = useCallback(async () => {
    const modifiedOTTJSONForm = {
      ...OTTJSONForm,
    };
    console.log(OTTJSONForm);
    const response = await myAxios.post("/pot", modifiedOTTJSONForm);
  }, [OTTJSONForm]);

  return {
    OTTForm,
    setOTTForm,
    OTTJSONForm,
    postOTTPot,
    resetOTTForm,
  };
}
