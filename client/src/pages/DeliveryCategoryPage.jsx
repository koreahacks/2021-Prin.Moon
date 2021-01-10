import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ListCard from "../components/ListCard";
import PageHeader from "../components/PageHeader";
import Spinner from "../components/Spinner";
import myAxios from "../utils/myAxios";
import useGeoLocation from "../hooks/useGeoLocation";

export default function DeliveryCategoryPage() {
  const { myLocation } = useGeoLocation();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [location, setLocation] = useState(false);
  const [deliveryList, setDeliveryList] = useState([]);

  const calculateTime = (time) => {
    if (!time) return false;
    const temp = parseInt(
      (new Date().getTime() - new Date(time).getTime()) / (1000 * 60)
    ).toString();
    return temp <= 0 ? true : false;
  };

  const getDeliveryCategory = async () => {
    try {
      const { data } = await myAxios.get(
        `/pot/near/1?latitude=${myLocation.lat}&longitude=${myLocation.lng}`
      );
      if (location) {
        const noEndTimeData = data.filter((item) => !item.endTime);
        const endTimeData = data.filter((item) => calculateTime(item.endTime));
        setDeliveryList([...endTimeData, ...noEndTimeData]);
      } else {
        setDeliveryList(data);
      }
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getDeliveryCategory();
  }, [location]);

  return (
    <Wrapper>
      <PageHeader title={"배달음식"} />
      <StyledFilter
        onClick={() => {
          setLocation(!location);
        }}
      >
        {location ? "거리순으로 정렬하기" : "마감순으로 정렬하기"}
      </StyledFilter>
      <StyledListWrapper>
        {loading ? (
          <Spinner />
        ) : error ? (
          <ListCard
            title={"정보를 불러오는데 실패했습니다. 새로고침 해주세요."}
          />
        ) : (
          deliveryList.map((delivery) => (
            <ListCard
              key={delivery.id}
              id={delivery.id}
              distance={delivery.distance}
              title={delivery.title}
              createAt={delivery.createAt}
              endTime={delivery.endTime}
              pot={delivery}
            />
          ))
        )}
      </StyledListWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;

  background-color: rgba(255, 174, 103, 0.15);
`;

const StyledListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const StyledFilter = styled.div`
  padding: 0.3rem;
  width: 100%;
  color: grey;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
