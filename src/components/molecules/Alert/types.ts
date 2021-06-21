export interface Props {
  /**
   * TODO: 仮のプロパティ名を設定しています。
   *       API連携時に正しいプロパティ名に変更します。
   */
  type: string;
  title: string;
  description: string;
  listsize: string;
  list: {
    text: string;
  }[];
}
export interface Data {}
export interface Computed {
  alertType: string;
}
export interface Methods {}
