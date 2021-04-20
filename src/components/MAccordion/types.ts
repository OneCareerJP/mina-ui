export interface Props {
  type: string;
  open: boolean;
  toggle: Function;
}
export interface Data {
  dataOpen: boolean;
}
export interface Computed {
  blockName: string;
}
export interface Methods {
  toggleDataOpen: (toggle: boolean) => void;
  beforeEnter: (
    element: any,
    { style: object },
    { scrollHeight: number }
  ) => void;
  enter: (element: any, { style: object }, { scrollHeight: number }) => void;
  beforeLeave: (
    element: any,
    { style: object },
    { scrollHeight: number }
  ) => void;
  leave: (element: any, { style: object }, { scrollHeight: number }) => void;
}
