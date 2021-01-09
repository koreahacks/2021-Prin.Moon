export default class PotDTO {
  title!: string;
  endTime?: Date;
  latitude?: number;
  longitude?: number;
  appLink?: string;
  kakaoLink!: string;
  memo?: string;
  fee!: number;
  ownerId!: number;
  categoryId!: number;
  totalPeople?: number;

  constructor(body: any) {
    this.title = body.title;
    this.endTime = body.endTime ? body.endTime : null;
    this.latitude = body.latitude ? body.latitude : null;
    this.longitude = body.longitude ? body.longitude : null;
    this.appLink = body.appLink ? body.appLink : null;
    this.kakaoLink = body.kakaoLink;
    this.memo = body.memo ? body.memo : null;
    this.fee = body.fee;
    this.ownerId = body.ownerId;
    this.categoryId = body.categoryId;
    this.totalPeople = body.totalPeople ? body.totalPeople : null;
  }
}
