import React, { Component } from "react";
import Button from "./Button.component";

class Counter extends Component {


  render() {
    return (
      <>
        <Button
          className="btn btn-danger mx-3"
          text="-"
          disabled={this.props.value === 0}
          event={()=>{this.props.onDecrement(this.props.index)}}
        />
        <p className="my-2">{this.props.value}</p>
        <Button
          className="btn btn-primary mx-3"
          text="+"
          event={()=>{this.props.onIncrement(this.props.index)}}

        />
        <Button
          className="btn btn-danger mx-3"
          text="x"
          event={()=>{this.props.onDelete(this.props.index)}}
        />
      </>
    );
  }
}

export default Counter;
