import { useState } from "react";
import data from "../../data/data.json";
import FestivalModal from "../../components/FestivalModal";
import FestivalCard from "../../components/FestivalCard";

import "./index.scss";

export default function ByCountry() {
  const [paysFiltre, setPaysFiltre] = useState("Tous");
  const [selectedFestival, setSelectedFestival] = useState(null);
  const [page, setPage] = useState(1);
  const festivalsParPage = 10;

  const paysUniques = ["Tous", ...new Set(data.map(f => f.lieu.split(" - ")[1]))];

  const festivalsFiltres = paysFiltre === "Tous"
    ? data
    : data.filter(f => f.lieu.split(" - ")[1] === paysFiltre);

  const startIndex = (page - 1) * festivalsParPage;
  const endIndex = startIndex + festivalsParPage;
  const festivalsAffiches = festivalsFiltres.slice(startIndex, endIndex);

  const totalPages = Math.ceil(festivalsFiltres.length / festivalsParPage)

  return (
    <section id="bycountry">
      <div className="bycountry_title">
        <h2>DANS TOUTE L'EUROPE</h2>
      </div>

      <div className="bycountry_filter_btn">
        {paysUniques.map(pays => (
          <button
            key={pays}
            onClick={() => {setPaysFiltre(pays); setPage(1)}}
            className={paysFiltre === pays ? "active" : ""}
          >
            {pays}
          </button>
        ))}
      </div>

      <div className="bycountry_filter_bloc">
        {festivalsAffiches.map(festival => (
          <FestivalCard
            key={festival.id}
            festival={festival}
            onClick={setSelectedFestival}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="pagination">
            <button disabled={page === 1}
            onClick={() => setPage(page - 1)}
            >
                «
            </button>
            <span> {page} / {totalPages} </span>

            <button disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
            >
                »
            </button>
        </div>
      )}

      <FestivalModal
        festival={selectedFestival}
        fermerModal={() => setSelectedFestival(null)}
      />
    </section>
  );
}
