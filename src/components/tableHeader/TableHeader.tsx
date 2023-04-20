import { useSelector } from "react-redux";
import { titleSelector } from "../../store/accountSlice";
import "./tableHeader.scss";

const translationTitles = (titles: string[]) => {
  const translation: Record<string, string> = {
    token: "Токен",
    dateCheck: "Обновлено",
    amount: "Баланс",
  };
  const newTitles = titles.map((title) => translation[title] ?? title);
  newTitles.push("Получить Cookie", "Обновить все");

  return newTitles;
};

const TableHeader = () => {
  let titles = useSelector(titleSelector);
  titles = translationTitles(titles);

  return (
    <tr>
      {titles.map((title) => (
        <th className="accounts-table__title">{title}</th>
      ))}
    </tr>
  );
};

export default TableHeader;
