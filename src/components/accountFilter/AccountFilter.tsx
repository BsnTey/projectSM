import { useState, useCallback } from "react";
import { Portal } from "../portal/Portal";
import AddAccount from "../addAccount/AddAccount";
import ActionButton from "../actionButton/ActionButton";
import { TypeBtn } from "../../utils/enum";
import { sortAccountList } from "../../store/accountSlice";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import "./accountFilter.scss";

const AccountFilter = () => {
  const dispatch = useDispatch();
  const [openPortal, setOpenPortal] = useState(false);

  const { t, i18n } = useTranslation();

  const onOpenAddAccount = useCallback(() => {
    setOpenPortal(!openPortal);
  }, [openPortal]);

  const handleSortClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const type = (event.currentTarget as HTMLButtonElement).getAttribute("data-type");
      dispatch(sortAccountList(type));
    },
    [dispatch]
  );

  return (
    <div className="filter-btns list-body__btns">
      <div className="filter-form filter-btns__input-form">
        <input className="filter-form__input" placeholder="Искать" type="text" name="search" />
        <button className="filter-form__button" type="button" />
      </div>
      <div className="filter-btns__filter-btns-wrap">
        <ActionButton text={t("sortUP")} className="action-btn filter-btns__down" dataType={TypeBtn.ask} onClick={handleSortClick} />
        <ActionButton text={t("sortDown")} className="action-btn filter-btns__up" dataType={TypeBtn.desk} onClick={handleSortClick} />
        <ActionButton text={t("addBtn")} className="action-btn filter-btns__add" dataType={TypeBtn.addAcc} onClick={onOpenAddAccount} /> {/* temp */}
        <ActionButton text={t("updateAll")} className="action-btn filter-btns__update" dataType={TypeBtn.updateAll} onClick={handleSortClick} /> {/* temp */}
      </div>
      {openPortal && <Portal children={<AddAccount />} onClose={onOpenAddAccount} />}
    </div>
  );
};

export default AccountFilter;
