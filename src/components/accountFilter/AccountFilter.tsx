import { useState } from "react";

import "./accountFilter.scss";
import { Portal } from "../portal/Portal";
import AddAccount from "../addAccount/AddAccount";
import ActionButton from "../actionButton/ActionButton";
import { sortAccountList } from "../../store/accountSlice";
import { useDispatch } from "react-redux";

const AccountFilter = () => {
  const dispatch = useDispatch();
  const [openPortal, setOpenPortal] = useState(false);

  const onOpenAddAccount = () => {
    setOpenPortal(!openPortal);
  };

  const handleSortClick = (TypeBtn: string) => {
    dispatch(sortAccountList(TypeBtn));
  };

  return (
    <div className="filter-btns list-body__btns">
      <form className="filter-form filter-btns__input-form" action="">
        <label className="filter-form__label">
          <input className="filter-form__input" placeholder="Искать" type="text" name="search" />
        </label>
        <button className="filter-form__button" type="button" />
      </form>
      <div className="filter-btns__filter-btns-wrap">
        <ActionButton text={"По убыванию"} className={"action-btn filter-btns__down"} onClick={() => handleSortClick("asc")} />
        <ActionButton text={"По возрастанию"} className={"action-btn filter-btns__up"} onClick={() => handleSortClick("desc")} />
        <ActionButton text={"Добавить"} className={"action-btn filter-btns__add"} onClick={() => handleSortClick("addAcc")} /> {/* temp */}
        <ActionButton text={"Обновить все"} className={"action-btn filter-btns__update"} onClick={() => handleSortClick("updateAll")} /> {/* temp */}
      </div>
      {openPortal && <Portal children={<AddAccount />} onClose={onOpenAddAccount} />}
    </div>
  );
};

export default AccountFilter;
