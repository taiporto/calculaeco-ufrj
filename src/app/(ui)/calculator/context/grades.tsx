"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { GradeMap } from "../types";

type GradesContextProps = {
  grades: GradeMap;
  setGrades: Dispatch<SetStateAction<GradeMap>>;
};

const GradesContext = createContext<GradesContextProps>({
  grades: new Map(),
  setGrades: () => {},
});

export const GradesProvider = ({ children }: { children: ReactNode }) => {
  const [grades, setGrades] = useState<GradeMap>(new Map());

  return (
    <GradesContext.Provider value={{ grades, setGrades }}>
      {children}
    </GradesContext.Provider>
  );
};

export const useGradesContext = () => useContext(GradesContext);
