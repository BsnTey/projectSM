import { useTranslation } from "react-i18next";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { titleSelector } from "../../store/accountSlice";
import "./tableHeader.scss";

const TableHeader = () => {
  const { t } = useTranslation();
  let titles = useSelector(titleSelector);
  titles = useMemo(() => [...titles, t("getCookie"), t("update")], [titles, t]);

  return (
    <tr>
      {titles.map((title) => (
        <th className="accounts-table__title">{t(title)}</th>
      ))}
    </tr>
  );
};

export default TableHeader;
