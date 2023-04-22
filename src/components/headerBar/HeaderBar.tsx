import { useTranslation } from "react-i18next";
import ActionButton from "../actionButton/ActionButton";
import "./headerBar.scss";
import flag from "../../img/flag.svg";

const HeaderBar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="header-bar container">
      <ActionButton text={t("city.moscow")} iconSrc={flag} className="header-bar__btn-city" />
      <div className="header-bar__phone">8 800 777-777-1</div>
      <div className="header-bar__lang">
        {t("language")}:<button onClick={() => changeLanguage("ru")}>RU</button>
        <button onClick={() => changeLanguage("en")}>EN</button>
      </div>
    </div>
  );
};

export default HeaderBar;
