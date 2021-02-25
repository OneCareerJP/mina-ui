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
  buttonElements: HTMLButtonElement[];
}
export interface Methods {
  clickSelectbox: () => void;
  keydownSelectbox: (event: KeyboardEvent) => void;
  keydownSelectValue: (event: KeyboardEvent) => void;
  moveFocus: (index: number) => void;
  moveNext: (event: KeyboardEvent) => void;
  movePrev: (event: KeyboardEvent) => void;
  findIndex: (target: EventTarget | null) => number;
  focusButtonElements: () => void;
  closeSelectList: () => void;
  changeSelectValue: (value: string) => void;
}
