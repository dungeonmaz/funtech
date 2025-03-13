import { Button } from "@components/Button";
import cl from "./style.module.scss";
import { Typography } from "@components/Typography";
import { StatElement } from "./components/StatElement";
import { ImagesBlock } from "./modules/ImagesBlock";
import { useWindowSize } from "@hooks/useWindowSize";

export const Main = () => {
  const size = useWindowSize();

  return (
    <div className={cl.main}>
      <div className={cl.main__block}>
        {size.width <= 600 && (
          <div className={cl.main__block__top}>
            <div className={cl.main__block__top__line} />
            <Typography
              weight="600"
              size="subheading1"
              lineHeight="120%"
              letterSpacing="1.23px"
              color="#201F1F"
            >
              OVER 1M CREATORS
            </Typography>
          </div>
        )}

        <Typography
          lineHeight="120%"
          letterSpacing="-3px"
          weight="600"
          size="h1"
          color="#141416"
          align={size.width <= 600 ? "center" : "left"}
        >
          Discover And Create NFTs
        </Typography>
        <Typography
          lineHeight="150%"
          fontFamily="Inter"
          weight="400"
          size="h6"
          color="#676767"
          align={size.width <= 600 ? "center" : "left"}
        >
          Discover, Create and Sell NFTs On Our NFT Marketplace With Over
          Thousands Of NFTs And Get a{" "}
          <Typography
            lineHeight="150%"
            fontFamily="Inter"
            weight="600"
            size="h6"
            color="#141416"
          >
            $20 bonus.
          </Typography>
        </Typography>
        <div className={cl.main__block__buttons}>
          <Button variant="contain">
            <Typography
              lineHeight="100%"
              letterSpacing="1%"
              color="inherit"
              size={size.width > 600 ? "subheading2" : "1.25rem"}
            >
              EXPLORE MORE
            </Typography>
          </Button>
          <Button variant="outline">
            <Typography
              lineHeight="100%"
              letterSpacing="1%"
              color="inherit"
              size={size.width > 600 ? "subheading2" : "1.25rem"}
            >
              CREATE NFT
            </Typography>
          </Button>
        </div>
      </div>
      {size.width > 600 && (
        <div className={cl.main__stats}>
          <StatElement count="430K+" title="Art Works" />
          <StatElement count="159K+" title="Creators" />
          <StatElement count="87K+" title="Collections" />
        </div>
      )}
      <ImagesBlock />
    </div>
  );
};
