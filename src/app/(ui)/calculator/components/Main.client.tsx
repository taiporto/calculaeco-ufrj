"use client";

import React, { Suspense, useMemo } from "react";
import * as Popover from "@radix-ui/react-popover";
import { x } from "@xstyled/styled-components";

import Button from "@/components/general/Button";

import { useSubjectsContext } from "../context/subjects";
import { PopoverTrigger } from "../styles";

import { SubjectsForm } from "./SubjectsForm/SubjectsForm.client";
import { AddSubjectPopover } from "./AddSubjectPopover";
import { Information } from "./Information.client";

export const Main = () => {
  const {
    originalSubjects,
    subjects,
    updateSubjects: setSubjects,
  } = useSubjectsContext();

  const resetSubjects = () => {
    setSubjects(originalSubjects);
  };

  const isCustomForm = useMemo(
    () => JSON.stringify(originalSubjects) !== JSON.stringify(subjects),
    [originalSubjects, subjects]
  );

  return (
    <Popover.Root modal={true}>
      <main>
        <Information />
        <SubjectsForm />
        <x.div display="flex">
          <PopoverTrigger>Adicionar matéria</PopoverTrigger>
          {isCustomForm && (
            <Button onClick={resetSubjects}>Resetar lista de matérias</Button>
          )}
        </x.div>
      </main>
      <AddSubjectPopover />
    </Popover.Root>
  );
};
