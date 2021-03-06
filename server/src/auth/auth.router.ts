import express, { Request, Response } from "express";
import AuthService from "./auth.service";
import { kakaoOAuthConfig } from "../config/kakao-oauth";
import KakaoUserInfo from "../common/types/kakao";
import UserService from "../user/user.service";
import { clientURI } from "../common/constant";

const AuthRouter = express.Router();

AuthRouter.get("/login", async (req: Request, res: Response) => {
  const { clientId, redirectURL } = kakaoOAuthConfig;

  res.redirect(
    `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectURL}&response_type=code`
  );
});

AuthRouter.get("/callback/kakao", async (req: Request, res: Response) => {
  const { code } = req.query;
  const accessToken = await AuthService.getAccessCode(code as string);
  const userInfo = (await AuthService.getKakaoUserInfo(
    accessToken
  )) as KakaoUserInfo;
  const user = await UserService.getOrCreateUser(userInfo);
  const jwtToken = AuthService.generateToken(user.id, user.name);

  res.cookie("Authorization", jwtToken);
  res.redirect(clientURI);
});

export default AuthRouter;
