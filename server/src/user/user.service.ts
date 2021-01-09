import { getRepository } from "typeorm";
import KakaoUserInfo from "../common/types/kakao";
import UserEntity from "../entity/user.entity";
import KakaoToUserDTO from "./dto/user.dto";

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
};

export default UserService;
