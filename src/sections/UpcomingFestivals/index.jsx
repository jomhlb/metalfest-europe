import { useState } from "react";
import data from "../../data/data.json";
import "./index.scss";

export default function UpcomingFestivals() {
  const [selectedFestival, setSelectedFestival] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const visibleCards = 3;

  const next = () => {
    setAnimating(true);
    setStartIndex((prev) => (prev + visibleCards) % data.length);
  };

  const prev = () => {
    setAnimating(true);
    setStartIndex((prev) =>
      (prev - visibleCards + data.length) % data.length
    );
  };

  const handleAnimationEnd = () => setAnimating(false);

  const displayed = [];
  for (let i = 0; i < visibleCards; i++) {
    displayed.push(data[(startIndex + i) % data.length]);
  }

  return (
    <section id="upcomingfestivals">
      <div className="upcomingfestivals_title">
        <h2>A DECOUVRIR</h2>
      </div>

      <div className="carousel_container">
        <button className="carousel_btn left" onClick={prev}>
          «
        </button>

        <div className="upcomingfestivals_carousselle">
          <div
            className={`carousel_inner ${animating ? "slide" : ""}`}
            onAnimationEnd={handleAnimationEnd}
          >
            {displayed.map((festival) => (
              <div
                key={festival.id}
                className="festival_card"
                onClick={() => setSelectedFestival(festival)}
              >
                <img src={festival.image} alt={festival.title} />
                <h3>{festival.title}</h3>
                <p>{festival.lieu}</p>
              </div>
            ))}
          </div>
        </div>

        <button className="carousel_btn right" onClick={next}>
          »
        </button>
      </div>

      <div className="upcomingfestivals_text">
        <p>
          Le prochain festival approche à grands pas, et l’excitation commence
          déjà à se faire sentir. Ce site permet de retrouver toutes les
          informations utiles pour profiter pleinement de l’événement : le lieux, les dates, les tarifs, les têtes d'affiches et bien d'autres choses.
        </p>
      </div>

      {selectedFestival && (
        <div
          className="modal_overlay"
          onClick={() => setSelectedFestival(null)}
        >
          <div className="modal_content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal_close"
              onClick={() => setSelectedFestival(null)}
            >
              ✕
            </button>

            <h2>{selectedFestival.title}</h2>
            <img src={selectedFestival.image} alt={selectedFestival.title} />
            <p>📍 {selectedFestival.lieu}</p>
            <p>📅 {selectedFestival.date}</p>

            {selectedFestival.tarifs && (
              <div className="modal_tarifs">
                <h4>🎟️ Tarifs</h4>
                {Object.entries(selectedFestival.tarifs).map(([pass, price]) => (
                  <p key={pass}>
                    {pass} : {price}
                  </p>
                ))}
              </div>
            )}

            {selectedFestival.headliners && (
              <div className="modal_headliners">
                <h4>⭐ Têtes d’affiche</h4>
                <p>{selectedFestival.headliners.join(", ")}</p>
              </div>
            )}

            {selectedFestival.desc && (
              <p className="modal_desc">{selectedFestival.desc}</p>
            )}

            {selectedFestival.info && (
              <p className="modal_link">➡
                <a
                  href={selectedFestival.info}
                  target="_blank"
                  rel="noreferrer"
                >
                  Plus d'information
                </a>
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
