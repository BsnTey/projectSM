import "./accountFilter.scss";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "../modal/Modal";
import AddAccount from "../addAccount/AddAccount";
import ActionButton from "../actionButton/ActionButton";
import { TypeBtn } from "../../utils/enum";
import { sortAccountList, deleteSelected, accountSelected, delAllSelectAccount } from "../../store/accountSlice";
import { useTranslation } from "react-i18next";
import sortUp from "../../img/sortUp.svg";
import filterSearch from "../../img/filter-search.svg";
import sortDown from "../../img/sortDown.svg";
import add from "../../img/add.svg";
import update from "../../img/update.svg";
import trash from "../../img/trash.svg";
import cancel from "../../img/cancel.svg";
import ToggleContent from "../toggleContent/ToggleContent";

const AccountFilter = () => {
  const dispatch = useDispatch();
  const selectedAccounts = useSelector(accountSelected);

  const { t } = useTranslation();

  const handleSortClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      const type = (event.currentTarget as HTMLButtonElement).getAttribute("data-type");
      dispatch(sortAccountList(type));
    },
    [dispatch]
  );

  const handleDelete = useCallback(() => {
    dispatch(deleteSelected());
  }, [dispatch]);

  const handleCancel = useCallback(() => {
    dispatch(delAllSelectAccount());
  }, [dispatch, selectedAccounts]);

  console.log(selectedAccounts);
  return (
    <div className="filter-btns list-body__btns">
      <div className="filter-form filter-btns__input-form">
        <input className="filter-form__input" placeholder="Искать" type="text" name="search" />
        <ActionButton iconSrc={filterSearch} className="search-form-btn" />
      </div>
      {selectedAccounts.length > 0 ? (
        <div className="filter-btns__filter-btns-wrap">
          <ActionButton text={t("cancel")} classNameIcon="action-btn__icon" iconSrc={cancel} className="action-btn" onClick={handleCancel} />
          <ActionButton text={t("delete")} classNameIcon="action-btn__icon" iconSrc={trash} className="action-btn" onClick={handleDelete} />
        </div>
      ) : (
        <div className="filter-btns__filter-btns-wrap">
          <ActionButton
            text={t("sortUP")}
            iconSrc={sortDown}
            classNameIcon="action-btn__icon"
            className="action-btn filter-btns__down"
            dataType={TypeBtn.ask}
            onClick={handleSortClick}
          />
          <ActionButton
            text={t("sortDown")}
            iconSrc={sortUp}
            classNameIcon="action-btn__icon"
            className="action-btn filter-btns__up"
            dataType={TypeBtn.desk}
            onClick={handleSortClick}
          />
          <ToggleContent
            toggle={(show) => (
              <ActionButton text={t("addBtn")} iconSrc={add} classNameIcon="action-btn__icon" className="action-btn filter-btns__add" dataType={TypeBtn.addAcc} onClick={show} />
            )}
            content={(hide) => <Modal children={<AddAccount />} onClose={hide} />}
          />
          <ActionButton
            text={t("updateAll")}
            iconSrc={update}
            classNameIcon="action-btn__icon"
            className="action-btn filter-btns__update"
            dataType={TypeBtn.updateAll}
            onClick={handleSortClick}
          />
        </div>
      )}
    </div>
  );
};

export default AccountFilter;
