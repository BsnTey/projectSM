import { useTranslation } from "react-i18next";
import "./headerBar.scss";

const HeaderBar = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="header-bar container">
      <div className="header-bar__city">{t("city.moscow")}</div>
      <div className="header-bar__phone">8 800 777-777-1</div>
    </div>
  );
};

export default HeaderBar;
