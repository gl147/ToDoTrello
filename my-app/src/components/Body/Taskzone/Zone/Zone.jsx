import Card from "./Card/Card";
import "./Zone.scss";

let Zone = (props) => {
  console.log(props);
  return (
    <div className="task">
      <div className="task-header">
        <div className="task-name">{props.zoneName}</div>
        <div className="task-menu">...</div>
      </div>
      <div className="task-body">
        {props.cards.map((card) => (
          <Card text={card.text} />
        ))}
      </div>
      <div className="task-footer">
        <div className="add-card"> + Add card</div>
        <div className="task-footer-menu">...</div>
      </div>
    </div>
  );
};

export default Zone;
