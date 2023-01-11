import Zone from "./Zone/Zone";
import "./Taskzone.scss";

let Taskzone = (props) => {
  return (
    <div className="taskzone">
      {props.state.data.zonesList.map((zone) => (
        <Zone id={zone.zoneId} zoneName={zone.zoneName} cards={zone.cards} />
      ))}
    </div>
  );
};

export default Taskzone;
