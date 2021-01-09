import KakaoUserInfo from "../../common/types/kakao";

export default class KakaoToUserDTO {
  id!: number;
  name!: string;
  constructor(userInfo: KakaoUserInfo) {
    this.id = userInfo.id;
    this.name = userInfo.properties.nickname;
  }
}
