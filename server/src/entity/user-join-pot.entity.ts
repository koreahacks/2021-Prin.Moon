import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import PotEntity from "./pot.entity";
import UserEntity from "./user.entity";

@Entity("UserJoinPot")
export default class UserJoinPotEntity {
  @PrimaryColumn({ type: "int" })
  userId!: number;

  @PrimaryColumn({ type: "int" })
  potId!: number;

  @Column({ type: "boolean", default: true })
  onGoing!: boolean;

  @Column({ type: "boolean", default: false })
  isEvaluated!: boolean;

  @ManyToOne(() => UserEntity, (user) => user.userJoinPot, {
    onUpdate: "CASCADE",
  })
  @JoinColumn({
    name: "userId",
    referencedColumnName: "id",
  })
  user!: UserEntity;

  @ManyToOne(() => PotEntity, (pot) => pot.userJoinPot, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  @JoinColumn({
    name: "potId",
    referencedColumnName: "id",
  })
  pot!: PotEntity;
}
