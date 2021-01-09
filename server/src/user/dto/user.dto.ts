import KakaoUserInfo from "../../common/types/kakao";
import UserInfo from "../../common/types/user";

export class KakaoToUserDTO {
  id!: number;
  name!: string;
  constructor(userInfo: KakaoUserInfo) {
    this.id = userInfo.id;
    this.name = userInfo.properties.nickname;
  }
}

export class UserDTO {
  id!: number;
  name!: string;
  credibility!: number;
  savedMoney!: number;
  assesmentCount!: number;
  constructor(userInfo: UserInfo) {
    this.id = userInfo.id;
    this.name = userInfo.name;
    this.credibility = userInfo.credibility;
    this.savedMoney = userInfo.savedMoney;
    this.assesmentCount = userInfo.assesmentCount;
  }
}
