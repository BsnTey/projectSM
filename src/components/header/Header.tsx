import HeaderBar from "../headerBar/HeaderBar";
import HeaderSearch from "../headerSearch/HeaderSearch";
import { useTranslation } from "react-i18next";
import ToggleContent from "../toggleContent/ToggleContent";
import { Modal } from "../modal/Modal";
import ActionButton from "../actionButton/ActionButton";
import "./header.scss";
import FormLogin from "../formLogin/FormLogin";

const Header = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeaderBar />
      <div className="header container">
        <a className="header__logo" href="/"></a>
        <HeaderSearch />

        <ToggleContent
          toggle={(show) => <ActionButton text={t("signIn")} className="header__login" onClick={show} />}
          content={(hide) => <Modal children={<FormLogin />} onClose={hide} />}
        />

        {/* <button className="header__login">{t("signIn")}</button> */}
      </div>
    </>
  );
};

export default Header;
