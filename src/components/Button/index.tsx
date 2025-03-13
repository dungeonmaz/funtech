import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import "./style.scss";

export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "style"> {
  variant: "text" | "contain" | "outline";
  color?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  style?: React.CSSProperties;
}

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
  name,
  variant = "text",
  size = "md",
  color = "dark",
  children,
  disabled,
  className,
  style = {},
  ...props
}) => {
  return (
    <button
      name={name}
      className={`button ${className ?? ""}`}
      disabled={disabled}
      data-variant={variant}
      data-size={size}
      data-color={color}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};
