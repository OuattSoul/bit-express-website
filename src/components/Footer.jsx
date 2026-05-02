import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container foot-inner">
        <div className="foot-brand">
          <div className="foot-logo">
            <span className="logo-icon">₿</span>
            <span>Bit<strong>Express</strong></span>
          </div>
          <p className="foot-tagline">
            Le portefeuille crypto conçu pour l'Afrique.
          </p>
        </div>

        <div className="foot-links">
          <div className="foot-col">
            <span className="foot-col-title">Produit</span>
            <a href="#features">Fonctionnalités</a>
            <a href="#how">Comment ça marche</a>
            <a href="#security">Sécurité</a>
            <a href="#download">Télécharger</a>
          </div>
          <div className="foot-col">
            <span className="foot-col-title">Ressources</span>
            <a href="#">Documentation</a>
            <a href="#">Politique de confidentialité</a>
            <a href="#">Conditions d'utilisation</a>
          </div>
          <div className="foot-col">
            <span className="foot-col-title">Contact</span>
            <a href="mailto:halgoafrica@gmail.com">halgoafrica@gmail.com</a>
          </div>
        </div>
      </div>

      <div className="container foot-bottom">
        <span>© 2026 BitExpress — Tous droits réservés.</span>
        <span className="foot-tech">Flutter · Django · Web3</span>
      </div>
    </footer>
  );
}
