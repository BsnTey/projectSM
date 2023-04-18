import { useState } from "react";

import "./accountFilter.scss";
import { Portal } from "../portal/Portal";
import AddAccount from "../addAccount/AddAccount";
import FilterActionButton from "../filterActionButton/FilterActionButton";

const AccountFilter = () => {
  const [openPortal, setOpenPortal] = useState(false);

  const onOpenAddAccount = () => {
    setOpenPortal(!openPortal);
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
        <FilterActionButton text={"По убыванию"} iconClass={"filter-btns__down"} TypeBtn={"asc"} />
        <FilterActionButton text={"По возрастанию"} iconClass={"filter-btns__up"} TypeBtn={"desc"} />
        <FilterActionButton text={"Добавить"} iconClass={"filter-btns__add"} TypeBtn={"addAcc"} />
        <FilterActionButton text={"Обновить все"} iconClass={"filter-btns__update"} TypeBtn={"updateAll"} />
      </div>
      {openPortal && <Portal children={<AddAccount />} onClose={onOpenAddAccount} />}
    </div>
  );
};

export default AccountFilter;
