"use client";

import * as Popover from "@radix-ui/react-popover";
import { Subject } from "@/api/types";
import MajorTermForm from "@/components/MajorTermForm";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { useMajorsContext } from "@/app/context/majors";
import { Cross2Icon } from "@radix-ui/react-icons";
import {
  fetchSubjectById,
  fetchSubjectsByTermAndMajor,
} from "./utils/fetchSubjects";
import { SubjectSelectionForm } from "./SubjectSelectionForm";

import * as S from "./styles";
import { useSubjectsContext } from "@/app/(ui)/calculator/context/subjects";

type AddSubjectPopoverProps = {
  handleAddSubject: (subjectData: Subject) => void;
};

const AddSubjectPopover = () => {
  const majors = useMajorsContext();
  const { subjects, setSubjects } = useSubjectsContext();

  const [major, setMajor] = useState("");
  const [term, setTerm] = useState("");
  const [isSelectSubjectOpen, setIsSelectSubjectOpen] = useState(false);
  const [newSubjectId, setNewSubjectId] = useState<string>("");

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

  const handleNewSubjectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setNewSubjectId(event.target.value);
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
