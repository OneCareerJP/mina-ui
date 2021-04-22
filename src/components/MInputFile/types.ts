export interface Props {
  placeholder: string;
  limitSize: number | null;
  allowType: string | string[];
  accept: string;
  unit: string;
  maxHeight: string;
  minHeight: string;
  maxWidth: string;
  minWidth: string;
  height: string;
  width: string;
  imagePath: string;
  imageWidth: string;
  imageHeight: string;
  disabled: boolean;
  aspectRatio: {
    x: number;
    y: number;
  }| string;
}
export interface Data {
  files: {
    image: string;
    name: string;
  }[];
  errorMessages: string[];
  byteSize: {
    KB: number;
    MB: number;
  };
}
export interface Computed {
  isAspectRatio: object | string
  findFileImagePath: string;
  setlimitSize: number;
  inputFileStyle: object;
  editable: boolean;
}
export interface Methods {
  setUploadFile: (event: any) => Promise<void>;
  createImage: (file: any) => void;
  onPreviewClose: (item: string) => void;
  onDrag: () => void;
  offDrag: () => void;
  dropFile: (event: Event) => void;
  checkFile: (file: { size: string; type: string }) => void;
  openCropper: () => void;
  closeCropper: () => void;
  cropImage: () => void;
  resetCropPosition: () => void;
}
