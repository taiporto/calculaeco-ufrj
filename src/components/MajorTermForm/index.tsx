"use client";

import { Major } from "@/api/types";
import React, { ChangeEvent, Ref, useRef } from "react";
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
  {
    children,
    className,
    ...props
  }: React.PropsWithChildren<Select.SelectItemProps>,
  forwardedRef: Ref<HTMLDivElement>
) {
  return (
    <StyledSelectItem className={className} {...props} ref={forwardedRef}>
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
  const termRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const resetSelectability = () => {
    termRef.current
      ?.querySelectorAll("option")
      .forEach((option) => ((option as HTMLOptionElement).disabled = false));
  };

  const handleMajorChange = (value: string) => {
    resetSelectability();

    setMajor(value);

    if (["jcs", "pp", "pe", "rtv"].includes(value)) {
      const baseCurriculumOptions = termRef.current?.querySelectorAll(
        "option.base_curriculum"
      );

      if (baseCurriculumOptions) {
        baseCurriculumOptions.forEach((option) => {
          (option as HTMLOptionElement).disabled = true;
        });
      }
    }

    if (value === "cs") {
      const specializationOptions = termRef.current?.querySelectorAll(
        "option.specialization"
      );

      if (specializationOptions) {
        specializationOptions.forEach((option) => {
          (option as HTMLOptionElement).disabled = true;
        });
      }
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
        <div ref={termRef}>
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
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((term) => {
                          return (
                            <SelectItem
                              className={
                                term <= 3 ? "base_curriculum" : "specialization"
                              }
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
