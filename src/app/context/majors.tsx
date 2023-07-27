"use client";

import { Major } from "@/api/types";
import { ReactNode, createContext, useContext } from "react";

const MajorsContext = createContext([] as Major[]);

type MajorsProviderProps = {
  value: Major[];
  children: ReactNode;
};

export const MajorsProvider = ({ value, children }: MajorsProviderProps) => {
  return (
    <MajorsContext.Provider value={value}>{children}</MajorsContext.Provider>
  );
};

export const useMajorsContext = () => {
  return useContext(MajorsContext);
};
