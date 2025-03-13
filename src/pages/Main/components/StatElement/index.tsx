import { FC } from "react";
import cl from "./style.module.scss";
import { Typography } from "@components/Typography";

type StatElementProps = {
  count: string;
  title: string;
};

export const StatElement: FC<StatElementProps> = ({ count, title }) => {
  return (
    <div className={cl.element}>
      <Typography
        fontFamily="Public Sans"
        color="#141416"
        size="2.25rem"
        weight="600"
        lineHeight="125%"
      >
        {count}
      </Typography>
      <Typography
        lineHeight="150%"
        fontFamily="Inter"
        color="#848586"
        size="body2"
      >
        {title}
      </Typography>
    </div>
  );
};
