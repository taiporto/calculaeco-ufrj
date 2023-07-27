"use client";

import { Major } from "@/api/types";
import React, { Ref, useRef, useState } from "react";
import { Button } from "../general/Button/styles";
import {
  FormField,
  FormRoot,
  SelectContent,
  SelectIcon,
  SelectTrigger,
  SelectViewport,
  StyledSelectItem,
} from "./styles";

import * as Form from "@radix-ui/react-form";

import * as Select from "@radix-ui/react-select";
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@radix-ui/react-icons";

type MajorTermFormType = {
  majorsData: Major[];
  setMajor: (value: string) => void;
  setTerm: (value: string) => void;
  submitButtonValue: string;
  handleSubmitForm: (event: React.FormEvent<HTMLFormElement>) => void;
};

const SelectItem = React.forwardRef(function SelectItem(
  { children, ...props }: React.PropsWithChildren<Select.SelectItemProps>,
  forwardedRef: Ref<HTMLDivElement>
) {
  return (
    <StyledSelectItem {...props} ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator>
        <CheckIcon />
      </Select.ItemIndicator>
    </StyledSelectItem>
  );
});

const MajorTermForm = ({
  majorsData,
  setMajor,
  setTerm,
  submitButtonValue,
  handleSubmitForm,
}: MajorTermFormType) => {
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

  const formRef = useRef<HTMLFormElement>(null);

  const resetSelectability = () => {
    setTerms((prevTerms) =>
      prevTerms.map((item) => {
        item.disabled = false;
        return item;
      })
    );
  };

  const handleMajorChange = (value: string) => {
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
  };

  const handleTermChange = (value: string) => {
    setTerm(value);
  };

  const handleButtonClick = () => {
    if (formRef.current) {
      const inputs = formRef.current.querySelectorAll("select");
      if (Array.from(inputs).some((input) => input.value == "default")) {
        console.log("Preencha todos os campos!");
      }
    }
  };

  return (
    majorsData && (
      <FormRoot onSubmit={handleSubmitForm} ref={formRef}>
        <div>
          <FormField name="major">
            <Form.Label id="major-label" htmlFor="major-select">
              Qual é seu curso?
            </Form.Label>
            <Form.Control asChild>
              <Select.Root onValueChange={handleMajorChange}>
                <SelectTrigger aria-labelledby="major-label">
                  <Select.Value placeholder="-- Selecione o curso --" />
                  <SelectIcon>
                    <ChevronDownIcon />
                  </SelectIcon>
                </SelectTrigger>
                <Select.Portal>
                  <SelectContent position="popper" align="center">
                    <Select.ScrollUpButton>
                      <ChevronUpIcon />
                    </Select.ScrollUpButton>
                    <SelectViewport>
                      <Select.Group>
                        {majorsData.map((major: Major) => (
                          <SelectItem
                            key={major.id}
                            id={major.id}
                            value={major.id}
                          >
                            {major.name}
                          </SelectItem>
                        ))}
                      </Select.Group>
                    </SelectViewport>
                  </SelectContent>
                </Select.Portal>
              </Select.Root>
            </Form.Control>
          </FormField>
        </div>
        <div>
          <FormField name="term">
            <Form.Label id="term-label" htmlFor="term-select">
              E em que período você está?
            </Form.Label>
            <Form.Control asChild>
              <Select.Root onValueChange={handleTermChange}>
                <SelectTrigger aria-labelledby="term-label">
                  <Select.Value placeholder="-- Selecione o período --" />
                  <SelectIcon>
                    <ChevronDownIcon />
                  </SelectIcon>
                </SelectTrigger>
                <Select.Portal>
                  <SelectContent position="popper" align="center">
                    <Select.ScrollUpButton>
                      <ChevronUpIcon />
                    </Select.ScrollUpButton>
                    <SelectViewport>
                      <Select.Group>
                        {terms.map(({ term, disabled }) => {
                          return (
                            <SelectItem
                              disabled={disabled}
                              id={`${term}_periodo`}
                              key={`${term}_periodo`}
                              value={"" + term}
                            >
                              {term}º período
                            </SelectItem>
                          );
                        })}
                      </Select.Group>
                    </SelectViewport>
                  </SelectContent>
                </Select.Portal>
              </Select.Root>
            </Form.Control>
          </FormField>
        </div>
        <Form.Submit asChild>
          <Button onClick={handleButtonClick} type="submit">
            {submitButtonValue}
          </Button>
        </Form.Submit>
      </FormRoot>
    )
  );
};

export default MajorTermForm;
