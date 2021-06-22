export interface Props {
  size: string;
  color: string;
  weight: string;
  lineClamp: number;
}
export interface Data {}
export interface Computed {
  lineClampClassName: {
    [typeName: number]: string;
  };
}
export interface Methods {}
