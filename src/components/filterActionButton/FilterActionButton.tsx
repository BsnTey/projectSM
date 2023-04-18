import { sortAccountList } from "../../store/accountSlice";
import { useDispatch } from "react-redux";

import "./filterActionButton.scss";

interface IFilterActionButtonProps {
  text: string;
  iconClass: string;
  TypeBtn: string;
}

const FilterActionButton: React.FC<IFilterActionButtonProps> = ({ text, iconClass, TypeBtn }) => {
  const dispatch = useDispatch();

  const handleSortClick = () => {
    dispatch(sortAccountList(TypeBtn));
  };

  return (
    <button className={`filter-btn ${iconClass}`} onClick={handleSortClick}>
      <span>{text}</span>
    </button>
  );
};

export default FilterActionButton;
