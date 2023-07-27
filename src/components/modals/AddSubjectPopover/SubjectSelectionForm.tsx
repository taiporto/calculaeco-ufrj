import { Subject } from "@/api/types";
import React from "react";
import { Form } from "@/components/general/Form";
import { Field } from "@/components/general/Form/types";

type SubjectSelectionFormProps = {
  subjects: Subject[];
  onSubmit: () => void;
};

export const SubjectSelectionForm = ({
  subjects,
  onSubmit,
}: SubjectSelectionFormProps) => {
  const field: Field<Subject> = {
    type: "select",
    name: "subject",
    label: "Escolha a matéria",
    placeholder: "-- Selecione sua matéria --",
    selectData: subjects,
  };

  return (
    <Form fields={[field]} submitText="Adicionar matéria" onSubmit={onSubmit} />
  );
};
