import "./addAccount.scss";

interface IAddAccountProps {
  // nonActive: boolean;
  // setActive: (arg: boolean) => void;
}

const AddAccount: React.FC<IAddAccountProps> = () => {
  return (
    <form className="add-form__form" action="">
      <h2 className="modal-title add-form__title">Внесите новые аккаунты</h2>
      <div className="add-form__input-wrap">
        <div className="add-form__main-input-wrap">
          <p className="add-form__input-title">Номер аккаунта</p>
          <input className="add-form__input" type="text" placeholder="Добавить в список" name="add-account" />
        </div>
        <button className="add-form__btn-input">+ больше</button>
      </div>
      <button className="add-form__btn-add">Добавить</button>
    </form>
  );
};

export default AddAccount;
