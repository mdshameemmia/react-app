import "./App.css";

import React, { Component } from "react";
import Counter from "./component/Counter.component";
import Button from "./component/Button.component";

class App extends Component {
  state = {
    counters: [0],
  };

  increment = (index) => {
    const counters = [...this.state.counters]
    counters[index]++;
    this.setState({ counters });
  };

  decrement = (index) => {
    const counters = [...this.state.counters]
    counters[index]--;
    this.setState({counters});
  };

  addContent = () => {
    this.setState({
      counters: [...this.state.counters, 0],
    });
  };

  remove = (index)=>{
    console.log('test')
    const counters = [...this.state.counters];
    counters.splice(index,1);
    this.setState({counters})
   
  }


 

  render() {
    return (
      <>
        <div id="container">
          <Button
            text="Add"
            event={this.addContent}
            className="btn btn-primary m-3"
          />
            {this.state.counters.map((counter, index) => {
              return <div  key={index} className="d-flex my-1">
                <Counter onDelete={this.remove} value={this.state.counters[index]} onIncrement={this.increment} onDecrement={this.decrement} index={index} />
              </div>
            })
            
            }
        </div>
      </>
    );
  }
}

export default App;
