import { FC, HTMLAttributes } from "react";
import * as icons from "./icons";
import "./style.scss";

type IconName = keyof typeof icons;

export interface IconProps extends HTMLAttributes<HTMLDivElement> {
  name: IconName;
  size?: string;
  color?: string;
  onClick?: () => void;
}

export const IconNames = Object.keys(icons);

export const Icon: FC<IconProps> = ({
  name,
  color = "#000",
  size = "1rem",
  onClick,
  className,
  ...props
}) => {
  const Icon = icons[name as IconName];
  return (
    <div className={`icon ${className ?? ""}`} onClick={onClick} {...props}>
      <Icon width={size} height={size} color={color} />
    </div>
  );
};
