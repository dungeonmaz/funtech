export const convertRemToPx = (rem: number) => {
  const font = window
    .getComputedStyle(document.body)
    .getPropertyValue("font-size");
  return rem * parseFloat(font);
};
