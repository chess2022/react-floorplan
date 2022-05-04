import React from "react";
import Oven from "./Oven";
import Sink from "./Sink";

export default function Kitchen() {
  return (
    <>
      <div className="appliances">
        <div className="sink">
          <Sink />
        </div>
        <div className="oven">
          <Oven />
        </div>
      </div>
    </>
  );
}
