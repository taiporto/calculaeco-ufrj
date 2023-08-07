import { fetchSubjectsByTermAndMajor } from "@/api";
import Link from "next/link";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { GradesProvider } from "./context/grades";
import { Main } from "./components/Main.client";
import { SubjectsProvider } from "./context/subjects";

type PageProps = {
  searchParams: { [key: string]: string | undefined };
};

export default async function Page({ searchParams }: PageProps) {
  const { term, major } = searchParams;

  if (!term || !major)
    return (
      <>
        <header>
          <Link href="/">
            <ArrowLeftIcon />
          </Link>
        </header>
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
      <header>
        <Link href="/">
          <ArrowLeftIcon />
        </Link>
      </header>
      <SubjectsProvider fetchedSubjects={fetchedSubjects}>
        <GradesProvider>
          <Main />
        </GradesProvider>
      </SubjectsProvider>
    </>
  );
}
