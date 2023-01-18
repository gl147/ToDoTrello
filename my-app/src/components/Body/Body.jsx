import "./Body.scss";
import Taskzone from "./Taskzone/Taskzone";

let Body = ({ state }) => {
  return (
    <div className="main-body">
      <Taskzone state={state} />
    </div>
  );
};

export default Body;
