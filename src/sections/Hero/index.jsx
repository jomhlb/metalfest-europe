import "./index.scss";
import video from "../../assets/videos/background.mp4";

export default function Hero() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero">
      <div className="hero_text">
        <h1>Explore le metal à travers l’Europe</h1>
        <div className="hero_buttons">
          <button onClick={() => scrollToSection("upcomingfestivals")}>
            <span className="btn">DECOUVRE LES PROCHAINS FESTIVALS</span>
          </button>
          <button onClick={() => scrollToSection("map")}>
            <span className="btn">TROUVE TON FESTIVAL</span>
          </button>
        </div>
      </div>

      <div className="hero_video">
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
        ></video>
      </div>
    </section>
  );
}
