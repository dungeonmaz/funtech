import cl from "./style.module.scss";
import { Button } from "@components/Button";
import { Image } from "@components/Image";
import { Typography } from "@components/Typography";
import { useWindowSize } from "@hooks/useWindowSize";

export const CreateAndSell = () => {
  const size = useWindowSize();

  return (
    <div className={cl.cas}>
      <div className={cl.cas__modal}>
        <div className={cl.cas__modal__left}>
          <Typography
            lineHeight="130%"
            letterSpacing="1%"
            weight="600"
            align={size.width > 600 ? "left" : "center"}
            size={size.width > 600 ? "h2" : "2.125rem"}
          >
            Create and Sell NFTs
          </Typography>
          <Typography
            lineHeight="130%"
            letterSpacing="1%"
            align={size.width > 600 ? "left" : "center"}
            size={size.width > 600 ? "h5" : "1rem"}
            color="#D4D4D499"
          >
            World’s Largest NFT Place
          </Typography>
          <div className={cl.cas__modal__left__buttons}>
            <Button color="light" variant="contain">
              <Typography
                lineHeight="130%"
                letterSpacing="1%"
                fontFamily="Outfit"
                color="inherit"
                size="h4"
              >
                Explore More
              </Typography>
            </Button>
            <Button color="light" variant="outline">
              <Typography
                lineHeight="130%"
                letterSpacing="1%"
                fontFamily="Outfit"
                color="inherit"
                size="h4"
              >
                Sell Artwork
              </Typography>
            </Button>
          </div>
        </div>
        <div className={cl.cas__modal__right}>
          <Image path="casLogo.png" />
          <Image path="casLogo.png" />
        </div>
      </div>
    </div>
  );
};
