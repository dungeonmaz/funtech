import cl from "./style.module.scss";
import { Image } from "@components/Image";

export const ImagesBlock = () => {
  return (
    <div className={cl.images}>
      <div className={cl.images__main1}>
        <Image path="main1.png" />
        <Image path="main1.png" />
      </div>
      <div className={cl.images__main2}>
        <Image path="main2.png" />
        <Image path="main2.png" />
      </div>
      <Image className={cl.images__arrow} path="mainArrow.png" />
      <Image className={cl.images__dots} path="mainDots.png" />
    </div>
  );
};
