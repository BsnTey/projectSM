import { useSelector } from "react-redux";
import { selectTitles } from "../../store/accountSlice";
import "./tableHeader.scss";

const TableHeader = () => {
  const titles = useSelector(selectTitles);

  return (
    <tr>
      {titles.map((title) => (
        <th className="accounts-table__title">{title}</th>
      ))}
    </tr>
  );
};

export default TableHeader;
