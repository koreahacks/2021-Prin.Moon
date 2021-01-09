import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Grid from "../components/Grid";
import Title from "../components/Title";
import TransparentHeader from "../components/TransparentHeader";
import useGeoLocation from "../hooks/useGeoLocation";
import PlaceItem from "../components/search/PlaceItem";
import { useHistory } from "react-router-dom";

const ColoredInput = styled.input`
  width: 100%;
  height: 50px;
  outline: none;
  border: none;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 15px;
  background-color: #ffead7;
  font-weight: bold;
`;

export default function AddressSearchPage() {
  const history = useHistory();
  const {
    positionsByAddress,
    getPositionsByAddress,
    setSelectedPosition,
  } = useGeoLocation();

  const [input, setInput] = useState("");

  useEffect(() => {
    getPositionsByAddress(input);
  }, [input]);

  return (
    <>
      <TransparentHeader
        type="Close"
        onClick={() => {
          history.push("/");
        }}
      />
      <Grid>
        <Title>주소, 건물명을 입력하세요</Title>
        <ColoredInput
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
          placeholder="예) 안암동 12 또는 안암빌딩"
        />
        {positionsByAddress.map((position, idx) => (
          <PlaceItem
            place={position}
            key={idx}
            onClick={() => {
              setSelectedPosition(position);
              history.push("/address/confirm");
            }}
          />
        ))}
      </Grid>
    </>
  );
}
