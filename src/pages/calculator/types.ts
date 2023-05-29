import { Subject } from "@/api/types";

export type GradeMap = Map<Subject["id"], Grade>;

export type Grade = {
  value: number;
  weight: number;
};