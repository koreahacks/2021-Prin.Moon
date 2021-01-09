import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: 10px;
  background-color: white;
  border-radius: 20px;
  min-height: 25vh;
`;

// id!: number;

// @CreateDateColumn()
// createAt!: Date;

// @Column({ type: "date" })
// endTime!: Date;

// @Column({ type: "varchar" })
// location!: string;

// @Column({ type: "varchar" })
// appLink!: string;

// @Column({ type: "varchar" })
// kakaoLink!: string;

// @Column({ type: "varchar" })
// memo!: string;

// @Column({ type: "int" })
// badalbee!: number;

// @Column({ type: "bool", default: true })
// isOpened!: boolean;

// @Column({ type: "int" })
// ownerId!: number;

// @Column({ type: "int" })
// categoryId!: number;

// @OneToMany(() => UserJoinPotEntity, (userJoinPot) => userJoinPot.pot, {
//   cascade: true,
// })
// userJoinPot?: UserJoinPotEntity[];

// @ManyToOne(() => UserEntity, (user) => user.pot, { onUpdate: "CASCADE" })
// @JoinColumn({
//   name: "ownerId",
//   referencedColumnName: "id",
// })
// owner!: UserEntity;

// @ManyToOne(() => CategoryEntity, (category) => category.pot, {
//   onUpdate: "CASCADE",
// })
// @JoinColumn({
//   name: "categoryId",
//   referencedColumnName: "id",
// })
// category!: CategoryEntity;

export default function ListContainer({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
