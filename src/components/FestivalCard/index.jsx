import React from "react";
import "./index.scss"; 

export default function FestivalCard({ festival, onClick }) {
  return (
    <div className="festival_card" onClick={() => onClick(festival)}>
      <img src={festival.image} alt={festival.title} />
      <h3>{festival.title}</h3>
      <p>{festival.lieu}</p>
    </div>
  );
}