import AccountFilter from "../accountFilter/AccountFilter";
import AccountTable from "../accountTable/AccountTable";

import "./appAccounts.scss";

const AppAccounts = () => {
  return (
    <div className="search-body">
      <AccountFilter />
      <AccountTable />
    </div>
  );
};

export default AppAccounts;
