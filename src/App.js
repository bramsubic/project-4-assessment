import React, { Component } from "react";
import "./App.css";
import CircleSelector from "./components/CircleSelector/CircleSelector";
import Circles from "./components/Circles/Circles";

class App extends Component {
  state = {
    selectedCircle: 1,
  };
  handleClick = (circ) => {
    this.setState({ selectedCircle: circ});
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">UNIT 4 FINAL ASSESSMENT</header>
        <main>
          <CircleSelector
            handleClick={this.handleClick}
            select={this.state.selectedCircle}
          />
          <Circles select={this.state.selectedCircle} />
        </main>
      </div>
    );
  }
}

export default App;