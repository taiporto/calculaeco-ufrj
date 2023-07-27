"use client";

import * as Popover from "@radix-ui/react-popover";
import { Subject } from "@/api/types";
import MajorTermForm from "@/components/MajorTermForm";
import React, { ChangeEvent, useState } from "react";
import { useMajorsContext } from "@/app/context/majors";
import { Cross2Icon } from "@radix-ui/react-icons";

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
    const subject = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/subjects/${newSubjectId}`
    )
      .then((res: Response) => {
        if (!res.ok) throw new Error(`Error ${res.status} - ${res.statusText}`);

        return res.json();
      })
      .catch((e) => console.error(e));

    if (!subject) return;
    handleAddSubject(subject);
  };

  const handleSubmitPreForm = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const fetchedSubjects = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/subjects?term=${term}&major=${major}`
    )
      .then((res: Response) => {
        if (!res.ok) throw new Error(`Error ${res.status} - ${res.statusText}`);

        return res.json();
      })
      .catch((e) => console.error(e));

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
            <form onSubmit={handleSubmitSubjectForm}>
              <select
                name="new-subject"
                onChange={handleNewSubjectChange}
                defaultValue={"default"}
              >
                <option value="default" disabled>
                  {" "}
                  --Selecione a matéria--{" "}
                </option>
                {subjects.map((subject) => {
                  return (
                    <option key={subject.id} value={subject.id}>
                      {subject.name}
                    </option>
                  );
                })}
              </select>
              <input type="submit" value="Adicionar matéria" />
            </form>
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
