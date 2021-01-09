import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import CategoryEntity from "./category.entity";
import UserJoinPotEntity from "./user-join-pot.entity";
import UserEntity from "./user.entity";

@Entity("Pot")
export default class PotEntity {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: number;

  @CreateDateColumn()
  createAt!: Date;

  @Column({ type: "varchar" })
  title!: string;

  @Column({ type: "date", nullable: true })
  endTime?: Date;

  @Column({ type: "varchar", nullable: true })
  location?: string;

  @Column({ type: "varchar", nullable: true })
  appLink?: string;

  @Column({ type: "varchar" })
  kakaoLink!: string;

  @Column({ type: "varchar", nullable: true })
  memo?: string;

  @Column({ type: "int" })
  fee!: number;

  @Column({ type: "bool", default: true })
  isOpened!: boolean;

  @Column({ type: "int" })
  ownerId!: number;

  @Column({ type: "int" })
  categoryId!: number;

  @Column({ type: "int", nullable: true })
  totalPeople?: number;

  @OneToMany(() => UserJoinPotEntity, (userJoinPot) => userJoinPot.pot, {
    cascade: true,
  })
  userJoinPot?: UserJoinPotEntity[];

  @ManyToOne(() => UserEntity, (user) => user.pot, { onUpdate: "CASCADE" })
  @JoinColumn({
    name: "ownerId",
    referencedColumnName: "id",
  })
  owner!: UserEntity;

  @ManyToOne(() => CategoryEntity, (category) => category.pot, {
    onUpdate: "CASCADE",
  })
  @JoinColumn({
    name: "categoryId",
    referencedColumnName: "id",
  })
  category!: CategoryEntity;
}
