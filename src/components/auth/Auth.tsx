import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import RegInput from "../regInput/RegInput";
import "./auth.scss";

const Auth = () => {
  const { t } = useTranslation();
  return (
    <>
      <RegInput title="Password" placeholder={t("enterPassword")} type="password" />
      <Link to="/forgot">
        <span className="input-consent__text">{t("forgotPassword")}?</span>
      </Link>
    </>
  );
};

export default Auth;
