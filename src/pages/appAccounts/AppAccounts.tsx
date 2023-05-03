import AccountFilter from "../../components/accountFilter/AccountFilter";
import AccountTable from "../../components/accountTable/AccountTable";
// import AppMenu from "../../components/appMenu/AppMenu";

import "./appAccounts.scss";

const AppAccounts = () => {
  return (
    <div className="list-body">
      <AccountFilter />
      <AccountTable />
    </div>
  );
};

export default AppAccounts;
