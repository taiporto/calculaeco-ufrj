"use client";

import * as Popover from "@radix-ui/react-popover";
import { Subject } from "@/api/types";
import MajorTermForm from "@/components/MajorTermForm";
import React, { ChangeEvent, useState } from "react";
import { useMajorsContext } from "@/app/context/majors";
import { Cross2Icon } from "@radix-ui/react-icons";
import {
  fetchSubjectById,
  fetchSubjectsByTermAndMajor,
} from "./utils/fetchSubjects";
import { SubjectSelectionForm } from "./SubjectSelectionForm";

type AddSubjectPopoverProps = {
  handleAddSubject: (subjectData: Subject) => void;
};

const AddSubjectPopover = ({ handleAddSubject }: AddSubjectPopoverProps) => {
  const [major, setMajor] = useState("");
  const [term, setTerm] = useState("");
  const [subjects, setSubjects] = useState<Subject[]>();
  const [isSelectSubjectOpen, setIsSelectSubjectOpen] = useState(false);
  const [newSubjectId, setNewSubjectId] = useState<string>("");

  const majors = useMajorsContext();

  const addSubject = async (): Promise<void> => {
    const subject = await fetchSubjectById(newSubjectId);

    if (!subject) return;
    handleAddSubject(subject);
  };

  const handleSubmitPreForm = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const fetchedSubjects = await fetchSubjectsByTermAndMajor(term, major);

    if (!fetchedSubjects) return;

    setSubjects(fetchedSubjects);
    setIsSelectSubjectOpen(true);
  };

  const handleNewSubjectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setNewSubjectId(e.target.value);
  };

  const handleSubmitSubjectForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!newSubjectId) return;
    addSubject();
  };

  return (
    <Popover.Portal>
      <Popover.Content>
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
              subjects={subjects}
            />
          )}
        </div>
        <Popover.Close aria-label="Close">
          <Cross2Icon />
        </Popover.Close>
        <Popover.Arrow />
      </Popover.Content>
    </Popover.Portal>
  );
};

export { AddSubjectPopover };
