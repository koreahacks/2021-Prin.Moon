import { getRepository } from "typeorm";
import { resMessage, statusCode } from "../common/constant";
import JsonResponse from "../common/types/json-response";
import PotEntity from "../entity/pot.entity";
import UserJoinPotEntity from "../entity/user-join-pot.entity";
import sortPotsByLocation, { getDistance } from "../lib/sort-pot-by-location";
import PotDTO from "./dto/pot.dto";
import UpdatePotRequest from "./dto/update-pot-request.dto";

const PotService = {
  getUserJoinedPot: async (userId: number) => {
    const userJoinPotReository = getRepository(UserJoinPotEntity);
    const potList = await userJoinPotReository.find({
      where: { userId },
    });

    return potList;
  },

  getUserOwnedPot: async (userId: number) => {
    const potRepository = getRepository(PotEntity);
    const potList = await potRepository.find({ where: { ownerId: userId } });

    return potList;
  },

  getPotById: async (potId: number, latitude: number, longitude: number) => {
    const potRepository = getRepository(PotEntity);
    const potInfo = await potRepository.findOne({
      relations: ["owner", "userJoinPot"],
      where: { id: potId },
    });

    if (!potInfo)
      return {
        code: statusCode.NOT_FOUND,
        json: new JsonResponse(false, resMessage.NO_X("Pot")),
      };
    if (potInfo.latitude && potInfo.longitude) {
      const distance = getDistance(
        latitude,
        longitude,
        potInfo.latitude,
        potInfo.longitude
      );
      const calculatedPotInfo = { ...potInfo, distance };
      return {
        code: statusCode.OK,
        json: calculatedPotInfo,
      };
    } else {
      return {
        code: statusCode.OK,
        json: potInfo,
      };
    }
  },

  getRecentPots: async () => {
    const potRepository = getRepository(PotEntity);
    const potList = await potRepository.find({
      relations: ["owner"],
      take: 7,
      where: { isOpened: true },
    });

    return potList;
  },

  getPotsByCategory: async (categoryId: number) => {
    const potRepository = getRepository(PotEntity);
    const potList = await potRepository.find({
      relations: ["owner"],
      where: { categoryId, isOpened: true },
    });

    return potList;
  },

  getPotsNearBy: async (latitude: number, longitude: number) => {
    const potRepository = getRepository(PotEntity);
    const potList = await potRepository.find({
      relations: ["owner"],
      where: { isOpened: true },
    });
    const sortedPotList = sortPotsByLocation(potList, latitude, longitude);

    return sortedPotList.splice(0, 3);
  },

  getPotsWithCategoryNearBy: async (
    categoryId: number,
    latitude: number,
    longitude: number
  ) => {
    const potRepository = getRepository(PotEntity);
    const potList = await potRepository.find({
      relations: ["owner"],
      where: { categoryId, isOpened: true },
    });
    const sortedPotList = sortPotsByLocation(potList, latitude, longitude);

    return sortedPotList;
  },

  createPot: async (pot: PotDTO) => {
    try {
      const potRepository = getRepository(PotEntity);
      const newPot = potRepository.create(pot);
      await potRepository.save(newPot);
      return {
        code: statusCode.CREATED,
        json: newPot,
      };
    } catch (e) {
      return {
        code: statusCode.DB_ERROR,
        json: new JsonResponse(false, resMessage.DB_ERROR),
      };
    }
  },
  updatePotInfo: async (potId: number, pot: UpdatePotRequest) => {
    try {
      const potRepository = getRepository(PotEntity);
      const targetPot = await potRepository.findOne({ where: { id: potId } });
      if (!targetPot)
        return {
          code: statusCode.BAD_REQUEST,
          json: new JsonResponse(false, resMessage.NO_X("Pot")),
        };
      const updatedPot = potRepository.merge(targetPot, pot);
      await potRepository.save(updatedPot);
      return {
        code: statusCode.OK,
        json: updatedPot,
      };
    } catch {
      return {
        code: statusCode.DB_ERROR,
        json: new JsonResponse(false, resMessage.DB_ERROR),
      };
    }
  },
};

export default PotService;
