import axios from "axios";
import * as qs from "querystring";
import { kakaoOAuthConfig } from "../config/kakao-oauth";
import jwt from "jsonwebtoken";
import { jwtConfig } from "../config/jwt";

const { clientId, redirectURL } = kakaoOAuthConfig;

const AuthService = {
  getAccessCode: async (code: string): Promise<string> => {
    const response = await axios.post(
      "https://kauth.kakao.com/oauth/token",
      qs.stringify({
        grant_type: "authorization_code",
        code,
        redirect_uri: redirectURL,
        client_id: clientId,
      }),
      {
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
          charset: "utf-8",
        },
      }
    );
    return response.data.access_token;
  },
  getKakaoUserInfo: async (accessToken: string) => {
    const { data } = await axios.get("https://kapi.kakao.com/v2/user/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  },
  generateToken: (userId: number) => {
    const { tokenSecret, tokenExpiresIn } = jwtConfig;
    const token = jwt.sign({ userId }, tokenSecret, {
      expiresIn: tokenExpiresIn,
    });

    return token;
  },
  verifyToken: (token: string) => {
    const decodedToken = jwt.verify(token, jwtConfig.tokenSecret);
    return decodedToken;
  },
};

export default AuthService;
