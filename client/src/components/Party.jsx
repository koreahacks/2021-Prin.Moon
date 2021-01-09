import React, {Fragment} from "react";
import styled from 'styled-components';
import Header from "../components/Header";
import Modal from "../components/Modal";
import Button from "../components/Button";
import Paper from '@material-ui/core/Paper';
import Bread from '../assets/bread2.jpg';
import myAxios from "../utils/myAxios";

const PartyComp = styled.div`
  background:white;
  width: 100%;
  margin-top: 5%;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  height : 10%;
  border-radius: 20px;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Place = styled.div`
    font-size: 10px;
    font-weight: 500;
    padding-bottom: 1%;
`
const Evaluate = styled.div`
    background-color: #ffae66;
    width: 30%;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    display: flex;
    justify-content: center;
    padding: 10% 0;
`
const Title = styled.div`
    font-size: 22px;
    font-weight: bold;
    padding-bottom: 1%;
    display: flex;
    justify-content: flex-end;
`
const Time = styled.div`
    font-size: 12px;
    font-weight: 500; 
    opacity: 0.56;  
`
const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-left: 5%;
    padding-top: 3%;
`

const Ment = styled.div`
    color: #502600;
    margin: 5%;
    display: flex;
    justify-content: center;
    font-size: 13px;
`

const Bold = styled.div`
    font-weight:bold;
`

const Breads = styled.div`
  display: flex;
  padding-top: 5%;
  padding-bottom: 5%;
  align-contents: center;
`
const BreadMargin = styled.img`
  margin: 0 2.5%;
  width : 50px;
`
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export default function Party(props) {
  const [count, setCount] = React.useState(0);
  const breads = [1,2,3,4,5];

  const handleClick = (e) => {
    setCount(e.target.id);
  }
  const getOpacity = (id) => {
      if(count < id){
          return {
              opacity: 0.15,
          }
      }
  }
  const handleCredibility = async () => {
    await myAxios.put(`/credibility/${props.owner.id}`, count);
  }
  return (
    <PartyComp>
        <Info>
            <Place>{Math.floor(props.place)}m</Place>
            <Title>{props.title}</Title>
            <Time>{props.time}</Time>
        </Info>
        <Modal openButtonTitle = {"신뢰도 평가하기"} openButtonColor={'primary'} title={"왓챠 팟 구함"} buttons={
    [<Button color={"primary"} onClick={handleCredibility}>평가하기</Button>]
  }>
      <Wrapper>
      <Ment>
            <Bold>{props.owner.name} </Bold>님의 신뢰도를 평가해 주세요. 
            </Ment>
                <Breads>
                {
                    breads.map((element) => {
                        return <BreadMargin src={Bread} alt="bread" id={element} style = {getOpacity(element)}  onClick={handleClick}/>
                    })
                }
                </Breads>   
      </Wrapper> 
        </Modal>
    </PartyComp>
  );
}