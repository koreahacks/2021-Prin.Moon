import express, { NextFunction, Request, Response } from "express";
import { resMessage, statusCode } from "../common/constant";
import JsonResponse from "../common/types/json-response";
import PotDTO from "./dto/pot.dto";
import UpdatePotRequest from "./dto/update-pot-request.dto";
import PotService from "./pot.service";

const PotRouter = express.Router();

PotRouter.get("/recent", async (req: Request, res: Response) => {
  const potList = await PotService.getRecentPots();
  res.json(potList);
});

PotRouter.get("/near", async (req: Request, res: Response) => {
  const { latitude, longitude } = req.query;
  if (!latitude || !longitude)
    return res
      .status(statusCode.BAD_REQUEST)
      .json(new JsonResponse(false, resMessage.NO_X("User location")));
  try {
    const sortedPotList = await PotService.getPotsNearBy(
      Number(latitude),
      Number(longitude)
    );
    res.json(sortedPotList);
  } catch (e) {
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .json(new JsonResponse(false, resMessage.INTERNAL_SERVER_ERROR));
  }
});

PotRouter.get("/joined-pots", async (req: Request, res: Response) => {
  if (!req.user)
    return res
      .status(statusCode.UNAUTHORIZED)
      .json(new JsonResponse(false, resMessage.X_UNAUTHORIZED("user")));
  const potList = await PotService.getUserJoinedPot(req.user.id);

  res.json(potList);
});

PotRouter.get("/ownered-pots", async (req: Request, res: Response) => {
  if (!req.user)
    return res
      .status(statusCode.UNAUTHORIZED)
      .json(new JsonResponse(false, resMessage.X_UNAUTHORIZED("user")));
  const potList = await PotService.getUserOwnedPot(req.user.id);

  res.json(potList);
});

PotRouter.get(
  "/:potId",
  async (req: Request, res: Response, next: NextFunction) => {
    const { potId } = req.params;
    const { latitude, longitude } = req.query;
    if (!latitude || !longitude)
      return res
        .status(statusCode.BAD_REQUEST)
        .json(new JsonResponse(false, resMessage.NO_X("User location")));
    try {
      const { code, json } = await PotService.getPotById(
        Number(potId),
        Number(latitude),
        Number(longitude)
      );

      res.status(code).json(json);
    } catch (e) {
      return res
        .status(statusCode.DB_ERROR)
        .json(new JsonResponse(false, resMessage.DB_ERROR));
    }
  }
);

PotRouter.get(
  "/category/:categoryId",
  async (req: Request, res: Response, next: NextFunction) => {
    const { categoryId } = req.params;
    try {
      const potList = await PotService.getPotsByCategory(Number(categoryId));
      res.json(potList);
    } catch (e) {
      next(e);
    }
  }
);

PotRouter.get("/near/:categoryId", async (req: Request, res: Response) => {
  const { latitude, longitude } = req.query;
  const categoryId = Number(req.params.categoryId);
  if (!latitude || !longitude)
    return res
      .status(statusCode.BAD_REQUEST)
      .json(new JsonResponse(false, resMessage.NO_X("User location")));
  try {
    const sortedPotList = await PotService.getPotsWithCategoryNearBy(
      categoryId,
      Number(latitude),
      Number(longitude)
    );
    res.json(sortedPotList);
  } catch (e) {
    res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .json(new JsonResponse(false, resMessage.INTERNAL_SERVER_ERROR));
  }
});

PotRouter.post("/", async (req: Request, res: Response, next: NextFunction) => {
  const potDTO = new PotDTO(req.body);
  const { code, json } = await PotService.createPot(potDTO);
  res.status(code).json(json);
});

PotRouter.patch(
  "/:potId",
  async (req: Request, res: Response, next: NextFunction) => {
    const { potId } = req.params;
    const potDTO = new UpdatePotRequest(req.body);
    const { code, json } = await PotService.updatePotInfo(
      Number(potId),
      potDTO
    );
    res.status(code).json(json);
  }
);

export default PotRouter;
