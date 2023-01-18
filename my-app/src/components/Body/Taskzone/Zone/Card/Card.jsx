import "./Card.scss";

let Card = (props) => {
  const handleDeleteCard = () => {
    props.removeCard(props.id);
  };

  return (
    <div className="task-card">
      {props.text}
      <button className="del" onClick={handleDeleteCard}>
        del
      </button>
    </div>
  );
};

export default Card;
