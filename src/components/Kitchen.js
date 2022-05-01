import React from "react";
import Oven from "./Oven";
import Sink from "./Sink";

export default function Kitchen() {
  return (
    <div className="weather">
      <Sink />
      <Oven />
    </div>
  );
}
