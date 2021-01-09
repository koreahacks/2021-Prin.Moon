import { getRepository } from "typeorm";
import UserJoinPotEntity from "../entity/user-join-pot.entity";
import { resMessage, statusCode } from "../common/constant";
import JsonResponse from "../common/types/json-response";

const UserJoinPotService = {
  getUserJoinPot: async (userId: number, potId: number) => {
    const userJoinPotRepository = getRepository(UserJoinPotEntity);
    const userJoinPot = await userJoinPotRepository.findOne({
      where: { userId, potId },
    });
    if (!userJoinPot) return false;
    return userJoinPot.onGoing;
  },

  createUserJoinPot: async (userId: number | undefined, potId: number) => {
    try {
      const userJoinPotRepository = getRepository(UserJoinPotEntity);
      let userJoinPot = await userJoinPotRepository.findOne({
        where: { userId, potId },
      });
      if (!userJoinPot) {
        const newUserJoinPot = userJoinPotRepository.create({ userId, potId });
        userJoinPot = await userJoinPotRepository.save(newUserJoinPot);
      }
      return { code: statusCode.CREATED, json: userJoinPot };
    } catch (error) {
      return {
        code: statusCode.DB_ERROR,
        json: new JsonResponse(false, error.message),
      };
    }
  },
  confirmUserJoinPot: async (userId: number | undefined, potId: number) => {
    try {
      const userJoinPotRepository = getRepository(UserJoinPotEntity);
      const targetUserJoinPot = await userJoinPotRepository.findOne({
        where: { userId, potId },
      });
      if (!targetUserJoinPot) {
        return {
          code: statusCode.BAD_REQUEST,
          json: new JsonResponse(false, resMessage.NO_X("user join pot")),
        };
      }
      const updatedTargetUserJoinPot = userJoinPotRepository.merge(
        targetUserJoinPot,
        { onGoing: true }
      );
      await userJoinPotRepository.save(updatedTargetUserJoinPot);
      return {
        code: statusCode.OK,
        json: updatedTargetUserJoinPot,
      };
    } catch (error) {
      return {
        code: statusCode.DB_ERROR,
        json: new JsonResponse(false, error.message),
      };
    }
  },
  finishEvaluation: async (userId: number, potId: number) => {
    const userJoinPotRepository = getRepository(UserJoinPotEntity);
    const target = await userJoinPotRepository.findOne({
      where: { userId, potId },
    });
    if (!target) return;
    const updatedUserJoinPot = userJoinPotRepository.merge(target, {
      isEvaluated: true,
    });
    await userJoinPotRepository.save(updatedUserJoinPot);
  },
  deleteUserJoinPot: async (userId: number | undefined, potId: number) => {
    try {
      const userJoinPotRepository = getRepository(UserJoinPotEntity);
      const targetUserJoinPot = await userJoinPotRepository.findOne({
        where: { userId, potId },
      });
      if (!targetUserJoinPot) {
        return {
          code: statusCode.BAD_REQUEST,
          json: new JsonResponse(false, resMessage.NO_X("user join pot")),
        };
      }
      await userJoinPotRepository.delete(targetUserJoinPot);
      return {
        code: statusCode.OK,
        json: new JsonResponse(true, "deleted"),
      };
    } catch (error) {
      return {
        code: statusCode.DB_ERROR,
        json: new JsonResponse(false, error.message),
      };
    }
  },
};

export default UserJoinPotService;
