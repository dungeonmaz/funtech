import cl from "./style.module.scss";
import { Typography } from "@components/Typography";
import { Item } from "./components/Item";
import AliceCarousel from "react-alice-carousel";
import { useRef } from "react";
import { Icon } from "@components/Icon";
import { convertRemToPx } from "@utils/convertRemToPx";
import { useWindowSize } from "@hooks/useWindowSize";
import { topStore } from "./store";

const responsive = {
  0: { items: 1, itemsFit: "contain" },
  700: { items: 2, itemsFit: "contain" },
  900: { items: 3, itemsFit: "contain" },
  1600: { items: 4, itemsFit: "contain" },
};

export const Top = () => {
  const carousel = useRef<AliceCarousel>(null);
  const size = useWindowSize();

  return (
    <div className={cl.top}>
      <Typography lineHeight="1.6875rem" weight="600" color="#c5c5c5" size="h2">
        Weekly - Top NFT
      </Typography>
      <div className={cl.top__carousel}>
        <AliceCarousel
          mouseTracking
          ref={carousel}
          paddingLeft={convertRemToPx(size.width > 600 ? 15 : 8)}
          paddingRight={convertRemToPx(size.width > 600 ? 15 : 7)}
          responsive={responsive}
          infinite
          disableDotsControls
          disableButtonsControls
          items={topStore.data.map((d) => (
            <Item {...d} />
          ))}
        />
      </div>
      <div className={cl.top__arrows}>
        <Icon
          onClick={() => carousel?.current?.slidePrev()}
          size="1.625rem"
          name="LeftArrow"
        />
        <div className={cl.top__arrows__line} />
        <Icon
          onClick={() => carousel?.current?.slideNext()}
          size="1.625rem"
          name="RightArrow"
        />
      </div>
    </div>
  );
};
