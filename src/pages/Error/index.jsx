import "./index.scss";

export default function Error(){
    const handleLinkClick = (e) => {
    e.preventDefault();

    const heroSection = document.querySelector("#hero");
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/";
    }
  };
  
    return (
    <div className="error-page">
      <h1>404</h1>
      <p className="error">Oups ! La page que vous recherchez n'existe pas.</p>
      <a href="#hero" onClick={handleLinkClick}>
        Retourner à la page d'accueil
      </a>
    </div>
    );
}