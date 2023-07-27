"use client";

import React, { useEffect, useState } from "react";

import { Subject } from "@/api/types";
import { GradeMap } from "./types";
import { calculateCR } from "./utils/calculateCR";
import { SubjectBlock } from "@/components/calculator/SubjectBlock";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { AddSubjectPopover } from "@/components/modals/AddSubjectPopover";

import * as Popover from "@radix-ui/react-popover";

type Props = {
  fetchedSubjects: Array<Subject>;
};

const Calculator = ({ fetchedSubjects }: Props) => {
  const [subjects, setSubjects] = useState(fetchedSubjects);
  const [grades, setGrades] = useState<GradeMap>(new Map());
  const [CR, setCR] = useState<number>(0);

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
    <Popover.Root modal={true}>
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
          <Popover.Trigger>
            <div>Adicionar matéria</div>
          </Popover.Trigger>
          {fetchedSubjects.length >= 1 && (
            <button onClick={resetSubjects}>Resetar lista de matérias</button>
          )}
        </div>
      </main>
      <AddSubjectPopover handleAddSubject={handleAddSubject} />
    </Popover.Root>
  );
};

export default Calculator;
