"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { GradeMap } from "../types";
import { Subject } from "@/api/types";

type SubjectsContextProps = {
  originalSubjects: Subject[];
  subjects: Subject[];
  updateSubjects: (newSubjects: Subject[]) => void;
  isLoading: boolean;
};

const SubjectsContext = createContext<SubjectsContextProps>({
  originalSubjects: [],
  subjects: [],
  updateSubjects: () => {},
  isLoading: false,
});

export const SubjectsProvider = ({
  fetchedSubjects,
  children,
}: {
  fetchedSubjects: Subject[];
  children: ReactNode;
}) => {
  const [subjects, setSubjects] = useState(fetchedSubjects);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const sessionSubjects = sessionStorage.getItem("subjects");

    if (!sessionSubjects) return;

    setSubjects(JSON.parse(sessionSubjects));
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [subjects]);

  const updateSubjects = (nextSubjects: Subject[]) => {
    setIsLoading(true);
    setSubjects((prevSubjects) => {
      sessionStorage.setItem("subjects", JSON.stringify(nextSubjects));
      return prevSubjects !== nextSubjects ? nextSubjects : prevSubjects;
    });
  };

  return (
    <SubjectsContext.Provider
      value={{
        originalSubjects: fetchedSubjects,
        subjects,
        updateSubjects,
        isLoading,
      }}
    >
      {children}
    </SubjectsContext.Provider>
  );
};

export const useSubjectsContext = () => useContext(SubjectsContext);
