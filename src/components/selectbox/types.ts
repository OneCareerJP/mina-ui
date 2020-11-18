export interface Props {
  placeholder: string;
  initialSelectedValue: string | number;
  selectedValue: string | number;
  selectList: string[];
  itemText: string;
}
export interface Data {
  showSelectList: boolean;
}
export interface Computed {
  setSelectedValue: string | number;
  buttonElements: string[];
}
export interface Methods {
  clickSelectbox: () => void;
  keydownSelectbox: (event: KeyboardEvent) => void;
  keydownSelectValue: (event: KeyboardEvent) => void;
  moveFocus: (index: number) => void;
  moveNext: () => void;
  movePrev: () => void;
  findIndex: (target: HTMLButtonElement) => void;
  focusButtonElements: () => void;
  closeSelectList: () => void;
  changeSelectValue: (value: string) => void;
}
