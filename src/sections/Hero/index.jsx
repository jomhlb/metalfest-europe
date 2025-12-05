import "./index.scss";
import video from "../../assets/videos/backgroundtest.mp4"

export default function Hero() {
    return(
        <section id="hero">
            <div className="hero_text">
                <h1>Explore le Metal à Travers l’Europe</h1>
                    <div className="hero_buttons">
                        <button><a href="#upcomingfestivals" className="btn">DECOUVRE LES PROCHAINS FESTIVALS</a></button>
                        <button> <a href="#map" className="btn">TROUVE TON FESTIVAL</a></button>
                    </div>
            </div>

            <div className="hero_video">
                <video src={video}
                autoPlay
                muted
                loop
                playsInline
                ></video>
            </div>
        </section>
    )
}