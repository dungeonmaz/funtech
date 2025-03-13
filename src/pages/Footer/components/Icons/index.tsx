import { Icon } from "@components/Icon";
import cl from "./style.module.scss";
import { useWindowSize } from "@hooks/useWindowSize";

export const Icons = () => {
  const size = useWindowSize();
  const iconSize = size.width > 600 ? "1.3125rem" : "1.5rem";
  return (
    <div className={cl.icons}>
      <Icon name="Instagram" size={iconSize} />
      <Icon name="Linkedin" size={iconSize} />
      <Icon name="Facebook" size={iconSize} />
      <Icon name="Twitter" size={iconSize} />
    </div>
  );
};
