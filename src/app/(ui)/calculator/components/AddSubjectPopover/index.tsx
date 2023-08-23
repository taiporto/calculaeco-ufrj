"use client";

import React, { FormEvent, useState } from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import * as Popover from "@radix-ui/react-popover";

import { Subject } from "@/api/types";
import { useSubjectsContext } from "@/app/(ui)/calculator/context/subjects";
import { useMajorsContext } from "@/app/context/majors";
import MajorTermForm from "@/components/MajorTermForm";

import {
  fetchSubjectById,
  fetchSubjectsByTermAndMajor,
} from "./utils/fetchSubjects";
import * as S from "./styles";
import { SubjectSelectionForm } from "./SubjectSelectionForm";

const AddSubjectPopover = () => {
  const majors = useMajorsContext();
  const {
    subjects: calculatorSubjects,
    updateSubjects: setCalculatorSubjects,
  } = useSubjectsContext();

  const [major, setMajor] = useState("");
  const [term, setTerm] = useState("");
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [isSelectSubjectOpen, setIsSelectSubjectOpen] = useState(false);
  const [newSubjectId, setNewSubjectId] = useState<Subject["id"]>(0);

  const handleAddSubject = (newSubject: Subject) => {
    if (
      calculatorSubjects?.some(
        (includedSubject) => newSubject.id === includedSubject.id
      )
    ) {
      console.log("Matéria já adicionada!");
      return;
    }

    setCalculatorSubjects([...calculatorSubjects, newSubject]);
  };

  const addSubject = async (): Promise<void> => {
    const subject = await fetchSubjectById(newSubjectId);

    if (!subject) return;
    handleAddSubject(subject);
  };

  const handleSubmitPreForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const fetchedSubjects = await fetchSubjectsByTermAndMajor(term, major);

    if (!fetchedSubjects) return;

    setSubjects(fetchedSubjects);
    setIsSelectSubjectOpen(true);
  };

  const handleNewSubjectChange = (value: string) => {
    setNewSubjectId(+value);
  };

  const handleSubmitSubjectForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!newSubjectId) return;
    addSubject();
  };

  return (
    <Popover.Portal>
      <S.PopoverContent>
        <div>
          <MajorTermForm
            majorsData={majors}
            setMajor={setMajor}
            setTerm={setTerm}
            submitButtonValue="Pesquisar matérias"
            handleSubmitForm={handleSubmitPreForm}
          />
          {isSelectSubjectOpen && subjects && (
            <SubjectSelectionForm
              onSubmit={handleSubmitSubjectForm}
              handleNewSubjectChange={handleNewSubjectChange}
              subjects={subjects}
            />
          )}
        </div>
        <S.PopoverClose aria-label="Close">
          <Cross2Icon />
        </S.PopoverClose>
        <S.PopoverArrow />
      </S.PopoverContent>
    </Popover.Portal>
  );
};

export { AddSubjectPopover };
