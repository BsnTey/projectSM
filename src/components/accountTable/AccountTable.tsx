import AccountData from "../accountData/AccountData";
import TableHeader from "../tableHeader/TableHeader";

import "./accountTable.scss";

const AccountTable = () => {
  const titleList = ["Token", "Обновлено", "Баланс", "Получить Cookie", "Обновить все"];
  return (
    <table className="accounts-table app-body__block-accounts">
      <TableHeader titleList={titleList} />
      <AccountData />
    </table>
  );
};

export default AccountTable;
