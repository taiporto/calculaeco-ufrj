import { fetchSubjectsByTermAndMajor } from "@/api";
import Calculator from "./Calculator.client";

type PageProps = {
  searchParams: { [key: string]: string | undefined };
};

export default async function Page({ searchParams }: PageProps) {
  const { term, major } = searchParams;

  if (!term || !major) return <Calculator fetchedSubjects={[]} />;

  const fetchedSubjects = await fetchSubjectsByTermAndMajor(term, major);

  return <Calculator fetchedSubjects={fetchedSubjects} />;
}
