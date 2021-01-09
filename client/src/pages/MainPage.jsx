import React from "react";

import Counter from "../components/CounterExample";
import RecoilExample from "../components/RecoilExample";
import Button from "../components/Button";
import Modal from "../components/Modal";
export default function MainPage() {
  return <div>
  <Button title={"Hera"} color={"primary"}></Button>
  <Modal title={"정문 GS 4캔 만원"} contents={"hihi"} buttons={
    [<Button title={"Hera"} color={"primary"}></Button>]
  } openButtonTitle={"열기"} openButtonColor={"primary"}></Modal>
</div>;

}
