import { Subject } from "@/api/types";

export const fetchSubjectById = async (
  subjectId: Subject["id"]
): Promise<Subject | undefined> => {
  const subject = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/subjects/${subjectId}`
  )
    .then((res: Response) => {
      if (!res.ok) throw new Error(`Error ${res.status} - ${res.statusText}`);

      return res.json();
    })
    .catch((e) => console.error(e));

  if (!subject) return;

  return subject;
};

export const fetchSubjectsByTermAndMajor = async (
  term: string,
  major: string
): Promise<Subject[] | undefined> => {
  console.log({ term, major });
  const fetchedSubjects = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/api/subjects?term=${term}&major=${major}`
  )
    .then((res: Response) => {
      if (!res.ok) throw new Error(`Error ${res.status} - ${res.statusText}`);

      return res.json();
    })
    .catch((e) => console.error(e));

  if (!fetchedSubjects) return;

  return fetchedSubjects;
};
