import { ChangeEventHandler, ReactNode } from "react";

export type SelectData = {id: string, name: string}

export type Field<T> = {
  type: 'select' | 'text';
  name: string;
  label: string;
  onValueChange?: (value: string) => void | ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  selectData?: Array<T>;
  renderSelectItem?: (data: any) => JSX.Element;
}