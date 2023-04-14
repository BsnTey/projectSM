import "./appAccounts.scss";

const AppAccounts = () => {
  return (
    <div className="app-body container">
      <h1 className="app-title app-body__title">Список аккаунтов</h1>
      <div className="app-body__section">
        <nav className="app-menu">
          <a className="link-home app-menu__item">Личный кабинет</a>
          <a className="link-list app-menu__item">Список</a>
        </nav>

        <div className="search-body">
          <div className="filter-btns search-body__btns">
            <form className="filter-form filter-btns__input-form" action="">
              <label className="filter-form__label">
                <input className="filter-form__input" placeholder="Искать" type="text" name="search" />
              </label>
              <button className="filter-form__button" type="button" />
            </form>

            <button className="filter-btn filter-btns__down">
              <span>По убыванию</span>
            </button>

            <button className="filter-btn filter-btns__up">
              <span>По возрастанию</span>
            </button>

            <button className="filter-btn filter-btns__add">
              <span>Добавить</span>
            </button>

            <button className="filter-btn filter-btns__update">
              <span>Обновить все</span>
            </button>
          </div>

          <table className="accounts-table search-body__block-accounts">
            <tr className="accounts-table__title">
              <th>Token</th>
              <th>Обновлено</th>
              <th>Баланс</th>
              <th>Получить Cookie</th>
              <th>Обновить все</th>
            </tr>
            <tr className="accounts-table__account">
              <td>
                <label className="accounts-table__account-label">
                  <input className="accounts-table__account-checkbox" type="checkbox" name="select-account" value="1" />
                  7d625ba1-7640-441f-9ab7-e7dc6c24a085
                </label>
              </td>
              <td>09.04.2022 14:52</td>
              <td>1022</td>
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
            <tr className="accounts-table__account">
              <td>
                <label className="accounts-table__account-label">
                  <input className="accounts-table__account-checkbox" type="checkbox" name="select-account" value="1" />
                  7d625ba1-7640-441f-9ab7-e7dc6c24a085
                </label>
              </td>
              <td>09.04.2022 14:52</td>
              <td>1022</td>
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
            <tr className="accounts-table__account">
              <td>
                <label className="accounts-table__account-label">
                  <input className="accounts-table__account-checkbox" type="checkbox" name="select-account" value="1" />
                  7d625ba1-7640-441f-9ab7-e7dc6c24a085
                </label>
              </td>
              <td>09.04.2022 14:52</td>
              <td>1022</td>
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
          </table>
        </div>
      </div>
    </div>
  );
};

export default AppAccounts;
