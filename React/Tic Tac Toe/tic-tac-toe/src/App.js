import { useState } from "react";
import Cell from "./components/cell";

const App = () => {

  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""])
  const [go, setGo] = useState("circle")
  const [winningMessage, setWinningMessage] = useState(null)

  const message = "it is now " + go + "'s go"

  // console.log(cells);

  return (
    <div className="app">
      <div className="gameboard">
      {cells.map((cell, index) => 
      <Cell 
      key={index} 
      id={index} 
      cell={cell} 
      setCells={setCells}
      go={go}/>)}
      </div>
      <p>
        {message}
      </p>
    </div>
  );
}

export default App;
