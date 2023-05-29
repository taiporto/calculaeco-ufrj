import { useQuery } from "react-query";

export const useFetchAllMajorsData = () => {
  const fetchData = async () => {
    return fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/majors/`)
      .then((res: Response) => {
        if (!res.ok) throw new Error(`Error ${res.status} - ${res.statusText}`);
        return res.json();
      })
      .catch((error) => console.log(error));
  };

  const { isLoading, error, data } = useQuery("allMajors", fetchData);

  if (error) return { majorsData: null, error };

  return { majorsData: data, isLoading };
};
