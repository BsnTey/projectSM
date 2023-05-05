import { selectAccounts } from "../../store/accountSlice";
import { useSelector } from "react-redux";
import { Modal } from "../modal/Modal";
import Cookie from "../cookie/Cookie";
import ActionButton from "../actionButton/ActionButton";
import key from "../../img/key.svg";
import update from "../../img/update.svg";
import ToggleContent from "../toggleContent/ToggleContent";
import "./accountData.scss";

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
              <ToggleContent
                toggle={(show) => <ActionButton iconSrc={key} className="account-btn" onClick={show} />}
                content={(hide) => <Modal children={<Cookie />} onClose={hide} />}
              />
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
