import { SVGProps } from "react";
interface IiconProps {
  iconSrc: React.ComponentType<SVGProps<SVGSVGElement>>;
}

const Icon: React.FC<IiconProps> = ({ iconSrc }) => {
  const iconStyle = {
    backgroundImage: `url(${iconSrc})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return <span style={iconStyle} />;
};

export default Icon;
