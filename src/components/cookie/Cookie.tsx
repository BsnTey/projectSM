import { useTranslation } from "react-i18next";
import { useCallback } from "react";
import { selectCookie } from "../../store/cookieSlice";
import { useSelector } from "react-redux";
import ActionButton from "../actionButton/ActionButton";
import copy from "../../img/copy.svg";
import "./cookie.scss";

const Cookie = () => {
  const cookie = useSelector(selectCookie);
  const { t } = useTranslation();

  const handleCopyClick = useCallback(() => {
    navigator.clipboard.writeText(cookie);
  }, []);

  return (
    <div className="cookie">
      <p className="cookie__text">{cookie}</p>
      <ActionButton text={t("copy")} iconSrc={copy} className="action-btn cookie__btn action-btn--blue" classNameIcon="action-btn__icon" onClick={handleCopyClick} />
    </div>
  );
};

export default Cookie;
