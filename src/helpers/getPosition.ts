export const documentBottomPosition = () => {
  // NOTE:Get the height excluding the scroll bar.
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
