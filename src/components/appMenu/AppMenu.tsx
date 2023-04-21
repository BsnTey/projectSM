import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./appMenu.scss";

const AppMenu = () => {
  const { t, i18n } = useTranslation();

  return (
    <nav className="app-body__menu app-menu">
      <Link to="/profile" className="link-home app-menu__item">
        {t("personalCab")}
      </Link>
      <Link to="/" className="link-list app-menu__item">
        {t("list")}
      </Link>
    </nav>
  );
};

export default AppMenu;
