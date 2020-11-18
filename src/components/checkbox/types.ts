export interface Props {
  checked: boolean | Function;
}
export interface Data {}
export interface Computed {
  listeners: { [key: string]: Function | Function[] };
  isChecked: [boolean, Function];
}
export interface Methods {}
