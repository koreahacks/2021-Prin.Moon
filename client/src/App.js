import React from "react";
import { createGlobalStyle } from "styled-components";
import { Redirect, Route, Switch } from "react-router-dom";
import reset from "styled-reset";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import MyPage from "./pages/MyPage";
import PartyMakingPage from "./pages/PartyMakingPage";

export const GlobalStyle = createGlobalStyle`
  ${reset} 
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');
  *,
	*:before,
	*:after {
	  box-sizing: border-box;
  }
  
  body {
		font-family: 'Noto Sans KR', sans-serif;
  }
`;

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/mypage" component={MyPage} exact />
        <Route path="/partymake" component={PartyMakingPage} exact />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  );
}

export default App;
