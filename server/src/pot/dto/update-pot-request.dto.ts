export default class UpdatePotRequest {
  title?: string;
  endTime?: Date;
  latitude?: number;
  longitude?: number;
  appLink?: string;
  kakaoLink?: string;
  memo?: string;
  fee?: number;
  categoryId?: number;
  totalPeople?: number;

  constructor(body: any) {
    this.title = body.title ? body.title : null;
    this.endTime = body.endtime ? body.endTime : null;
    this.latitude = body.latitude ? body.latitude : null;
    this.longitude = body.longitude ? body.longitude : null;
    this.appLink = body.appLink ? body.appLink : null;
    this.kakaoLink = body.kakaoLink ? body.kakaoLink : null;
    this.memo = body.memo ? body.memo : null;
    this.fee = body.fee ? body.fee : null;
    this.categoryId = body.categoryId ? body.categoryId : null;
    this.totalPeople = body.totalPeople ? body.totalPeople : null;
  }
}
