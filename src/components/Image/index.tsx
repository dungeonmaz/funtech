import { renderImage } from "@utils/renderImage";
import { FC, ImgHTMLAttributes } from "react";

interface ImageProps
  extends Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet"> {
  path: string;
}

export const Image: FC<ImageProps> = ({ path, className, ...props }) => {
  const newUrl = renderImage(path);

  return <img className={`image ${className ?? ""}`} src={newUrl} {...props} />;
};
