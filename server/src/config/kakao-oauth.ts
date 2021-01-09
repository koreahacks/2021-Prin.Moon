export const kakaoOAuthConfig = {
  clientId: process.env.kakao_clientId,
  redirectURL:
    process.env.NODE_ENV === "dev"
      ? process.env.kakao_redirect_dev
      : process.env.kakao_redirect_production,
};
