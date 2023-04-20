import { useSelector } from "react-redux";
import { titleSelector } from "../../store/accountSlice";
import "./tableHeader.scss";

const TableHeader = () => {
  let titles = useSelector(titleSelector);

  return (
    <tr>
      {titles.map((title) => (
        <th className="accounts-table__title">{title}</th>
      ))}
    </tr>
  );
};

export default TableHeader;
