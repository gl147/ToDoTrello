import "./Body.scss";
import Taskzone from "./Taskzone/Taskzine";

let Body = (props) => {
  return (
    <div className="main-body">
      <Taskzone state={props.state} />
    </div>
  );
};

export default Body;
