export const jwtConfig = {
  tokenSecret: process.env.JWT_SECRET || "token-secret",
  tokenExpiresIn: Number(process.env.JWT_TOKEN_EXPIRES_IN || 86400),
};
