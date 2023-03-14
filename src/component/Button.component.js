import React, { Component } from "react";

function Button({ className, text, event, disabled }) {

  return (
    <button onClick={event} className={className} disabled={disabled}>
      {text}
    </button>
  );

}

export default Button;
