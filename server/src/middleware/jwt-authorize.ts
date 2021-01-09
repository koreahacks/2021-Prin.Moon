import { NextFunction, Request, Response } from "express";
import AuthService from "../auth/auth.service";
import { resMessage, statusCode } from "../common/constant";
import JsonResponse from "../common/types/json-response";
import UserService from "../user/user.service";

const jwtAuthorize = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { Authorization } = req.cookies;
  if (!Authorization)
    return res
      .status(statusCode.UNAUTHORIZED)
      .json(new JsonResponse(false, resMessage.X_UNAUTHORIZED("user")));
  const { userId, name } = AuthService.verifyToken(Authorization);
  const user = await UserService.getDecodedUser(userId, name);
  if (!user)
    return res
      .status(statusCode.BAD_REQUEST)
      .json(new JsonResponse(false, resMessage.NO_X("user")));

  req.user = user;
  next();
};

export default jwtAuthorize;
