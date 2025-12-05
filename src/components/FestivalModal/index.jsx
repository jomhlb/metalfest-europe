import React from "react";
import "./index.scss"; 

export default function FestivalModal({ festival, fermerModal }) {
  if (!festival) return null;

  return (
    <div className="modal_overlay" onClick={fermerModal}>
      <div className="modal_content" onClick={(e) => e.stopPropagation()}>
        <button className="modal_close" onClick={fermerModal}>
          ✕
        </button>

        <h2>{festival.title}</h2>
        <img src={festival.image} alt={festival.title} />
        <p>📍 {festival.lieu}</p>
        <p>📅 {festival.date}</p>

        {festival.tarifs && (
          <div className="modal_tarifs">
            <h4>🎟️ Tarifs</h4>
            {Object.entries(festival.tarifs).map(([pass, price]) => (
              <p key={pass}>
                {pass} : {price}
              </p>
            ))}
          </div>
        )}

        {festival.headliners && (
          <div className="modal_headliners">
            <h4>⭐ Têtes d’affiche</h4>
            <p>{festival.headliners.join(", ")}</p>
          </div>
        )}

        {festival.desc && <p className="modal_desc">{festival.desc}</p>}

        {festival.info && (
          <p className="modal_link">
            ➡
            <a href={festival.info} target="_blank" rel="noreferrer">
              Plus d'information
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
