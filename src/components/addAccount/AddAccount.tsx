import './addAccount.scss';

const AddAccount = () => {
  return (
    <div className="add-form-wrap">
      <div className="add-form">
        <div className="close-form"></div>
        <form className="add-form__form" action="">
          <label>
            <input type="text" />
          </label>
          <button className="add-form__btn">Добавить</button>
        </form>
      </div>
    </div>
  );
};

export default AddAccount;
