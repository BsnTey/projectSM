import { Link } from "react-router-dom";
import ActionButton from "../actionButton/ActionButton";

import "./appMenu.scss";

const AppMenu = () => {
  return (
    <nav className="app-body__menu app-menu">
      <Link to="/profile" className="link-home app-menu__item">
        <ActionButton text="Личный кабинет" iconSrc={require("../../img/home.svg").default} className="nav-btn" />
      </Link>
      <Link to="/" className="link-list app-menu__item">
        <ActionButton text="Список" iconSrc={require("../../img/list.svg").default} className="nav-btn" />
      </Link>
    </nav>
  );
};

export default AppMenu;
