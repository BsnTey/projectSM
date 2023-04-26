import { useCallback } from "react";
import { selectAccounts } from "../../store/accountSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectedList } from "../../store/accountSlice";
import { accountSelected } from "../../store/accountSlice";
import ActionButton from "../actionButton/ActionButton";
import "./accountData.scss";
import key from "../../img/key.svg";
import update from "../../img/update.svg";

const AccountData = () => {
  const dispatch = useDispatch();
  const accounts = useSelector(selectAccounts);
  const selectedAccounts = useSelector(accountSelected);

  const handleCheckboxChange = useCallback(
    (token: string, checked: boolean) => {
      console.log("вызвал handleCheckboxChange");
      dispatch(selectedList({ token, checked }));
    },
    [dispatch]
  );

  return (
    <>
      {accounts?.map(({ token, dateCheck, amount }) => {
        const isSelected = selectedAccounts.includes(token);
        return (
          <tr className="accounts-table__account" key={token}>
            <td>
              <label className="accounts-table__account-label">
                <input className="accounts-table__account-checkbox" type="checkbox" checked={isSelected} onChange={(event) => handleCheckboxChange(token, event.target.checked)} />
                {token}
              </label>
            </td>
            <td>{dateCheck}</td>
            <td>{amount}</td>
            <td>
              <ActionButton iconSrc={key} className="account-btn" />
            </td>
            <td>
              <ActionButton iconSrc={update} className="account-btn" />
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default AccountData;
