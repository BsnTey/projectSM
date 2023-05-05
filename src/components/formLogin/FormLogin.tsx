// import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../img/auth-logo.svg";
import { useTranslation } from "react-i18next";
import { useCallback, useState, FC, ReactNode } from "react";
import ActionButton from "../actionButton/ActionButton";
import RegInput from "../regInput/RegInput";
import { TypeRegStage } from "../../utils/enum";
import Authorization from "../authorization/Authorization";
// import Registration from "../registration/Registration";
import "./formLogin.scss";

interface IFormLoginProps {
  children?: ReactNode;
}

const FormLogin: FC<IFormLoginProps> = ({ children }) => {
  const { t } = useTranslation();
  const [regStage, setRegStage] = useState(TypeRegStage.regAuth);

  const handleContinue = useCallback(() => {
    setRegStage(TypeRegStage.auth);
  }, []);

  return (
    <>
      <div className="login">
        <Logo className="login__logo" />
        <p className="login__header container-login">{t(regStage)}</p>
        <div className="login-body container-login">
          <div className="login-body__wrap">
            <RegInput title="E-mail" placeholder={t("enterYourEmail")} type="text" />
            {regStage === "auth" ? <Authorization /> : null}
            {/* <Registration /> */}
            {children}
          </div>
          <ActionButton text={t("continue")} className="action-btn login-body__btn action-btn--blue" onClick={handleContinue} />
        </div>
      </div>
    </>
  );
};

export default FormLogin;
