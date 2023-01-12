import "./Card.scss";

let Card = (props) => {
  return <div className="task-card">{props.text}</div>;
};

export default Card;
