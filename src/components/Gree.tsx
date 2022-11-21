import React from "react";

interface Msg {
  contextText?: string;
}

const Gree = (props: Msg) => {
  return (
    <div className="">
      <div>give {props.contextText}</div>

      <div className="">
        <h1>first</h1>
        <input type="text" title="firstInput" />
      </div>

      <div className="">
        <h2>second</h2>
        <input type="text" title="secondInput" />
      </div>
    </div>
  );
};

export default Gree;
