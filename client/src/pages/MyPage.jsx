import React, {Fragment} from "react";
import styled from 'styled-components';
import BadgeAvatar from "../components/BadgeAvatar";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Collapse from '@material-ui/core/Collapse';
import SvgIcon from '@material-ui/core/SvgIcon';
import Bread from '../assets/bread2.jpg';
import Header from "../components/Header";
import {Link} from 'react-router-dom';
import RecruitedParty from "./RecruitedParty";
import ParticipatedParty from "./ParticipatedParty";
import LoginPage from "./LoginPage";
import myAxios from '../utils/myAxios';
import env from "../common/const.js";
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: "100%",
      height: theme.spacing(8),
      borderRadius: "20px",
    },
  },
  listRoot: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const AvatarAlign = styled.div`
  padding-top: 10vw;
  padding-bottom: 10vw;
  display: flex;
  justify-content: center; 
`
const Name = styled.div`
  font-size: 5vw;
  display: flex;
  jusity-content: center;
  padding: 1vw 0;
  align-items: flex-end;
`
const Bold = styled.div`
  font-size: 10vw;
  font-weight: bold;
`
const Info = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 4vw;
`
const Ment = styled.div`
  padding: 2vw 0;
  display: flex;
  font-size: 3.5vw;
  justiy-content: center;
  align-items: flex-end;
`
const Money = styled.div`
  font-weight: bold;
  color: #ff7800;
  font-size : 7vw;
`
const Body = styled.div`
  background:rgba(255, 174, 103, 0.15);
`

const Assurance = styled.div`
  color: #502600;
  font-weight: bold;
  display: flex;
  align-items: flex-end;
  margin: 0 5%;
`

const MentAssurance = styled.div`
  color: #502600;
  font-weight: bold;
  display: flex;
  justify-content: center;
`
const AssuranceBold = styled.div`
font-size: 6vw;
font-weight: bold;
`
const Breads = styled.div`
  display: flex;
  padding-top: 5%;
  padding-bottom: 5%;
  align-contents: center;
`
const BreadMargin = styled.img`
  margin: 0 3%;
  width : 50px;
`

const BorderList = styled.div`
  border: 5px solid;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const LogoutA = styled.a`
text-decoration: none;
color: black;
`

export default function MyPage(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [info, setUserInfo] = React.useState({});
  const [isLogin, setIsLogin] = React.useState(true);
  const breads = [1,2,3,4,5];
  React.useEffect(() => {
    (async () => {
      const { data } = await myAxios.get("/user/info");
      if (data) {
        setUserInfo(data.user);
      }
    })();
  }, []);
  const handleClick = () => {
    setOpen(!open);
  };
  const getOpacity = (id) => {
    if(info.credibility < id){
        return {
            opacity: 0.15,
        }
    } 
  }
  
  const getCredibilityMent = () => {
    if(info.credibility <= 1){
      return "신뢰도가 부족해요 ㅠ.ㅠ 더 힘내주실거죠?"
    }
    else if(info.credibility <= 2){
      return "중간까지 얼마안남았어요!! 좀더 화이팅!"
    }
    else if(info.credibility <= 3){
      return "3점이나 되다니?! 5점까지 조금만 더 달려용~~ "
    }
    else if(info.credibility <= 4){
      return "1점밖에 안남았어요!! 고지가 눈앞에!! ㅎ "
    }
    else {
      return "엄청난 신뢰를 받고 있는 당신!"
    }
  }
  return (
    <Fragment>
      <Header title={"나의 N빵"}></Header>
      <Body>
      <AvatarAlign>
        <BadgeAvatar name = {info.name}/>
        <Info>
          <Name><Bold>{info.name}</Bold>님, </Name>
          <Ment>지금까지 <Money>{info.savedMoney}</Money>원을 아끼셨어요!</Ment>
        </Info>
      </AvatarAlign>
      <Assurance><AssuranceBold>{info.name}</AssuranceBold>님의 신뢰도</Assurance>
      <div className={classes.root}>
        <Paper elevation={2}>
          <Breads>
          {
                    breads.map((element) => {
                        return <BreadMargin src={Bread} alt="bread" id={element} style = {getOpacity(element)}  onClick={handleClick}/>
                    })
          }
          </Breads> 
        </Paper>
        <MentAssurance>{getCredibilityMent()}</MentAssurance> 
      </div>
      </Body>
      <List className={classes.listRoot}>
      <StyledLink to = "RecruitedParty">
        <ListItem button>
        <ListItemAvatar>
            <HomeIcon color="primary" style={{ color: '#ff7800' }} />
          </ListItemAvatar>
          
            <ListItemText primary="내가 모집한 팟" style={{ textDecoration: 'none'}}/>
          
        </ListItem>
      </StyledLink> 
      <StyledLink to = "ParticipatedParty">
      <ListItem button>
        <ListItemAvatar>
        <HomeIcon color="primary" style={{ color: '#ac5910' }} />
        </ListItemAvatar>
        <ListItemText primary="내가 참가한 팟"/>
      </ListItem>
      </StyledLink>
      <ListItem button>
      <ListItemAvatar>
          <HomeIcon color="disabled" />
        </ListItemAvatar>
        <LogoutA href = {`${env.SERVER_BASE_URL}/user/logout`}>
          <ListItemText primary="로그아웃" style={{ textDecoration: 'none'}}/>
        </LogoutA>
      </ListItem>
      
    </List>
    </Fragment>
  );
}
