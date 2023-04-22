import { useTranslation } from "react-i18next";
import "./headerSearch.scss";

const HeaderSearch = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="sm-search-wrapper">
      <div className="header__input-search sm-search">
        <input className="sm-search__input-wpapper sm-search__input" placeholder="Поиск" type="text" name="search" />
        <button className="sm-search__btn" type="button">
          {t("find")}
        </button>
      </div>
    </div>
  );
};

export default HeaderSearch;
