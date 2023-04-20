import HeaderBar from "../headerBar/HeaderBar";
import HeaderSearch from "../headerSearch/HeaderSearch";
import "./header.scss";

const Header = () => {
  return (
    <>
      <HeaderBar />
      <div className="header container">
        <a className="header__logo" href="/"></a>
        <HeaderSearch />
        <button className="header__login">Войти</button>
      </div>
    </>
  );
};

export default Header;
