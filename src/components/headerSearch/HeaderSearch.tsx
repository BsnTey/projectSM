import "./headerSearch.scss";

const HeaderSearch = () => {
  return (
    <div className="sm-search-wrapper">
      <div className="header__input-search sm-search">
        <input className="sm-search__input-wpapper sm-search__input" placeholder="Поиск" type="text" name="search" />
        <button className="sm-search__btn" type="button">
          Найти
        </button>
      </div>
    </div>
  );
};

export default HeaderSearch;
