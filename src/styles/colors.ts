export const COLORS = {
  b000: "#FFF",
  b100: "#D7D7D7",
  b200: "#515356",
  b300: "#242629",
  b400: "#1B1D20",
  b500: "#17191C",
  b600: "#141619",
  b700: "#121417",
  b800: "#101215",
  b900: "#0E1013",

  p000: "#F2FAFF",
  p100: "#C2E3FC",
  p200: "#91CBFA",
  p300: "#61B3FA",
  p400: "#3198F7",
  p500: "#027EF6",
  p600: "#0273EB",
  p700: "#0265D6",
  p800: "#0254B8",
  p900: "#013F8F",

  a100: "#F44336",
  a200: "#2575FC",
  a300: "#429321",
};

type Colors = keyof typeof COLORS;
export type VariableColors = Colors | (string & {});
