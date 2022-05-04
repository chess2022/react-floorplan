import React from "react";

export default function Bedroom(props) {
    const bedNum = [];
    for (var i = 0; i < bedNum; i++) {
      // note: we are adding a key prop here to allow react to uniquely identify each
      // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
      bedNum.push(<Bedroom key={i} />);
    }
  return (
    <div>
      <p>Bedroom {props.bedNum}</p>
    </div>
  );
}
