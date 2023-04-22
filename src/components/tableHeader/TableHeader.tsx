import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { titleSelector } from "../../store/accountSlice";
import "./tableHeader.scss";

const TableHeader = () => {
  const { t, i18n } = useTranslation();
  let titles = useSelector(titleSelector);

  return (
    <tr>
      {titles.map((title) => (
        <th className="accounts-table__title">{t(title)}</th>
      ))}
    </tr>
  );
};

export default TableHeader;
