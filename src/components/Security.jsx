import { useReveal } from '../hooks/useReveal';
import './Security.css';

const CHECKS = [
  'Seed phrase jamais transmise au serveur',
  'Clé privée chiffrée (FlutterSecureStorage + AES)',
  'Aucun tracking ou analytics tiers',
  'Open source — audit communautaire possible',
  'JWT avec expiration courte + refresh token',
  'Hash SHA-256 des mots de passe côté client',
];

export default function Security() {
  const ref = useReveal();
  const rightRef = useReveal(0.1);

  return (
    <section className="security" id="security">
      <div className="container sec-inner">
        <div className="sec-left reveal" ref={ref}>
          <span className="section-tag">Sécurité</span>
          <h2 className="section-title">
            Votre argent ne devrait jamais dépendre de nous.
          </h2>
          <p className="sec-lead">
            BitExpress est un portefeuille <strong>non-custodial</strong>. Vos
            clés restent sur votre appareil. Nous n'avons aucun accès à vos fonds.
          </p>
          <div className="sec-badge">
            <span className="sec-badge-icon">🛡</span>
            <div>
              <div className="sec-badge-title">Portefeuille non-custodial</div>
              <div className="sec-badge-sub">Vous êtes la seule banque qui compte</div>
            </div>
          </div>
        </div>

        <div className="sec-right reveal" ref={rightRef}>
          <div className="checks-label">Ce que BitExpress garantit :</div>
          <ul className="checks">
            {CHECKS.map((c, i) => (
              <li key={i} className="check-item">
                <span className="check-icon">✓</span>
                <span>{c}</span>
              </li>
            ))}
          </ul>

          <div className="sec-architecture">
            <div className="arch-label">Architecture simplifiée</div>
            <div className="arch-diagram">
              <div className="arch-box device">
                <span>📱 Appareil</span>
                <small>Wallet • Clés privées</small>
              </div>
              <div className="arch-arrow">
                <span>↔ HTTPS</span>
              </div>
              <div className="arch-box server">
                <span>🖥 Serveur</span>
                <small>Auth • KYC uniquement</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
