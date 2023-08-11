import React, { FormEventHandler } from "react";
import { FormField, FormRoot } from "./styles";
import * as RadixForm from "@radix-ui/react-form";
import * as RadixSelect from "@radix-ui/react-select";
import { ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";
import Button from "../Button";
import { Field, SelectData } from "./types";
import { SelectItem } from "./Select/SelectItem";
import {
  SelectContent,
  SelectIcon,
  SelectTrigger,
  SelectViewport,
} from "./Select/styles";

type FormProps = {
  fields: Field<any>[];
  submitText?: string;
  onSubmit?: FormEventHandler<HTMLFormElement>;
};

export const Form = ({ fields, submitText, onSubmit }: FormProps) => {
  return (
    <FormRoot onSubmit={onSubmit}>
      {fields.map((field: Field<any>) => {
        return (
          <div key={field.name}>
            <FormField name={field.name}>
              <RadixForm.Label>{field.label}</RadixForm.Label>
              <RadixForm.Control asChild>
                {field.type === "select" ? (
                  <RadixSelect.Root onValueChange={field.onValueChange}>
                    <SelectTrigger>
                      <RadixSelect.Value placeholder={field.placeholder} />
                      <SelectIcon>
                        <ChevronDownIcon />
                      </SelectIcon>
                    </SelectTrigger>
                    <RadixSelect.Portal>
                      <SelectContent position="popper" align="center">
                        <RadixSelect.ScrollUpButton>
                          <ChevronUpIcon />
                        </RadixSelect.ScrollUpButton>
                        <SelectViewport>
                          <RadixSelect.Group>
                            {field.selectData?.map((data: SelectData) => {
                              return (
                                field.renderSelectItem?.(data) || (
                                  <SelectItem
                                    key={data.id}
                                    id={data.id.toString()}
                                    value={data.id.toString()}
                                  >
                                    {data.name}
                                  </SelectItem>
                                )
                              );
                            })}
                          </RadixSelect.Group>
                        </SelectViewport>
                      </SelectContent>
                    </RadixSelect.Portal>
                  </RadixSelect.Root>
                ) : field.renderComponent ? (
                  field.renderComponent()
                ) : (
                  <input
                    type="text"
                    placeholder={field.placeholder}
                    onChange={field.onValueChange}
                  />
                )}
              </RadixForm.Control>
            </FormField>
          </div>
        );
      })}
      <RadixForm.Submit asChild>
        <Button type="submit">{submitText}</Button>
      </RadixForm.Submit>
    </FormRoot>
  );
};
