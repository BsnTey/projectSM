import { SVGProps } from "react";
interface IiconProps {
  iconSrc: React.ComponentType<SVGProps<SVGSVGElement>>;
  classNameIcon?: string;
}

const Icon: React.FC<IiconProps> = ({ iconSrc, classNameIcon }) => {
  const iconStyle = {
    backgroundImage: `url(${iconSrc})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return <span style={iconStyle} className={classNameIcon} />;
};

export default Icon;
