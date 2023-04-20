import AccountData from "../accountData/AccountData";
import TableHeader from "../tableHeader/TableHeader";

import "./accountTable.scss";

const AccountTable = () => {
  return (
    <table className="accounts-table app-body__block-accounts">
      <TableHeader />
      <AccountData />
    </table>
  );
};

export default AccountTable;
