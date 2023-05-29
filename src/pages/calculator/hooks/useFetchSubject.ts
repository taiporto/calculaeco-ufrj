import { Subject } from "@/api/types";
import { useQuery } from "react-query";

const useFetchSubject = (subjectId: Subject["id"], options) => {
  const fetchSubject = async () => {
    return await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/subjects/${subjectId}`)
      .then(async (res) => {
        if (!res.ok) throw new Error(`Error ${res.status} - ${res.statusText}`);

        return await res.json();
      })
      .catch((e) => console.error(e));
  };

  const {
    isLoading,
    error,
    data,
    refetch,
  } = useQuery(["subject", subjectId], fetchSubject, options);

  if (error) return { subject: null, error };

  return { data, isLoading, refetch, error };
};

export { useFetchSubject };
