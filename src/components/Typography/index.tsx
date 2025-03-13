import { FC, HTMLAttributes, PropsWithChildren } from "react";
import { TypographySizes } from "./constants";
import { COLORS, VariableColors } from "@styles/colors";

export type TypographySizes = keyof typeof TypographySizes;
export type TypographyWeights =
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

export interface TypographyProps extends HTMLAttributes<HTMLSpanElement> {
  size?: TypographySizes | string;
  color?: VariableColors;
  weight?: TypographyWeights;
  lineHeight?: string;
  fontFamily?: "Poppins" | "Public Sans" | "Inter" | "Outfit";
  align?: "left" | "right" | "center";
  letterSpacing?: string;
}

function isTypographySizes(size: string): size is TypographySizes {
  return Object.keys(TypographySizes).includes(size);
}

export const Typography: FC<PropsWithChildren<TypographyProps>> = ({
  children,
  size = "h1",
  color = "b000",
  weight = "500",
  align,
  letterSpacing,
  lineHeight,
  fontFamily,
  ...props
}) => {
  const currentColor =
    color in COLORS ? COLORS[color as keyof typeof COLORS] : color;

  return (
    <span
      style={{
        fontSize: isTypographySizes(size)
          ? `${TypographySizes[size]}rem`
          : size,
        color: currentColor,
        fontWeight: weight,
        lineHeight: lineHeight,
        textAlign: align,
        fontFamily: fontFamily,
        letterSpacing: letterSpacing,
      }}
      {...props}
    >
      {children}
    </span>
  );
};
