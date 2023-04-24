import { useState, useCallback } from "react";
import { selectAccounts } from "../../store/accountSlice";
import { useSelector } from "react-redux";
import { Portal } from "../portal/Portal";
import Cookie from "../cookie/Cookie";
import ActionButton from "../actionButton/ActionButton";
import "./accountData.scss";
import key from "../../img/key.svg";
import update from "../../img/update.svg";

const AccountData = () => {
  const accounts = useSelector(selectAccounts);
  const [openPortal, setOpenPortal] = useState(false);

  const onGetCookie = useCallback(() => {
    setOpenPortal(!openPortal);
  }, [openPortal]);

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
              <ActionButton iconSrc={key} className="account-btn" onClick={onGetCookie} />
            </td>
            <td>
              <ActionButton iconSrc={update} className="account-btn" />
            </td>
          </tr>
        );
      })}
      {openPortal && <Portal children={<Cookie />} onClose={onGetCookie} />}
    </>
  );
};

export default AccountData;
