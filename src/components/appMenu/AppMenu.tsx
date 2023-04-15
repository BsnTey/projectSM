import { Link } from "react-router-dom";

import "./appMenu.scss";

const AppMenu = () => {
  return (
    <nav className="app-body__menu app-menu">
      <Link to="/profile" className="link-home app-menu__item">
        Личный кабинет
      </Link>
      <Link to="/" className="link-list app-menu__item">
        Список
      </Link>
    </nav>
  );
};

export default AppMenu;
