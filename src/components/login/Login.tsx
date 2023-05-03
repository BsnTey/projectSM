import { Route, Routes, useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../../img/auth-logo.svg";
import { useTranslation } from "react-i18next";
import { useCallback, useState } from "react";
import ActionButton from "../actionButton/ActionButton";
import RegInput from "../regInput/RegInput";
import SignIn from "../signIn/SignIn";
import Auth from "../auth/Auth";
import { TypeRegStage } from "../../utils/enum";
import "./login.scss";

const Login = () => {
  const { t } = useTranslation();
  const [regStage, setRegStage] = useState(TypeRegStage.regAuth);
  const navigate = useNavigate();

  const handleContinue = useCallback(() => {
    setRegStage(TypeRegStage.auth);
    navigate("/auth/register");
  }, [navigate]);

  return (
    <>
      <div className="login">
        <Logo className="login__logo" />
        <p className="login__header container-login">{t(regStage)}</p>
        <div className="login-body container-login">
          <div className="login-body__wrap">
            <RegInput title="E-mail" placeholder={t("enterYourEmail")} type="text" />
            <Routes>
              <Route path={"register"} element={<SignIn />} />
              <Route path={"login"} element={<Auth />} />
            </Routes>
          </div>
          <ActionButton text={t("continue")} className="action-btn login-body__btn action-btn--blue" onClick={handleContinue} />
        </div>
      </div>
    </>
  );
};

export default Login;
