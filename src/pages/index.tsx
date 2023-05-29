import { useState } from "react";
import { useRouter } from "next/router";
import MajorTermForm from "@/components/MajorTermForm";
import Link from "next/link";

export default function Home() {
  const [major, setMajor] = useState("");
  const [term, setTerm] = useState("");

  const router = useRouter();

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (term !== "" && major !== "") {
      localStorage.setItem("selected_major", major);
      localStorage.setItem("selected_term", term);
      router.push(`/calculator?term=${term}&major=${major}`);
    }
  };

  return (
    <>
      <main>
        <div>
          <p>Major: {major}</p>
          <p>Term: {term}</p>
        </div>
        <MajorTermForm
          setMajor={setMajor}
          setTerm={setTerm}
          handleSubmitForm={handleSubmitForm}
          submitButtonValue={"Calcular CR"}
        />
        <Link href="/calculator">Quero escolher minhas próprias matérias</Link>
      </main>
    </>
  );
}
