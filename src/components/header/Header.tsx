import HeaderBar from "../headerBar/HeaderBar";
import HeaderSearch from "../headerSearch/HeaderSearch";
import { useTranslation } from "react-i18next";
import "./header.scss";

const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <>
      <HeaderBar />
      <div className="header container">
        <a className="header__logo" href="/"></a>
        <HeaderSearch />
        <button className="header__login">{t("signIn")}</button>
      </div>
    </>
  );
};

export default Header;
