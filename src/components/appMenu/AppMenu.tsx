import { Link } from "react-router-dom";
import ActionButton from "../actionButton/ActionButton";
import home from "../../img/home.svg";
import list from "../../img/list.svg";
import calculator from "../../img/calculator.svg";

import "./appMenu.scss";

const AppMenu = () => {
  return (
    <nav className="app-body__menu app-menu">
      <Link to="/profile" className="link-home app-menu__item">
        <ActionButton text="Личный кабинет" iconSrc={home} className="nav-btn" />
      </Link>
      <Link to="/" className="link-list app-menu__item">
        <ActionButton text="Список" iconSrc={list} className="nav-btn" />
      </Link>
      <Link to="/" className="link-list app-menu__item">
        <ActionButton text="Калькулятор" iconSrc={calculator} className="nav-btn" />
      </Link>
    </nav>
  );
};

export default AppMenu;
