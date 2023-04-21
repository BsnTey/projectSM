import { useState } from "react";
import { useCallback } from "react";
import { Portal } from "../portal/Portal";
import AddAccount from "../addAccount/AddAccount";
import ActionButton from "../actionButton/ActionButton";
import { TypeBtn } from "../../utils/enum";
import { sortAccountList } from "../../store/accountSlice";
import { useDispatch } from "react-redux";
import "./accountFilter.scss";

const AccountFilter = () => {
  const dispatch = useDispatch();
  const [openPortal, setOpenPortal] = useState(false);

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
        <ActionButton iconSrc={require("../../img/filter-search.svg").default} className="search-form-btn" />
      </div>
      <div className="filter-btns__filter-btns-wrap">
        <ActionButton text={"По убыванию"} iconSrc={require("../../img/sortUp.svg").default} className="action-btn" dataType={TypeBtn.ask} onClick={handleSortClick} />
        <ActionButton text={"По возрастанию"} iconSrc={require("../../img/sortDown.svg").default} className="action-btn" dataType={TypeBtn.desk} onClick={handleSortClick} />
        <ActionButton text={"Добавить"} iconSrc={require("../../img/add.svg").default} className="action-btn" dataType={TypeBtn.addAcc} onClick={onOpenAddAccount} />
        <ActionButton text={"Обновить все"} iconSrc={require("../../img/update.svg").default} className="action-btn" dataType={TypeBtn.updateAll} onClick={handleSortClick} />
      </div>
      {openPortal && <Portal children={<AddAccount />} onClose={onOpenAddAccount} />}
    </div>
  );
};

export default AccountFilter;
