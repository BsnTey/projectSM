import AccountData from "../accountData/AccountData";

import "./accountTable.scss";

const AccountTable = () => {
  return (
    <table className="accounts-table app-body__block-accounts">
      <tr className="accounts-table__title">
        <th>Token</th>
        <th>Обновлено</th>
        <th>Баланс</th>
        <th>Получить Cookie</th>
        <th>Обновить все</th>
      </tr>
      <AccountData />
    </table>
  );
};

export default AccountTable;
