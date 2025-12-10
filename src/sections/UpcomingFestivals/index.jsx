import { useState } from "react";
import data from "../../data/data.json";
import FestivalModal from "../../components/FestivalModal";
import FestivalCard from "../../components/FestivalCard";
import "./index.scss";

export default function UpcomingFestivals() {
  const [selectedFestival, setSelectedFestival] = useState(null);
  const [startIndex, setStartIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const visibleCards = 4;

  const next = () => {
    setAnimating(true);
    setStartIndex((prev) => (prev + visibleCards) % data.length);
  };

  const prev = () => {
    setAnimating(true);
    setStartIndex((prev) => (prev - visibleCards + data.length) % data.length);
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
        <button className="carousel_btn left" onClick={prev}>«</button>

        <div className="upcomingfestivals_carousselle">
          <div
            className={`carousel_inner ${animating ? "slide" : ""}`}
            onAnimationEnd={handleAnimationEnd}
          >
            {displayed.map((festival) => (
              <FestivalCard
                key={festival.id}
                festival={festival}
                onClick={setSelectedFestival}
              />
            ))}
          </div>
        </div>

        <button className="carousel_btn right" onClick={next}>»</button>
      </div>

      <div className="upcomingfestivals_text">
        <p>
          Le prochain festival approche et l’excitation monte déjà !
          Ici, tu trouveras tout ce qu’il faut pour repérer et explorer les festivals metal qui font vibrer l’Europe.
          Chaque événement est présenté avec l’essentiel : nom, dates, lieu, tarifs, line-up et une courte description pour saisir l’esprit du festival d’un coup d’œil.
          Que tu cherches une grande messe du metal ou un rassemblement plus underground, cette section te permet de naviguer facilement entre les pays et les scènes.
          Du nord glacial jusqu’aux terres du sud, chaque destination a son atmosphère, ses riffs et son énergie propre. Parcours la liste, découvre des festivals que tu connais… et d’autres que tu ne soupçonnais même pas.
          Prépare ton agenda, ton sac et tes oreilles : l’Europe n’attend que toi pour résonner encore plus fort !
        </p>
      </div>

      <FestivalModal 
        festival={selectedFestival} 
        fermerModal={() => setSelectedFestival(null)} 
      />
    </section>
  );
}
