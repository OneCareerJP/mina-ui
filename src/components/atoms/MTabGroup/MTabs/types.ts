export interface Props {
  type: string;
  customStyle: object;
}
export interface Data {
  tabs: string[];
  activeTabIndex: string | number;
}
export interface Computed {
  blockName: string;
  tabStyle: { [tagName: string]: string };
  activeTabClass: (index: number, value: string) => void;
}
export interface Methods {
  changeActiveTabIndex: (index: number) => void;
  onMount: (srcComponent: any) => void;
}
