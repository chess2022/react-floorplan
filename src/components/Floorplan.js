import React from "react";
import "./floorplan.css";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bath from "./Bath";
import Bedroom from "./Bedroom";

export default function Floorplan() {
  return (
    <div className="floorplan">
      <div id="bed1">Bedroom 1</div>
      <div id="kitchen">
        <div>
          <Kitchen />
        </div>
        <div>Kitchen</div>
      </div>
      <div id="fbath">Full Bath</div>
      <div id="bed2">Bedroom 2</div>
      <div id="living">Living Room</div>
      <div id="hbath">Half Bath</div>
      <div id="bed3">Bedroom 3</div>
    </div>
  );
}
