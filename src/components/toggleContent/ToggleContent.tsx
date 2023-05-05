import { useState, FC, ReactNode } from "react";

import "./toggleContent.scss";

interface IToggleContentProps {
  toggle: (onShow: () => void) => ReactNode;
  content: (onHide: () => void) => ReactNode;
}

const ToggleContent: FC<IToggleContentProps> = ({ toggle, content }) => {
  const [isShown, setIsShown] = useState(false);
  const onHide = () => setIsShown(false);
  const onShow = () => setIsShown(true);

  return (
    <>
      {toggle(onShow)}
      {isShown && content(onHide)}
    </>
  );
};

export default ToggleContent;
