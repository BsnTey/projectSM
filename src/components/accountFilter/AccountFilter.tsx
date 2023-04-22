import { useState } from "react";
import { useCallback } from "react";
import { Portal } from "../portal/Portal";
import AddAccount from "../addAccount/AddAccount";
import ActionButton from "../actionButton/ActionButton";
import { TypeBtn } from "../../utils/enum";
import { sortAccountList } from "../../store/accountSlice";
import { useDispatch } from "react-redux";
import sortUp from "../../img/sortUp.svg";
import filterSearch from "../../img/filter-search.svg";
import sortDown from "../../img/sortDown.svg";
import add from "../../img/add.svg";
import update from "../../img/update.svg";
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
        <ActionButton iconSrc={filterSearch} className="search-form-btn" />
      </div>
      <div className="filter-btns__filter-btns-wrap">
        <ActionButton text={"По убыванию"} iconSrc={sortDown} className="action-btn" dataType={TypeBtn.ask} onClick={handleSortClick} />
        <ActionButton text={"По возрастанию"} iconSrc={sortUp} className="action-btn" dataType={TypeBtn.desk} onClick={handleSortClick} />
        <ActionButton text={"Добавить"} iconSrc={add} className="action-btn" dataType={TypeBtn.addAcc} onClick={onOpenAddAccount} />
        <ActionButton text={"Обновить все"} iconSrc={update} className="action-btn" dataType={TypeBtn.updateAll} onClick={handleSortClick} />
      </div>
      {openPortal && <Portal children={<AddAccount />} onClose={onOpenAddAccount} />}
    </div>
  );
};

export default AccountFilter;
