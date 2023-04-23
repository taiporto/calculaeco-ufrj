import Head from "next/head";
import { Inter } from "next/font/google";
import { fetchAllMajors } from "@/api";
import { Major } from "@/api/types";
import { ChangeEvent, FormEventHandler, useRef, useState } from "react";
import { useRouter } from "next/router";
import { LocalHead } from "@/components/general/Head";

const inter = Inter({ subsets: ["latin"] });

type Props = {
  majorsData: Array<Major>;
};

export default function Home({ majorsData }: Props) {

  const [major, setMajor] = useState('');
  const [term, setTerm] = useState('');

  const router = useRouter();

  const termRef = useRef<HTMLSelectElement>(null);

  const resetSelectability = () => {
    termRef.current?.querySelectorAll('option').forEach(option => (option as HTMLOptionElement).disabled = false)
  }

  const handleMajorChange = (e: ChangeEvent<HTMLSelectElement>) => {

    resetSelectability();

    const {value} = e.target;

    setMajor(value);

    if(['jcs', 'pp', 'pe', 'rtv'].includes(value)) {
      const baseCurriculumOptions =  termRef.current?.querySelectorAll('option.base_curriculum');

      if (baseCurriculumOptions) {
        baseCurriculumOptions.forEach((option) => {
           (option as HTMLOptionElement).disabled = true
         })
      }
    }

    if(value === 'cs') {
      const specializationOptions =  termRef.current?.querySelectorAll('option.specialization');

      if (specializationOptions) {
        specializationOptions.forEach((option) => {
           (option as HTMLOptionElement).disabled = true
         })
      }
    }
  }

  const handleTermChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTerm(e.target.value);
  }

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    
    if(term !== '' && major !== ''){
      localStorage.setItem('selected_major', major);
      localStorage.setItem('selected_term', term);
      router.push(`/calculator?term=${term}&major=${major}`);
    }
  }

  return (
    <>
      <LocalHead pageName='Página Inicial'/>
      <main>
        <div>
          <p>Major: {major}</p>
          <p>Term: {term}</p>
        </div>
        <form onSubmit={handleSubmitForm}>
          <select name="major" onChange={handleMajorChange} defaultValue={"default"}>
            <option value="default" disabled> --Selecione o curso-- </option>
            {majorsData.map((major:Major) => <option key={major.id} id={major.id} value={major.id}>{major.name}</option>)}
          </select>
          <select name="term" onChange={handleTermChange} defaultValue={"default"} ref={termRef}>
            <option value="default" disabled> --Selecione o período-- </option>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((term) => {
              return (<option className={term <= 3 ? "base_curriculum" : "specialization"} id={`${term}_periodo`} key={`${term}_periodo`}  value={term}>{term}º período</option>)
            })}
          </select>
          <input type='submit' value={'Calcular CR'}/>
        </form>
        <button>Quero escolher minhas próprias matérias</button>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const majorsData = await fetchAllMajors();

  console.log({ majorsData });

  return {
    props: {
      majorsData,
    }, // will be passed to the page component as props
  };
}
