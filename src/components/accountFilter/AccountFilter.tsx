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
  }, []);

  const handleSortClick = useCallback((event: React.SyntheticEvent) => {
    // @ts-ignore
    const type = event.target.parentNode?.dataset?.type;
    dispatch(sortAccountList(type));
  }, []);

  return (
    <div className="filter-btns list-body__btns">
      <form className="filter-form filter-btns__input-form" action="">
        <label className="filter-form__label">
          <input className="filter-form__input" placeholder="Искать" type="text" name="search" />
        </label>
        <button className="filter-form__button" type="button" />
      </form>
      <div className="filter-btns__filter-btns-wrap">
        <ActionButton text={"По убыванию"} className="action-btn filter-btns__down" dataType={TypeBtn.ask} onClick={handleSortClick} />
        <ActionButton text={"По возрастанию"} className="action-btn filter-btns__up" dataType={TypeBtn.desk} onClick={handleSortClick} />
        <ActionButton text={"Добавить"} className="action-btn filter-btns__add" dataType={TypeBtn.addAcc} onClick={onOpenAddAccount} /> {/* temp */}
        <ActionButton text={"Обновить все"} className="action-btn filter-btns__update" dataType={TypeBtn.updateAll} onClick={handleSortClick} /> {/* temp */}
      </div>
      {openPortal && <Portal children={<AddAccount />} onClose={onOpenAddAccount} />}
    </div>
  );
};

export default AccountFilter;
