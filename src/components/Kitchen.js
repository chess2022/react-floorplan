import React from "react";
import Oven from "./Oven";
import Sink from "./Sink";

export default function Kitchen(props) {
  return (
    <div className="weather">
      <Oven name={props.img} />
      <Sink name={props.conditions} />
    </div>
  );
}
