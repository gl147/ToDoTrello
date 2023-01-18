import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";

function App(props) {
  return (
    <div className="App">
      <Header />
      <Body state={props.state} />
    </div>
  );
}

export default App;
