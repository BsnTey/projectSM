import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

import "./accountData.scss";

const AccountData = () => {
  const accounts = useSelector((state: RootState) => state.accounts);

  return (
    <>
      {accounts.accounts?.map((account) => {
        return (
          <tr className="accounts-table__account">
            <td>
              <label className="accounts-table__account-label">
                <input className="accounts-table__account-checkbox" type="checkbox" name="select-account" value="1" />
                {account.token}
              </label>
            </td>
            <td>{account.dateCheck}</td>
            <td>{account.amount}</td>
            <td>
              <button className="account-btn">
                <span className="accounts-table__btn-key"></span>
              </button>
            </td>
            <td>
              <button className="account-btn">
                <span className="accounts-table__btn-update"></span>
              </button>
            </td>
          </tr>
        );
      })}

      {/* // <tr className="accounts-table__account">
      //   <td>
      //     <label className="accounts-table__account-label">
      //       <input className="accounts-table__account-checkbox" type="checkbox" name="select-account" value="1" />
      //       7d625ba1-7640-441f-9ab7-e7dc6c24a085
      //     </label>
      //   </td>
      //   <td>09.04.2022 14:52</td>
      //   <td>1022</td>
      //   <td>
      //     <button className="account-btn">
      //       <span className="accounts-table__btn-key"></span>
      //     </button>
      //   </td>
      //   <td>
      //     <button className="account-btn">
      //       <span className="accounts-table__btn-update"></span>
      //     </button>
      //   </td>
      // </tr>
      // <tr className="accounts-table__account">
      //   <td>
      //     <label className="accounts-table__account-label">
      //       <input className="accounts-table__account-checkbox" type="checkbox" name="select-account" value="1" />
      //       7d625ba1-7640-441f-9ab7-e7dc6c24a085
      //     </label>
      //   </td>
      //   <td>09.04.2022 14:52</td>
      //   <td>1022</td>
      //   <td>
      //     <button className="account-btn">
      //       <span className="accounts-table__btn-key"></span>
      //     </button>
      //   </td>
      //   <td>
      //     <button className="account-btn">
      //       <span className="accounts-table__btn-update"></span>
      //     </button>
      //   </td>
      // </tr> */}
    </>
  );
};

export default AccountData;
