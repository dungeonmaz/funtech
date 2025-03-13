import cl from "./style.module.scss";
import { Typography } from "@components/Typography";

export const Links = () => {
  return (
    <div className={cl.links}>
      <Typography
        color="#B9B9B9"
        fontFamily="Inter"
        size="h6"
        lineHeight="150%"
      >
        Privacy Policy
      </Typography>
      <Typography
        color="#B9B9B9"
        fontFamily="Inter"
        size="h6"
        lineHeight="150%"
      >
        Term & Conditions
      </Typography>
      <Typography
        color="#B9B9B9"
        fontFamily="Inter"
        size="h6"
        lineHeight="150%"
      >
        About Us
      </Typography>
      <Typography
        color="#B9B9B9"
        fontFamily="Inter"
        size="h6"
        lineHeight="150%"
      >
        Contact
      </Typography>
    </div>
  );
};
