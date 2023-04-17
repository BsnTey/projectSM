import "./addAccount.scss";

const AddAccount = () => {
  return (
    <div className="add-form-wrap">
      <div className="add-form">
        <div className="close-form"></div>
        <form className="add-form__form" action="">
          <div className="add-form__input-wrap">
            <input className="add-form__input" type="text" placeholder="Добавить в список" name="add-account" />
            <button className="add-form__btn-input">+ больше</button>
          </div>
          <button className="add-form__btn-add">Добавить</button>
        </form>
      </div>
    </div>
  );
};

export default AddAccount;
