import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Grid from "../components/Grid";
import KakaoMap from "../components/kakaoMap";
import Title from "../components/Title";
import TransparentHeader from "../components/TransparentHeader";
import useGeoLocation from "../hooks/useGeoLocation";
import PlaceItem from "../components/search/PlaceItem";
import Button from "../components/Button";

const MarginedTitle = styled(Title)`
  margin-bottom: 15px;
`;

const PlaceItemWrapper = styled.div`
  margin: 20px 0;
`;

const Buttons = styled.div``;

export default function ConfirmAddressPage() {
  const { selectedPosition, setMyLocation } = useGeoLocation();
  const history = useHistory();

  return (
    <div>
      <TransparentHeader
        type="close"
        onClick={() => {
          history.push("/");
        }}
      />

      <Grid>
        <MarginedTitle>선택한 위치</MarginedTitle>
        <KakaoMap lat={selectedPosition.lat} lng={selectedPosition.lng} />
        <PlaceItemWrapper>
          <PlaceItem place={selectedPosition} />
        </PlaceItemWrapper>
        <Buttons>
          <Button
            color="primary"
            onClick={(e) => {
              e.preventDefault();
              setMyLocation(selectedPosition);
              history.push("/");
            }}
          >
            선택하기
          </Button>
        </Buttons>
      </Grid>
    </div>
  );
}
