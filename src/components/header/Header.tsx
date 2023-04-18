import "./header.scss";

const Header = () => {
  return (
    <>
      <div className="header-bar container">
        <div className="header-bar__city">Москва</div>
        <div className="header-bar__phone">8 800 777-777-1</div>
      </div>
      <div className="header container">
        <a className="header__logo" href="/"></a>
        <div className="sm-search-wrapper">
          <form className="header__input-search sm-search" action="" method="get">
            <label className="sm-search__input-wpapper">
              <input className="sm-search__input" placeholder="Поиск" type="text" name="search" />
            </label>
            <button className="sm-search__btn" type="button">
              Найти
            </button>
          </form>
        </div>
        <button className="header__login">Войти</button>
      </div>
    </>
  );
};

export default Header;
