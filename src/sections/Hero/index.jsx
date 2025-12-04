import "./index.scss";
import video from "../../assets/videos/background.mp4"

export default function Hero() {
    return(
        <section id="hero">
            <div className="hero_text">
                <h1>Le territoire caché de l’Europe : les festivals de métal</h1>
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