import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import state from "./state/state.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Body state={state} />
    </div>
  );
}

export default App;
