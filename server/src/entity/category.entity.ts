import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import PotEntity from "./pot.entity";

@Entity("Category")
export default class CategoryEntity {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: number;

  @Column({ type: "varchar" })
  name!: string;

  @OneToMany(() => PotEntity, (pot) => pot.category, { cascade: true })
  pot?: PotEntity[];
}
