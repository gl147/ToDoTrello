import Zone from "./Zone/Zone";
import "./Taskzone.scss";

let Taskzone = (props) => {
  return (
    <div className="taskzone">
      {props.state.data.zonesList.map((zone) => (
        <Zone zoneName={zone.zoneName} cards={zone.cards} id={zone.zoneId} />
      ))}
    </div>
  );
};

export default Taskzone;
