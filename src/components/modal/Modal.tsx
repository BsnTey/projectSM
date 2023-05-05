import { ReactNode, FC } from "react";
import { createPortal } from "react-dom";

import "./modal.scss";

const root = document.getElementById("react-modals");

export interface IModalProps {
  children: ReactNode;
  onClose?: () => void;
}

export const Modal: FC<IModalProps> = ({ children, onClose }) => {
  return root
    ? createPortal(
        <div className="portal-wrap">
          <div className="portal">
            {onClose ? <div className="close-portal" onClick={onClose}></div> : null}
            {children}
          </div>
        </div>,
        root
      )
    : null;
};
