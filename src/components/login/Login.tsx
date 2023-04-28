import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../img/auth-logo.svg";
import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";
import ActionButton from "../actionButton/ActionButton";
import RegInput from "../regInput/RegInput";
import { TypeRegStage } from "../../utils/enum";
import "./login.scss";

const Login = () => {
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
            {regStage === TypeRegStage.reg && (
              <>
                <RegInput title="Password" placeholder={t("enterPassword")} type="password" />
                <RegInput title="Repeat Password" placeholder={t("repeatPassword")} type="password" />
                <label className="input-consent">
                  <input className="input-consent__checkbox" type="checkbox" />
                  <p className="login-body__add-text">Даю согласие на хранение персональных данных</p>
                </label>
              </>
            )}
            {regStage === TypeRegStage.auth && (
              <>
                <RegInput title="Password" placeholder={t("enterPassword")} type="password" />
                <Link to="/forgot">
                  <span className="login-body__add-text">{t("forgotPassword")}?</span>
                </Link>
              </>
            )}
          </div>
          <ActionButton text={t("continue")} className="action-btn login-body__btn action-btn--blue" onClick={handleContinue} />
        </div>
      </div>
    </>
  );
};

export default Login;
