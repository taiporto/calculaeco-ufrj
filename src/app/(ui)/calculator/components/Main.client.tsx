"use client";

import React, { Suspense } from "react";
import { Information } from "./Information.client";
import { SubjectsForm } from "./SubjectsForm/SubjectsForm.client";
import { Loading } from "@/components/general/Loading";

import * as Popover from "@radix-ui/react-popover";
import { AddSubjectPopover } from "./AddSubjectPopover";
import { useSubjectsContext } from "../context/subjects";
import Button from "@/components/general/Button";

export const Main = () => {
  const { originalSubjects, setSubjects } = useSubjectsContext();

  const resetSubjects = () => {
    setSubjects(originalSubjects);
  };

  return (
    <Popover.Root modal={true}>
      <main>
        <Information />
        <Suspense fallback={<Loading />}>
          <SubjectsForm />
        </Suspense>
        <div>
          <Popover.Trigger asChild>
            <Button>Adicionar matéria</Button>
          </Popover.Trigger>
          {setSubjects.length >= 1 && (
            <Button onClick={resetSubjects}>Resetar lista de matérias</Button>
          )}
        </div>
      </main>
      <AddSubjectPopover />
    </Popover.Root>
  );
};
