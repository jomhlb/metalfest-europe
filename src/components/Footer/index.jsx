import "./index.scss";

export default function Footer() {
    return(
    <footer>
      <div className="footer-content">
        <p className='copyright'>© {new Date().getFullYear()} Développé Johanna Muhlberger. Tous droits réservés.</p>
      </div>
    </footer>
    )
}