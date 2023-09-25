import React from "react-dom";
import "./styles.css";
import Mes from "./component/component1/mesho";
import Sub from "./component/component2/subnav";
import Body from "./component/component3/body";
import Card from "./component/component4/card";
import Foot from "./component/component5/foot";

function App() {
  return (
    <div className="App">
      <Mes />
      <Sub />
      <Body />
      <Card />
      <Foot />
    </div>
  );
}
export default App;
