export const kakaoOAuthConfig = {
  clientId: process.env.kakao_clientId,
  redirectURL:
    process.env.kakao_redirect ||
    "http://localhost:4000/api/auth/callback/kakao",
};
