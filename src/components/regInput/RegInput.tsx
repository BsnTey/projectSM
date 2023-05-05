// import { useTranslation } from "react-i18next";
import "./regInput.scss";

interface IRegInputProps {
  title: string;
  placeholder: string;
  type: string;
}

const RegInput: React.FC<IRegInputProps> = ({ title, placeholder, type }) => {
  return (
    <div className="reg-input">
      <p className="reg-title-input reg-input__title">{title}</p>
      <input className="reg-input__input" type={type} placeholder={placeholder || ""} />
    </div>
  );
};

export default RegInput;
