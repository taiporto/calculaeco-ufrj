import { GradeMap } from "../types";

export const calculateCR = (grades: GradeMap) => {
  let weightSum = 0;

  const sum = Array.from(grades.values()).reduce((acc, currentGrade) => {
    weightSum += currentGrade.weight;
    return (acc += +currentGrade.value * currentGrade.weight);
  }, 0);

  return +(sum / weightSum).toFixed(1);
};