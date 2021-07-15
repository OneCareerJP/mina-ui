export interface Props {
  size: string;
  type: string;
  maxWidth: string;
  minWidth: string;
  height: string;
  iconType: string;
  iconName: string;
  iconSize: string;
  iconColor: string;
  icon: boolean;
  disabled: boolean;
  processing: boolean;
  customStyle: object;
  innerStyle: object;
  innerClass: string;
  bold: boolean;
}
export interface Data {}
export interface Computed {
  listeners: { [key: string]: Function | Function[] };
  buttonStyle: object;
}
export interface Methods {}
