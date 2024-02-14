import React, { type ReactNode } from "react";
import { type CourseGoal as CGoal } from "../App";
import CourseGoal from "./CourseGoal";
import InfoBox from "./InfoBox";
type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

const CourseGoalList = ({ goals, onDeleteGoal }: CourseGoalListProps) => {
  if (goals.length === 0) {
    return (
      <InfoBox mode="hint">You have no goals yet . start adding some</InfoBox>
    );
  }
  let warningBox: ReactNode;

  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode="warning" severity="high">
        You are collecting too much goals
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
};

export default CourseGoalList;
