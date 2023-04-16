import React from "react";
import ReactDOM from "react-dom";

import "./portal.scss";

const root = document.getElementById("react-modals");

export interface IPortalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export const Portal: React.FC<IPortalProps> = ({ children, onClose }) => {
  return root
    ? ReactDOM.createPortal(
        <div className="portal-wrap">
          <div className="portal">
            <div className="close-portal" onClick={() => onClose()}></div>
            {children}
          </div>
        </div>,
        root
      )
    : null;
};
