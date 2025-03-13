import { Button } from "@components/Button";
import { Icon } from "@components/Icon";
import { Typography } from "@components/Typography";
import cl from "./style.module.scss";
import { useState } from "react";
import { useWindowSize } from "@hooks/useWindowSize";

export const Header = () => {
  const size = useWindowSize();
  const [open, setOpen] = useState(false);

  return (
    <div data-open={open} className={cl.header}>
      <div className={cl.header__info}>
        <Icon
          name="Logo"
          size={size.width > 600 ? "3.3125rem" : "4.625rem"}
          color="#141416"
        />
        {size.width > 600 ? (
          <>
            <Button variant="text">
              <Typography color="inherit" size="h6" fontFamily="Inter">
                DISCOVER
              </Typography>
            </Button>
            <Button variant="text">
              <Typography color="inherit" size="h6" fontFamily="Inter">
                CREATORS
              </Typography>
            </Button>
            <Button variant="text">
              <Typography color="inherit" size="h6" fontFamily="Inter">
                SELL
              </Typography>
            </Button>
            <Button variant="text">
              <Typography color="inherit" size="h6" fontFamily="Inter">
                STATS
              </Typography>
            </Button>
            <Button style={{ marginLeft: "auto" }} size="sm" variant="contain">
              <Typography
                weight="600"
                fontFamily="Inter"
                size="subheading2"
                color="inherit"
                lineHeight="150%"
              >
                CONNECT WALLET
              </Typography>
            </Button>
          </>
        ) : (
          <>
            <Typography color="#000" weight="600" size="1.75rem">
              DiveSea
            </Typography>
            {open ? (
              <Icon
                className={cl.header__info__switch}
                onClick={() => setOpen(false)}
                name="Close"
                size="2.375rem"
              />
            ) : (
              <Icon
                className={cl.header__info__switch}
                onClick={() => setOpen(true)}
                name="Burger"
                size="2.75rem"
              />
            )}
          </>
        )}
      </div>

      {size.width <= 600 && (
        <>
          <div className={cl.header__line} />
          <div className={cl.header__buttons}>
            <Typography color="#606060" fontFamily="Inter" size="3.5rem">
              DISCOVER
            </Typography>
            <Typography color="#606060" fontFamily="Inter" size="3.5rem">
              CREATORS
            </Typography>
            <Typography color="#606060" fontFamily="Inter" size="3.5rem">
              SELL
            </Typography>
            <Typography color="#606060" fontFamily="Inter" size="3.5rem">
              STATS
            </Typography>
          </div>
          <div className={cl.header__icons}>
            <Icon color="#535353" name="Instagram" size="2.25rem" />
            <Icon color="#535353" name="Linkedin" size="2.25rem" />
            <Icon color="#535353" name="Facebook" size="2.25rem" />
            <Icon color="#535353" name="Twitter" size="2.25rem" />
          </div>
        </>
      )}
    </div>
  );
};
