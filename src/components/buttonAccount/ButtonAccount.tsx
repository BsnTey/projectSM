import "./buttonAccount.scss";

interface IAccountButtonProps {
  iconClass: string;
}

const AccountButton: React.FC<IAccountButtonProps> = ({ iconClass }) => {
  return (
    <button className="account-btn">
      <span className={iconClass}></span>
    </button>
  );
};

export default AccountButton;
