import { useTranslation } from "react-i18next";
import "./headerBar.scss";

const HeaderBar = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="header-bar container">
      <div className="header-bar__city">{t("city.moscow")}</div>
      <div className="header-bar__phone">8 800 777-777-1</div>
      <div className="header-bar__lang">
        {t("language")}:<button onClick={() => changeLanguage("ru")}>RU</button>
        <button onClick={() => changeLanguage("en")}>EN</button>
      </div>
    </div>
  );
};

export default HeaderBar;
