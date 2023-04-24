import { memo, SVGProps } from "react";
import Icon from "../icon/Icon";

interface IActionButtonProps {
  text?: string | null;
  iconSrc?: React.ComponentType<SVGProps<SVGSVGElement>>;
  className?: string;
  dataType?: string;
  classNameIcon?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ActionButton: React.FC<IActionButtonProps> = ({ text, iconSrc, className, dataType, classNameIcon, onClick }) => {
  return (
    <button className={className} data-type={dataType} onClick={onClick}>
      {iconSrc && <Icon iconSrc={iconSrc} classNameIcon={classNameIcon} />}
      {text && <span>{text}</span>}
    </button>
  );
};

export default memo(ActionButton);
