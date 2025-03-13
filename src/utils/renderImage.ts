export const renderImage = (name: string) => {
  const href = new URL(`/src/assets/images/${name}`, import.meta.url).href;
  return href;
};
