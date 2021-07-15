export interface Props {
  checked: boolean | Function;
  value: number | string;
  id: number;
  name: string;
  disabled: boolean;
}
export interface Data {}
export interface Computed {
  listeners: { [key: string]: Function | Function[] };
  isChecked: [boolean, Function];
}
export interface Methods {}
