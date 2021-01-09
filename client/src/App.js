import React from "react";
import { createGlobalStyle } from "styled-components";
import { Redirect, Route, Switch } from "react-router-dom";
import reset from "styled-reset";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage";
import RecruitedParty from "./pages/RecruitedParty";
import ParticipatedParty from "./pages/ParticipatedParty";
import PartyMakingPage from "./pages/PartyMakingPage";
import CategorySelectPage from "./pages/CategorySelectPage";
import DeliveryCategoryPage from "./pages/DeliveryCategoryPage";
import OTTCategoryPage from "./pages/OTTCategoryPage";
import EtcCategoryPage from "./pages/EtcCategoryPage";
import CreateDeliveryPartyPage from "./pages/CreateDeliveryPartyPage";
import CreateOTTPartyPage from "./pages/CreateOTTPartyPage";
import CreateETCPartyPage from "./pages/CreateETCPartyPage";
import ConfirmAddressPage from "./pages/ConfirmAddressPage";
import GeoCoder from "./utils/geocode";
import AddressSearchPage from "./pages/AddressSearchPage";
import Auth from "./hoc/Auth";

export const GlobalStyle = createGlobalStyle`
  ${reset} 
 
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
  *,
	*:before,
	*:after {
	  box-sizing: border-box;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  
  body {
		font-family: 'Noto Sans KR', sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={Auth(MainPage, false)} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/mypage" component={Auth(MyPage, false)} exact />
        <Route
          path="/recruitedParty"
          component={Auth(RecruitedParty, false)}
          exact
        />
        <Route
          path="/participatedParty"
          component={Auth(ParticipatedParty, false)}
          exact
        />
        <Route
          path="/partymake"
          component={Auth(PartyMakingPage, false)}
          exact
        />
        <Route
          path="/category/select"
          component={Auth(CategorySelectPage, false)}
          exact
        />
        <Route
          path="/category/delivery"
          component={Auth(DeliveryCategoryPage, false)}
          exact
        />
        <Route
          path="/category/ott"
          component={Auth(OTTCategoryPage, false)}
          exact
        />
        <Route
          path="/category/etc"
          component={Auth(EtcCategoryPage, false)}
          exact
        />
        <Route
          path="/category/create/delivery"
          component={Auth(CreateDeliveryPartyPage, false)}
          exact
        />
        <Route
          path="/category/create/ott"
          component={Auth(CreateOTTPartyPage, false)}
          exact
        />
        <Route
          path="/category/create/etc"
          component={Auth(CreateETCPartyPage, false)}
          exact
        />
        <Route
          path="/address/confirm"
          component={Auth(ConfirmAddressPage, false)}
          exact
        />
        <Route
          path="/address/search"
          component={Auth(AddressSearchPage, false)}
          exact
        />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  );
}

export default App;
