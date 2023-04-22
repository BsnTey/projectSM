import ActionButton from "../actionButton/ActionButton";
import "./headerBar.scss";
import flag from "../../img/flag.svg";

const HeaderBar = () => {
  return (
    <div className="header-bar container">
      <ActionButton text={"Москва"} iconSrc={flag} className="header-bar__btn-city" />
      <div className="header-bar__phone">8 800 777-777-1</div>
    </div>
  );
};

export default HeaderBar;
