export const documentBottomPosition = () => {
  // NOTE: スクロールバーを除いた高さを取得
  return document.documentElement.clientHeight + window.pageYOffset;
};

export const eventTargetPosition = (event: Event, buffer?: number): number => {
  const HTMLElement = event.target as HTMLElement;
  if (buffer !== undefined) {
    return (
      HTMLElement.getBoundingClientRect().bottom + window.pageYOffset + buffer
    );
  } else {
    HTMLElement.getBoundingClientRect().bottom + window.pageYOffset;
  }
};
