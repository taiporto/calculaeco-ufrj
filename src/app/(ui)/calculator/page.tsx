import React from "react";

import { fetchSubjectsByTermAndMajor } from "@/api";

import { Header } from "./components/Header";
import { Main } from "./components/Main.client";
import { GradesProvider } from "./context/grades";
import { SubjectsProvider } from "./context/subjects";

type PageProps = {
  searchParams: { [key: string]: string | undefined };
};

export default async function Page({ searchParams }: PageProps) {
  const { term, major } = searchParams;

  if (!term || !major)
    return (
      <>
        <Header />
        <SubjectsProvider fetchedSubjects={[]}>
          <GradesProvider>
            <Main />
          </GradesProvider>
        </SubjectsProvider>
      </>
    );

  const fetchedSubjects = await fetchSubjectsByTermAndMajor(term, major);

  return (
    <>
      <Header />
      <SubjectsProvider fetchedSubjects={fetchedSubjects}>
        <GradesProvider>
          <Main />
        </GradesProvider>
      </SubjectsProvider>
    </>
  );
}
