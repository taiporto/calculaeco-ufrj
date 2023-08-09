"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import MajorTermForm from "@/components/MajorTermForm";
import Link from "next/link";
import { FormContainer } from "../styles";
import { useMajorsContext } from "../context/majors";

export default function HomePage() {
  const [major, setMajor] = useState("");
  const [term, setTerm] = useState("");

  const majors = useMajorsContext();

  const router = useRouter();

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (term !== "" && major !== "") {
      localStorage.setItem("selected_major", major);
      localStorage.setItem("selected_term", term);

      const button = event.currentTarget.querySelector('button[type="submit"]');

      if (button) button.textContent = "Loading...";

      router.push(`/calculator?term=${term}&major=${major}`);
    }
  };

  return (
    <>
      <FormContainer>
        <MajorTermForm
          majorsData={majors}
          setMajor={setMajor}
          setTerm={setTerm}
          handleSubmitForm={handleSubmitForm}
          submitButtonValue={"Ir para a calculadora"}
        />
      </FormContainer>
      <Link href="/calculator">
        Prefiro escolher minhas próprias matérias 😅
      </Link>
    </>
  );
}
