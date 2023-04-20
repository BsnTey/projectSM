import "./actionButton.scss";

interface IActionButtonProps {
  text: string;
  className: string;
  dataType: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ActionButton: React.FC<IActionButtonProps> = ({ text, className, dataType, onClick }) => {
  return (
    <button className={className} data-type={dataType} onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};

export default ActionButton;
