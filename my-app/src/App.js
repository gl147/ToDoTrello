import "./App.css";
import { useState, useRef } from "react";

function App(props) {
  let [state, setState] = useState(props.state);
  const [addInProccess, setAddInProcess] = useState(false);
  const [textContent, setTextContent] = useState("");
  const currentZone = useRef();
  const currentCard = useRef();
  const dragOverCard = useRef();

  // value of text area depends on state changes

  const handleTextAreaChange = (e, params) => {
    setTextContent(e.target.value);
  };

  // text area apears and disapears

  const getStyle = (zoneI) => {
    if (zoneI === currentZone.current) {
      return "textareaon";
    } else {
      return "textareaoff";
    }
  };

  // ADD, Edit, remove

  // adding new cards
  const handleClick = (e, zoneI) => {
    currentZone.current = zoneI;
    if (!addInProccess === true) {
      setAddInProcess(true);
    } else {
      const newState = JSON.parse(JSON.stringify(state));
      newState.zonesList[zoneI].cards.push({
        cardId: Math.random(),
        text: textContent,
      });
      setState(newState);
      setTextContent("");
      setAddInProcess(false);
    }
  };

  //removing cards

  const handleDeleteButton = (params) => {
    currentCard.current = params;
    setState((oldState) => {
      let newState = JSON.parse(JSON.stringify(oldState));
      newState.zonesList[currentCard.current.zoneI].cards = newState.zonesList[
        currentCard.current.zoneI
      ].cards.filter((card) => card.cardId !== currentCard.current.card.cardId);
      return newState;
    });
  };

  //   edit card

  const handleOnCardClick = (e, params) => {
    const zoneI = params.zoneI;
    const cardI = params.cardI;
    let text = state.zonesList[zoneI].cards[cardI].text;

    e.target.contentEditable = true;
    e.target.focus();

    e.target.addEventListener("blur", () => {
      const newText = e.target.innerText;
      if (text !== newText) {
        state.zonesList[zoneI].cards[cardI].text = newText;
      }
    });
  };

  ///DND implementation

  const [isDragged, setIsDragged] = useState(false);

  const handleDragStart = (e, params) => {
    currentCard.current = params;
    dragOverCard.current = e.target;
    dragOverCard.current.addEventListener("dragend", handleDragEnd);
    setTimeout(() => setIsDragged(true), 0);
    setTimeout(() => ((e.target.style.opacity = 1), 0));
  };

  const handleDragEnter = (e, params) => {
    const currentItem = currentCard.current;
    if (e.target !== dragOverCard.current) {
      console.log("not same");
      setState((oldData) => {
        let newData = JSON.parse(JSON.stringify(oldData));
        console.log(newData);
        newData.zonesList[params.zoneI].cards.splice(
          params.cardI,
          0,
          newData.zonesList[currentItem.zoneI].cards.splice(
            currentItem.cardI,
            1
          )[0]
        );
        return newData;
      });
      currentCard.current = params;
    }
  };

  const handleDragEnd = (e, params) => {
    console.log("dragended");
    dragOverCard.current.removeEventListener("dragend", handleDragEnd);
    setIsDragged(false);
    dragOverCard.current = null;
    currentCard.current = null;
    e.target.style.opacity = 1;
  };

  const getCardStyle = (params) => {
    if (
      currentCard.current.zoneI === params.zoneI &&
      currentCard.current.cardI === params.cardI
    ) {
      return isDragged ? "card-wrapper-dragged" : "card-wrapper";
    } else {
      return "card-wrapper";
    }
  };

  return (
    <div className="App">
      {state.zonesList.map((zone, zoneI) => (
        <div className="zone" key={zoneI}>
          <div className="zonetitle">{zone.zoneName}</div>
          {zone.cards.map((card, cardI) => (
            <div
              className={
                isDragged ? getCardStyle({ zoneI, cardI }) : "card-wrapper"
              }
              key={cardI}
              draggable
              onDragStart={(e) => handleDragStart(e, { zoneI, cardI })}
              onDragEnter={(e) => handleDragEnter(e, { zoneI, cardI })}
            >
              <div
                className="card"
                onDoubleClick={(e) => handleOnCardClick(e, { zoneI, cardI })}
              >
                {card.text}
              </div>
              <div
                className="delete-icon"
                onClick={(e) => handleDeleteButton({ zoneI, cardI, card })}
              >
                x
              </div>
            </div>
          ))}
          <div className={addInProccess ? getStyle(zoneI) : "textareaoff"}>
            <textarea
              name="lol"
              id=""
              cols="auto"
              rows="auto"
              value={textContent}
              onChange={(e) => handleTextAreaChange(e, zoneI)}
            ></textarea>
          </div>
          <div className="add-button" onClick={(e) => handleClick(e, zoneI)}>
            Add card
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
