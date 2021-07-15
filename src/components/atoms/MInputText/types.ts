export interface Props {
  inputType: string;
  name: string;
  type: string;
  value: string | number;
  placeholder: string;
  maxlength: number;
  height: string;
  width: string;
  minWidth: string;
  disabled: boolean;
  readonly: boolean;
  error: boolean;
}
export interface Data {}
export interface Computed {
  blockName: string;
}
export interface Methods {
  onChange: (event: Event) => void;
  keydownEvent(): void;
  focusEvent(): void;
}
