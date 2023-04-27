// import { memo } from "react";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { accountSelected, selectAccount, delSelectAccount } from "../../store/accountSlice";

interface ICheckboxProps {
  className: string;
  token: string;
}

const Checkbox: React.FC<ICheckboxProps> = ({ className, token }) => {
  const dispatch = useDispatch();
  const selectedAccounts = useSelector(accountSelected);

  const handleCheckboxChange = useCallback(
    (token: string, checked: boolean) => {
      checked ? dispatch(selectAccount(token)) : dispatch(delSelectAccount(token));
    },
    [dispatch]
  );

  return <input className={className} type="checkbox" checked={selectedAccounts.includes(token)} onChange={(event) => handleCheckboxChange(token, event.target.checked)} />;
};

// export default memo(Checkbox);
export default Checkbox;
