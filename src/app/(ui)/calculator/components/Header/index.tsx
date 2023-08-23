"use client";

import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { useSubjectsContext } from "../../context/subjects";

export const Header = () => {
  const router = useRouter();

  const { updateSubjects } = useSubjectsContext();

  const onClick = async (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    updateSubjects([]);
    sessionStorage.removeItem("subjects");

    await router.push("/");
  };
  return (
    <header>
      <Link href="/" onClick={onClick}>
        <ArrowLeftIcon />
      </Link>
    </header>
  );
};
