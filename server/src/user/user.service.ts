import { getRepository } from "typeorm";
import KakaoUserInfo from "../common/types/kakao";
import UserEntity from "../entity/user.entity";
import { KakaoToUserDTO, UserDTO } from "./dto/user.dto";
import { resMessage, statusCode } from "../common/constant";
import JsonResponse from "../common/types/json-response";

const UserService = {
  getOrCreateUser: async (userInfo: KakaoUserInfo) => {
    const userRepository = getRepository(UserEntity);
    let user = await userRepository.findOne({ where: { id: userInfo.id } });
    if (!user) {
      const newUser = userRepository.create(new KakaoToUserDTO(userInfo));
      user = await userRepository.save(newUser);
    }
    return user;
  },
  getDecodedUser: async (id: number, name: string) => {
    const userRepository = getRepository(UserEntity);
    const user = await userRepository.findOne({ where: { id, name } });
    return user;
  },
  updateUserCredibility: async (id: number, credibility: number) => {
    try {
      const userRepository = getRepository(UserEntity);
      const targetUser = await userRepository.findOne({ where: { id } });
      if (!targetUser) {
        return {
          code: statusCode.BAD_REQUEST,
          json: new JsonResponse(false, resMessage.NO_X("user")),
        };
      }
      const {
        credibility: prevCredibility,
        assesmentCount: prevAssesmentCount,
      } = targetUser;

      let nextCredibility;
      if (prevAssesmentCount !== 0) {
        nextCredibility = +(
          (prevCredibility + credibility) /
          prevAssesmentCount
        ).toFixed(1);
      } else {
        nextCredibility = credibility;
      }

      const updatedUser = userRepository.merge(targetUser, {
        credibility: nextCredibility,
        assesmentCount: prevAssesmentCount + 1,
      });
      await userRepository.save(updatedUser);
      return {
        code: statusCode.OK,
        json: updatedUser,
      };
    } catch (e) {
      return {
        code: statusCode.DB_ERROR,
        json: new JsonResponse(false, resMessage.DB_ERROR),
      };
    }
  },
  updateUserSavedMoney: async (
    id: number | undefined,
    name: string | undefined,
    money: number
  ) => {
    try {
      const userRepository = getRepository(UserEntity);
      const targetUser = await userRepository.findOne({ where: { id, name } });
      if (!targetUser) {
        return {
          code: statusCode.BAD_REQUEST,
          json: new JsonResponse(false, resMessage.NO_X("user")),
        };
      }
      const { savedMoney: prevSavedMoney } = targetUser;

      const nextSavedMoney = prevSavedMoney + money;

      const updatedUser = userRepository.merge(targetUser, {
        savedMoney: nextSavedMoney,
      });
      await userRepository.save(updatedUser);
      return {
        code: statusCode.OK,
        json: updatedUser,
      };
    } catch (e) {
      return {
        code: statusCode.DB_ERROR,
        json: new JsonResponse(false, resMessage.DB_ERROR),
      };
    }
  },
};

export default UserService;
