import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 60x;
  padding: 16px;
  margin: 10px 0;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;

const Address = styled.div`
  color: grey;
  margin-bottom: 5px;
`;

const Place = styled.div`
  color: #502600;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Category = styled.div`
  color: grey;
`;

export default function PlaceItem({ place, ...props }) {
  return (
    <Wrapper onClick={props.onClick}>
      <Address>{place.address}</Address>
      <Place>{place.place}</Place>
      <Category>{place.category}</Category>
    </Wrapper>
  );
}
