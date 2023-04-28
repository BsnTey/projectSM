import { useTranslation } from "react-i18next";
import "./addAccount.scss";

const AddAccount = () => {
  const { t } = useTranslation();

  return (
    <div className="add-form">
      <h2 className="modal-title add-form__title">{t("addNewAcc")}</h2>
      <div className="add-form__input-wrap">
        <div className="add-form__main-input-wrap">
          <p className="add-form__input-title">{t("numberAcc")}</p>
          <input className="add-form__input" type="text" placeholder="Добавить в список" name="add-account" />
        </div>
        <button className="add-form__btn-input">+ {t("more")}</button>
      </div>
      <button className="add-form__btn-add">{t("add")}</button>
    </div>
  );
};

export default AddAccount;
