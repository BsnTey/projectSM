interface IiconProps {
  iconSrc: string;
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
