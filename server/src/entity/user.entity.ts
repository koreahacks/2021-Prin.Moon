import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import PotEntity from "./pot.entity";
import UserJoinPotEntity from "./user-join-pot.entity";

@Entity("User")
export default class UserEntity {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: number;

  @Column({ type: "varchar" })
  email!: string;

  @Column({ type: "varchar" })
  name!: string;

  @Column({ type: "int", default: 0 })
  credibility!: number;

  @Column({ type: "int", default: 0 })
  savedMoney!: number;

  @OneToMany(() => PotEntity, (pot) => pot.owner, { cascade: true })
  pot?: PotEntity[];

  @OneToMany(() => UserJoinPotEntity, (userJoinPot) => userJoinPot.user, {
    cascade: true,
  })
  userJoinPot?: UserJoinPotEntity[];
}
