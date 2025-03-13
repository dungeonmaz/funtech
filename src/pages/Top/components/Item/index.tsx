import { Typography } from "@components/Typography";
import cl from "./style.module.scss";
import { Icon } from "@components/Icon";
import { Button } from "@components/Button";
import { Image } from "@components/Image";
import { FC, useEffect, useState } from "react";
import { TopElement } from "@pages/Top/store";
import { intervalToDuration } from "date-fns";

export const Item: FC<TopElement> = ({ name, bid, time }) => {
  const [innerTime, setInnerTime] = useState(time);
  const duration = intervalToDuration({ start: 0, end: innerTime * 1000 });

  useEffect(() => {
    const interval = setInterval(() => {
      setInnerTime((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={cl.item}>
      <div className={cl.item__image}>
        <Image path="casLogo.png" />
        <Typography
          size="body1"
          color="#fff"
          lineHeight="150%"
          className={cl.item__image__time}
        >
          {String(duration.hours ?? 0).padStart(2, "0")}h&nbsp;
          {String(duration.minutes ?? 0).padStart(2, "0")}m&nbsp;
          {String(duration.seconds ?? 0).padStart(2, "0")}s
        </Typography>
      </div>
      <div className={cl.item__info}>
        <Typography lineHeight="140%" weight="600" size="h4" color="#141416">
          {name}
        </Typography>
        <div className={cl.item__info__footer}>
          <div className={cl.item__info__footer__bid}>
            <Typography
              size="body1"
              weight="400"
              color="#94A3B8"
              lineHeight="150%"
            >
              Current bid
            </Typography>
            <div className={cl.item__info__footer__bid__price}>
              <Icon color="#141416" name="Bid" size="1.3125rem" />
              <Typography size="subheading2" lineHeight="150%" color="#141416">
                {bid.toFixed(2)}
              </Typography>
            </div>
          </div>
          <Button size="sm" variant="contain">
            <Typography
              color="inherit"
              lineHeight="150%"
              size="body1"
              weight="600"
            >
              PLACE BID
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  );
};
