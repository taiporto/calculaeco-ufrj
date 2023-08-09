import { fetchSubjectsByTermAndMajor } from "@/api";
import { GradesProvider } from "./context/grades";
import { Main } from "./components/Main.client";
import { SubjectsProvider } from "./context/subjects";
import React from "react";
import { Header } from "./components/Header";

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
