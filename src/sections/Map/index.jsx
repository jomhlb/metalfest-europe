import "./index.scss";
import MapComponent from "../../components/MapComponent";

export default function Map() {
    return(
        <section id="map">
            <div className="map_title">
                <h2>CARTE</h2>
            </div>

            <div className="europe_map">
                <MapComponent />
            </div>
        </section>
    )
}