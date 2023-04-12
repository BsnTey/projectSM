import "./appAccounts.scss";

const AppAccounts = () => {
  return (
    <div className="app-accounts container">
      <h1 className="app-title app-accounts__title">Список аккаунтов</h1>
      <div className="accounts-section app-accounts__section">
        <div className="panel-tabs accounts-section__tabs">
          <nav className="panel-tabs__items">
            <a href="#tab_01" className="panel-tabs__item">
              Поиск
            </a>
            <a href="#tab_02" className="panel-tabs__item">
              Cookie
            </a>
          </nav>
          <div className="panel-tabs_body">
            <div id="tab_01" className="panel-tabs__block">
              Поисковая вкладка. Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aperiam repellendus? Deserunt doloribus culpa maxime iusto corrupti veniam,
              optio, ducimus incidunt obcaecati, nobis esse magni minus. Pariatur error consectetur ab?
            </div>
            <div id="tab_02" className="panel-tabs__block">
              Cookie вкладка. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit deserunt quia, rem, nesciunt consectetur a mollitia quod eaque iusto numquam aliquid
              reiciendis recusandae vitae quam quisquam cumque voluptatum porro praesentium?
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppAccounts;
