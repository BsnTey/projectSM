import { selectAccounts } from "../../store/accountSlice";
import { useSelector } from "react-redux";

import AccountButton from "../buttonAccount/ButtonAccount";

const AccountData = () => {
  const accounts = useSelector(selectAccounts);

  return (
    <>
      {accounts?.map(({ token, dateCheck, amount }) => {
        return (
          <tr className="accounts-table__account">
            <td>
              <label className="accounts-table__account-label">
                <input className="accounts-table__account-checkbox" type="checkbox" name="select-account" value="1" />
                {token}
              </label>
            </td>
            <td>{dateCheck}</td>
            <td>{amount}</td>
            <td>
              <AccountButton iconClass="accounts-table__btn-key" />
            </td>
            <td>
              <AccountButton iconClass="accounts-table__btn-update" />
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default AccountData;
