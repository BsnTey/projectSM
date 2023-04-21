import { memo } from "react";
import Icon from "../icon/Icon";

interface IActionButtonProps {
  text?: string;
  iconSrc?: string;
  className?: string;
  dataType?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ActionButton: React.FC<IActionButtonProps> = ({ text, iconSrc, className, dataType, onClick }) => {
  return (
    <button className={className} data-type={dataType} onClick={onClick}>
      {iconSrc && <Icon iconSrc={iconSrc} />}
      {text && <span>{text}</span>}
    </button>
  );
};

export default memo(ActionButton);
