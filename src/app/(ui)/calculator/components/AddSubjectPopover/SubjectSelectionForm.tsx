import React from "react";

import { Subject } from "@/api/types";
import { Form } from "@/components/general/Form";
import { Field } from "@/components/general/Form/types";

type SubjectSelectionFormProps = {
  subjects: Subject[];
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  handleNewSubjectChange: (value: string) => void;
};

export const SubjectSelectionForm = ({
  subjects,
  onSubmit,
  handleNewSubjectChange,
}: SubjectSelectionFormProps) => {
  const field: Field<Subject> = {
    type: "select",
    name: "subject",
    label: "Escolha a matéria",
    placeholder: "-- Selecione sua matéria --",
    selectData: subjects,
    onValueChange: handleNewSubjectChange,
  };

  return (
    <Form fields={[field]} submitText="Adicionar matéria" onSubmit={onSubmit} />
  );
};
