import { Icon } from "@components/Icon";
import cl from "./style.module.scss";
import { Typography } from "@components/Typography";
import { Icons } from "./components/Icons";
import { Links } from "./components/Links";
import { useWindowSize } from "@hooks/useWindowSize";

export const Footer = () => {
  const size = useWindowSize();

  return (
    <div className={cl.footer}>
      <div className={cl.footer__top}>
        <div className={cl.footer__top__title}>
          <Icon name="Logo" size="4.0625rem" color="#fff" />
          <Typography lineHeight="130%" weight="600" size="h3" color="b100">
            DiveSea
          </Typography>
        </div>

        {size.width > 600 ? <Links /> : <Icons />}
      </div>
      {size.width > 600 ? (
        <div className={cl.footer__line} />
      ) : (
        <>
          <Links />
          <div className={cl.footer__line} />
        </>
      )}
      <div className={cl.footer__bottom}>
        <Typography
          lineHeight="150%"
          fontFamily="Inter"
          size={size.width > 600 ? "subheading1" : "1.3125rem"}
          color="#999999"
        >
          © 2023 EATLY All Rights Reserved.
        </Typography>

        {size.width > 600 && <Icons />}
      </div>
    </div>
  );
};
