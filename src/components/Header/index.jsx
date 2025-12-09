import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./index.scss";

import logo from "../../assets/images/logo.webp";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLinkClick = (e, hash) => {
        e.preventDefault();
        setMenuOpen(false);

        if(location.pathname === "/") {
            const target = document.querySelector(hash);
            if(target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        } else {
            navigate("/" + hash);
        }
    };

    return(
        <nav className={`header ${menuOpen ? "open" : ""}`}>
            <div
                className="header_burger"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <ul className={`header_menu_mobile ${menuOpen ? "active" : ""}`}>
                <li>
                <a href="#hero" onClick={(e) => handleLinkClick(e, "#hero")}>
                    ACCUEIL
                </a>
                </li>
                <li>
                <a href="#upcomingfestivals" onClick={(e) => handleLinkClick(e, "#upcomingfestivals")}>
                    PROCHAINS FESTIVALS
                </a>
                </li>
                <li>
                <a href="#bycountry" onClick={(e) => handleLinkClick(e, "#bycountry")}>
                    PAR PAYS
                </a>
                </li>
                <li>
                <a href="#map" onClick={(e) => handleLinkClick(e, "#map")}>
                    CARTE
                </a>
                </li>
            </ul>

            <ul className={`header_links_left ${menuOpen ? "active" : ""}`}>
                <li>
                    <a href="#hero" onClick={(e) => handleLinkClick(e, "#hero")}>
                        ACCUEIL
                    </a>
                </li>
                <li>
                    <a href="#upcomingfestivals" onClick={(e) => handleLinkClick(e, "#upcomingfestivals")}>
                        PROCHAINS FESTIVALS
                    </a>
                </li>
            </ul>

            <div className="header_logo">
                <img src={logo} alt="Logo MetalFest Europe" />
            </div>

            <ul className={`header_links_right ${menuOpen ? "active" : ""}`}>
                <li>
                    <a href="#bycountry" onClick={(e) => handleLinkClick(e, "#bycountry")}>
                        PAR PAYS
                    </a>
                </li>
                <li>
                    <a href="#map" onClick={(e) => handleLinkClick(e, "#map")}>
                        CARTE
                    </a>
                </li>
            </ul>
        </nav>
    )
}