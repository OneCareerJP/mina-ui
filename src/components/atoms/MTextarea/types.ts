export interface Props {
  name: string;
  value: string;
  placeholder: string;
  maxHeight: string;
  minHeight: string;
  maxWidth: string;
  minWidth: string;
  wrap: string;
  width: string;
  height: string;
  maxlength: number;
  rows: number;
  cols: number;
  disabled: boolean;
  readonly: boolean;
  required: boolean;
  customStyle: boolean;
}
export interface Data {}
export interface Computed {
  textareaStyle: object;
}
export interface Methods {
  onChange: (event: Event) => void;
}
