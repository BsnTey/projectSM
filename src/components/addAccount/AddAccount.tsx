import "./addAccount.scss";
import { useTranslation } from "react-i18next";
import ActionButton from "../actionButton/ActionButton";
import { useState } from "react";

const AddAccount = () => {
  const { t } = useTranslation();
  const [textareaValue, setTextareaValue] = useState("");

  const handleAddinput = () => {
    console.log(textareaValue, "useCallback");
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLTextAreaElement>) => {
    const currentValue = textareaValue ? `${textareaValue}\n${event.clipboardData.getData("text")}` : event.clipboardData.getData("text");

    setTimeout(() => {
      const newValue = currentValue.replace(/\s{2,}/g, "\n");
      setTextareaValue(newValue);
    }, 0);
  };

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(event.target.value);
  };

  return (
    <div className="add-form">
      <h2 className="modal-title add-form__title">{t("addNewAcc")}</h2>
      <div className="add-form__input-wrap">
        <div className="add-form__main-input-wrap">
          <p className="add-form__input-title">{t("numberAcc")}</p>
          <textarea
            className="add-form__text-area"
            name="add-account-textarea"
            placeholder="Добавить в список. Вставлять токены аккаунтов через Enter (каждый с новой строки)"
            onPaste={(e) => handlePaste(e)}
            onChange={(e) => handleTextareaChange(e)}
            value={textareaValue}
          />
        </div>
      </div>
      <ActionButton text={t("add")} className="action-btn add-form__btn-add action-btn--blue" onClick={handleAddinput} />
    </div>
  );
};

export default AddAccount;
