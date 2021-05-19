export interface Props {
  iconType: string;
  iconName: string;
  size: string;
  color: string;
  customColor: string;
  innerClass: string;
  customStyle: object;
}
export interface Data {}
export interface Computed {
  iconStyle: object;
  listeners: { [key: string]: Function | Function[] };
}
export interface Methods {}
