import React from "react";
import "./floorplan.css";
import Kitchen from "./Kitchen";
import LivingRoom from "./LivingRoom";
import Bath from "./Bath";
import Bedroom from "./Bedroom";

export default function Floorplan() {
  return (
    <div className="floorplan">
      <Bedroom id="bed1" />
      <Kitchen id="kitchen" />
      <Bath id="fbath" />
      <Bedroom id="bed2"/>
      <LivingRoom id="living" />
      <Bath id="hbath"/>
      <Bedroom id="bed3"/>
    </div>
  );
}
