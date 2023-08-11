import { Subject } from "@/api/types";

export type SelectData = {id: Subject['id'], name: string}

export type Field<T> = {
  type: 'select' | 'text';
  name: string;
  label: string;
  onValueChange?: (value: any) => void;
  placeholder?: string;
  selectData?: Array<T>;
  renderSelectItem?: (data: any) => JSX.Element;
  renderComponent?: () => JSX.Element;
}