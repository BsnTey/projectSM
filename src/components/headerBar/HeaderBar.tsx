import Icon from "../icon/Icon";
import ActionButton from "../actionButton/ActionButton";
import "./headerBar.scss";

const HeaderBar = () => {
  return (
    <div className="header-bar container">
      <ActionButton text={"Москва"} iconSrc={require("../../img/flag.svg").default} className="header-bar__btn-city" />
      <div className="header-bar__phone">8 800 777-777-1</div>
    </div>
  );
};

export default HeaderBar;
