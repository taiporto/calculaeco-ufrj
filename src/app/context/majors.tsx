"use client";

import { createContext, ReactNode, useContext } from "react";

import { Major } from "@/api/types";

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
