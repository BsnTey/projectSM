import { useSelector, useDispatch } from "react-redux";
import { isTokenSelected } from "../../store/accountSlice";
import { RootState } from "../../store/store";
import { selectAccount, delSelectAccount } from "../../store/accountSlice";

interface ICheckboxProps {
  className: string;
  token: string;
}

const Checkbox: React.FC<ICheckboxProps> = ({ className, token }) => {
  const dispatch = useDispatch();
  const isSelected = useSelector((state: RootState) => isTokenSelected(state, token));

  const handleCheckboxChange = (token: string, checked: boolean) => {
    checked ? dispatch(selectAccount(token)) : dispatch(delSelectAccount(token));
  };

  return <input className={className} type="checkbox" checked={isSelected} onChange={(event) => handleCheckboxChange(token, event.target.checked)} />;
};

export default Checkbox;
