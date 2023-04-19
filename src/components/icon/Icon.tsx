interface IiconProps {
  iconSrc: string;
  size: string;
  style?: React.CSSProperties;
}

const Icon: React.FC<IiconProps> = ({ iconSrc, size, style }) => {
  const iconStyle = {
    display: "inline-block",
    width: size,
    height: size,
    backgroundImage: `url(${iconSrc})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    ...(style || {}),
  };

  return <span style={iconStyle} />;
};

export default Icon;

//<Icon iconSrc={require("../../img/flag.svg").default} size={"1.4rem"} style={{ borderRadius: "50%" }} /> пример вставки
