import "./tableHeader.scss";

interface ITableHeaderProps {
  titleList: string[];
}

const TableHeader: React.FC<ITableHeaderProps> = ({ titleList }) => {
  return (
    <tr>
      {titleList.map((title) => (
        <th className="accounts-table__title">{title}</th>
      ))}
    </tr>
  );
};

export default TableHeader;
