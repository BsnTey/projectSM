import AccountFilter from "../../components/accountFilter/AccountFilter";
import AccountTable from "../../components/accountTable/AccountTable";
import AppMenu from "../../components/appMenu/AppMenu";

import "./appAccounts.scss";

const AppAccounts = () => {
  return (
    <div className="app-body container">
      <h1 className="app-title app-body__title">Список аккаунтов</h1>
      <div className="app-body__section">
        <AppMenu />
        <div className="list-body">
          <AccountFilter />
          <AccountTable />
        </div>
      </div>
    </div>
  );
};

export default AppAccounts;
