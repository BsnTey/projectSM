import "./accountFilter.scss";

const AccountFilter = () => {
  return (
    <div className="filter-btns list-body__btns">
      <form className="filter-form filter-btns__input-form" action="">
        <label className="filter-form__label">
          <input className="filter-form__input" placeholder="Искать" type="text" name="search" />
        </label>
        <button className="filter-form__button" type="button" />
      </form>
      <div className="filter-btns__filter-btns-wrap">
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
    </div>
  );
};

export default AccountFilter;
