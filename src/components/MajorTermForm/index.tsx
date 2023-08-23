"use client";

import React, { useCallback, useMemo, useState } from "react";

import { Major } from "@/api/types";

import { Form } from "../general/Form";
import { SelectItem } from "../general/Form/Select/SelectItem";
import { Field } from "../general/Form/types";

type TermField = {
  term: number;
  disabled: boolean;
};

type MajorTermFormProps = {
  majorsData: Major[];
  setMajor: (value: string) => void;
  setTerm: (value: string) => void;
  submitButtonValue: string;
  handleSubmitForm: (event: React.FormEvent<HTMLFormElement>) => void;
  wrap?: boolean;
};

const MajorTermForm = ({
  majorsData,
  setMajor,
  setTerm,
  submitButtonValue,
  handleSubmitForm,
  wrap,
}: MajorTermFormProps) => {
  const [terms, setTerms] = useState([
    {
      term: 1,
      disabled: false,
    },
    {
      term: 2,
      disabled: false,
    },
    {
      term: 3,
      disabled: false,
    },
    {
      term: 4,
      disabled: false,
    },
    {
      term: 5,
      disabled: false,
    },
    {
      term: 6,
      disabled: false,
    },
    {
      term: 7,
      disabled: false,
    },
    {
      term: 8,
      disabled: false,
    },
  ]);

  const resetSelectability = () => {
    setTerms((prevTerms) =>
      prevTerms.map((item) => {
        item.disabled = false;
        return item;
      })
    );
  };

  const handleMajorChange = useCallback(
    (value: string) => {
      resetSelectability();

      setMajor(value);

      if (["jcs", "pp", "pe", "rtv"].includes(value)) {
        setTerms((prevTerms) =>
          prevTerms.map((item) => {
            if (item.term <= 3) item.disabled = true;
            return item;
          })
        );
      }

      if (value === "cs") {
        setTerms((prevTerms) =>
          prevTerms.map((item) => {
            if (item.term > 3) item.disabled = true;
            return item;
          })
        );
      }
    },
    [setMajor]
  );

  const handleTermChange = useCallback(
    (value: string) => {
      setTerm(value);
    },
    [setTerm]
  );

  const fields: Field<Major | TermField>[] = useMemo(
    () => [
      {
        type: "select",
        name: "major",
        label: "Qual é seu curso?",
        onValueChange: handleMajorChange,
        placeholder: "-- Selecione seu curso --",
        selectData: majorsData,
      },
      {
        type: "select",
        name: "term",
        label: "E qual é o seu período?",
        onValueChange: handleTermChange,
        placeholder: "-- Selecione seu período --",
        selectData: terms,
        renderSelectItem: ({ term, disabled }: TermField) => (
          <SelectItem
            disabled={disabled}
            id={`${term}_periodo`}
            key={`${term}_periodo`}
            value={"" + term}
          >
            {term}º período
          </SelectItem>
        ),
      },
    ],
    [handleMajorChange, handleTermChange, majorsData, terms]
  );

  return (
    <Form
      fields={fields}
      submitText={submitButtonValue}
      onSubmit={handleSubmitForm}
      wrap={wrap}
    />
  );
};

export default MajorTermForm;
