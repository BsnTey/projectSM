import "./appMenu.scss";

const AppMenu = () => {
  return (
    <nav className="app-body__menu app-menu">
      <a className="link-home app-menu__item">Личный кабинет</a>
      <a className="link-list app-menu__item">Список</a>
    </nav>
  );
};

export default AppMenu;
