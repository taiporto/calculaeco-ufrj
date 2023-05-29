import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import { Subject } from "@/api/types";
import { fetchSubjectsByTermAndMajor } from "@/api/fetchSubjects";
import { AddSubjectModal } from "@/components/modals/AddSubjectModal";
import { GradeMap } from "./types";
import { calculateCR } from "./utils/calculateCR";
import { SubjectBlock } from "@/components/calculator/SubjectBlock";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type Props = {
  fetchedSubjects: Array<Subject>;
};

const Calculator = ({ fetchedSubjects }: Props) => {
  const [subjects, setSubjects] = useState(fetchedSubjects);
  const [grades, setGrades] = useState<GradeMap>(new Map());
  const [CR, setCR] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (grades?.size) {
      setCR(calculateCR(grades));
    }
  }, [grades]);

  const handleGradeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = event.target;

    const weight = subjects.find((subject) => subject.id === id)?.weight;

    console.log({ value, id, weight });

    setGrades((prevGrades) => {
      return new Map(
        prevGrades.set(id, {
          value: +value,
          weight: weight ?? 0,
        })
      );
    });
    return;
  };

  const handleClickOnAddSubjects = () => {
    setIsModalOpen(true);
  };

  const handleAddSubject = (newSubject: Subject) => {
    if (
      subjects?.some((includedSubject) => newSubject.id === includedSubject.id)
    ) {
      console.log("Matéria já adicionada!");
      return;
    }

    setSubjects((prevSubjects) => {
      if (!prevSubjects) return [newSubject];

      return [...prevSubjects, newSubject];
    });
  };

  const handleDeleteSubject = (deletedSubjectId: Subject["id"]) => {
    handleClearGrade(deletedSubjectId);
    setSubjects((prevSubjects) =>
      prevSubjects.filter((subject) => subject.id !== deletedSubjectId)
    );
  };

  const handleClearGrade = (subjectId: Subject["id"]) => {
    setGrades((prevGrades: GradeMap) => {
      if (prevGrades) {
        const newMap = new Map(prevGrades);
        if (newMap.has(subjectId) && newMap.delete(subjectId))
          return newMap as GradeMap;
      }
      return prevGrades;
    });
  };

  const resetSubjects = () => {
    setSubjects(fetchedSubjects);
  };

  return (
    <>
      <header>
        <Link href="/">
          <ArrowLeftIcon />
        </Link>
      </header>
      <main>
        <div>
          <div>
            <div>N° de matérias consideradas:</div>
            <div>{grades?.size ?? 0}</div>
          </div>
          <div>
            <div>CR</div>
            <div>{CR}</div>
          </div>
        </div>
        <form>
          {subjects.map((subject) => {
            return (
              <SubjectBlock
                key={subject.id}
                subject={subject}
                onChange={handleGradeChange}
                onDeleteSubject={handleDeleteSubject}
                onClearGrade={handleClearGrade}
              />
            );
          })}
        </form>
        <div>
          <button onClick={handleClickOnAddSubjects}>Adicionar matéria</button>
          {fetchedSubjects.length >= 1 && (
            <button onClick={resetSubjects}>Resetar lista de matérias</button>
          )}
        </div>
      </main>
      {isModalOpen &&
        createPortal(
          <AddSubjectModal handleAddSubject={handleAddSubject} />,
          document.body
        )}
    </>
  );
};

export async function getServerSideProps(context: any) {
  const { term, major } = context?.query;

  const fetchedSubjects = await fetchSubjectsByTermAndMajor(term, major);

  return {
    props: {
      fetchedSubjects,
    },
  };
}

export default Calculator;
