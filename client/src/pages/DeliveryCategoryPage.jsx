import React from "react";
import ListCard from "../components/ListCard";

export default function DeliveryCategoryPage() {
  return (
    <div>
      <ListCard
        id={1}
        distance={10}
        title={"123"}
        createAt={"2021-01-09T11:44:35.441Z"}
        totalPeople={4}
        joinedPeople={2}
      ></ListCard>
    </div>
  );
}
