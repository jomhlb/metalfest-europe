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

            <div className="map_text">
                <p>L’Europe est vaste, mais la musique relie tout. Cette carte rassemble les festivals metal européens qui, chacun à leur manière, façonnent des paysages sonores uniques et vibrants.</p>
            </div>
        </section>
    )
}