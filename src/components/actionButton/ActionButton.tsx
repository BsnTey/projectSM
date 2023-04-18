import "./actionButton.scss";

interface IActionButtonProps {
  text: string;
  className: string;
  onClick: () => void;
}

const ActionButton: React.FC<IActionButtonProps> = ({ text, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};

export default ActionButton;
