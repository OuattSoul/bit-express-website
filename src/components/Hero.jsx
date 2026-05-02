import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      {/* Geometric background pattern */}
      <div className="hero-bg">
        <div className="geo-circle c1" />
        <div className="geo-circle c2" />
        <div className="geo-line l1" />
        <div className="geo-line l2" />
      </div>

      <div className="container hero-inner">
        <div className="hero-text">
          <span className="hero-badge">
            <span className="badge-dot" />
            Disponible sur Android &amp; iOS
          </span>

          <h1 className="hero-title">
            Votre crypto,<br />
            <span className="title-highlight">sans frontières.</span>
          </h1>

          <p className="hero-sub">
            Envoyez, échangez et sécurisez vos actifs numériques depuis
            l'Afrique vers le monde entier. Portefeuille non-custodial,
            clés 100% sous votre contrôle.
          </p>

          <div className="hero-actions">
            <a href="#download" className="btn-primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M12 17V3M12 17l-4-4M12 17l4-4M3 21h18"/>
              </svg>
              Télécharger l'app
            </a>
            <a href="#how" className="btn-ghost">
              Comment ça marche →
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-val">2+</span>
              <span className="stat-label">Réseaux EVM</span>
            </div>
            <div className="stat-sep" />
            <div className="stat">
              <span className="stat-val">BIP44</span>
              <span className="stat-label">Standard sécurité</span>
            </div>
            <div className="stat-sep" />
            <div className="stat">
              <span className="stat-val">∞</span>
              <span className="stat-label">Tokens ERC-20</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <PhoneMockup />
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span>Découvrir</span>
        <div className="scroll-arrow">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M12 19l-5-5M12 19l5-5"/>
          </svg>
        </div>
      </div>
    </section>
  );
}

function PhoneMockup() {
  return (
    <div className="phone-wrap">
      <div className="phone">
        <div className="phone-notch" />
        <div className="phone-screen">
          <div className="screen-header">
            <span className="screen-greeting">Bonjour, Alex 👋</span>
            <div className="screen-avatar">A</div>
          </div>

          <div className="portfolio-card">
            <span className="portfolio-label">Valeur totale</span>
            <div className="portfolio-amount">
              <span className="currency">$</span>
              <span className="amount">4 218</span>
              <span className="cents">.37</span>
            </div>
            <span className="portfolio-change positive">▲ +3.2% aujourd'hui</span>
          </div>

          <div className="quick-actions">
            <div className="qa-btn">
              <div className="qa-icon send">↑</div>
              <span>Envoyer</span>
            </div>
            <div className="qa-btn">
              <div className="qa-icon recv">↓</div>
              <span>Recevoir</span>
            </div>
            <div className="qa-btn">
              <div className="qa-icon swap">⇄</div>
              <span>Échanger</span>
            </div>
          </div>

          <div className="asset-list">
            <div className="asset-row">
              <div className="asset-icon eth">Ξ</div>
              <div className="asset-info">
                <span className="asset-name">Ethereum</span>
                <span className="asset-network">ETH</span>
              </div>
              <div className="asset-val">
                <span>$2,640</span>
                <span className="pos">+1.8%</span>
              </div>
            </div>
            <div className="asset-row">
              <div className="asset-icon bnb">B</div>
              <div className="asset-info">
                <span className="asset-name">BNB Chain</span>
                <span className="asset-network">BNB</span>
              </div>
              <div className="asset-val">
                <span>$1,578</span>
                <span className="pos">+5.4%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="phone-home-bar" />
      </div>

      {/* Floating badges */}
      <div className="float-badge badge-top">
        <span className="fb-icon">🔒</span>
        <div>
          <div className="fb-title">Clés privées</div>
          <div className="fb-sub">Chiffrées localement</div>
        </div>
      </div>
      <div className="float-badge badge-bot">
        <span className="fb-icon">⚡</span>
        <div>
          <div className="fb-title">Transaction</div>
          <div className="fb-sub">Confirmée en ~12s</div>
        </div>
      </div>
    </div>
  );
}
