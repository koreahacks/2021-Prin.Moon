export default class PotDTO {
  title!: string;
  endTime?: Date;
  location?: string;
  appLink?: string;
  kakaoLink!: string;
  memo?: string;
  fee!: number;
  ownerId!: number;
  categoryId!: number;
  totalPeople?: number;

  constructor(body: any) {
    this.title = body.title;
    this.endTime = body.endtime ? body.endTime : null;
    this.location = body.location ? body.location : null;
    this.appLink = body.appLink ? body.appLink : null;
    this.kakaoLink = body.kakaoLink;
    this.memo = body.memo ? body.memo : null;
    this.fee = body.fee;
    this.ownerId = body.ownerId;
    this.categoryId = body.categoryId;
    this.totalPeople = body.totalPeople ? body.totalPeople : null;
  }
}
