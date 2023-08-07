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
import { Subject } from "@/api/types";

type SubjectsContextProps = {
  originalSubjects: Subject[];
  subjects: Subject[];
  setSubjects: Dispatch<SetStateAction<Subject[]>>;
};

const SubjectsContext = createContext<SubjectsContextProps>({
  originalSubjects: [],
  subjects: [],
  setSubjects: () => {},
});

export const SubjectsProvider = ({
  fetchedSubjects,
  children,
}: {
  fetchedSubjects: Subject[];
  children: ReactNode;
}) => {
  const [subjects, setSubjects] = useState(fetchedSubjects);

  return (
    <SubjectsContext.Provider
      value={{ originalSubjects: fetchedSubjects, subjects, setSubjects }}
    >
      {children}
    </SubjectsContext.Provider>
  );
};

export const useSubjectsContext = () => useContext(SubjectsContext);
