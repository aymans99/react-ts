import CourseGoal from "./components/CourseGoal";
import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";
export type CourseGoal = {
  title: string;
  description: string;
  id: number;
};
export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  const addGoal = (goal: string, summary: string) => {
    setGoals((prev) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prev, newGoal];
    });
  };

  const handleDelteGoal = (id: number) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };
  return (
    <main>
      <Header image={{ src: goalsImg, alt: "an image" }}>
        <h1>Your course goals</h1>
      </Header>
      <NewGoal onAddGoal={addGoal} />
      <CourseGoalList goals={goals} onDeleteGoal={handleDelteGoal} />
    </main>
  );
}
