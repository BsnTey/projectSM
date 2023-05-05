import { useTranslation } from "react-i18next";
import RegInput from "../regInput/RegInput";
import "./registration.scss";

const Registration = () => {
  const { t } = useTranslation();
  return (
    <>
      <RegInput title="Password" placeholder={t("enterPassword")} type="password" />
      <RegInput title="Repeat Password" placeholder={t("repeatPassword")} type="password" />
      <label className="input-consent">
        <input className="input-consent__checkbox" type="checkbox" />
        <p className="input-consent__text">Даю согласие на хранение персональных данных</p>
      </label>
    </>
  );
};

export default Registration;
