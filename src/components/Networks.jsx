import { useReveal } from '../hooks/useReveal';
import './Networks.css';

const NETWORKS = [
  { sym: 'Ξ', name: 'Ethereum', color: '#818CF8' },
  { sym: 'B', name: 'BNB Chain', color: '#F59E0B' },
  { sym: 'S', name: 'Solana', color: '#14F195' },
  { sym: '₮', name: 'USDT', color: '#26A17B' },
  { sym: 'X', name: 'XRP', color: '#23292F' },
];

const ASSETS = ['BTC', 'ETH', 'USDT', 'BNB', 'SOL', 'XRP', 'ADA', 'DOGE'];

export default function Networks() {
  const ref = useReveal();

  return (
    <section className="networks">
      <div className="container">
        <div className="networks-inner reveal" ref={ref}>
          <div className="net-left">
            <span className="section-tag">Écosystème</span>
            <h2 className="section-title">Réseaux supportés</h2>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginTop: '8px' }}>
              ETH &amp; BNB nativement, avec support ERC-20 complet.
            </p>
          </div>

          <div className="net-right">
            <div className="net-cards">
              {NETWORKS.map((n, i) => (
                <div key={i} className="net-card" style={{ '--nc': n.color }}>
                  <div className="net-icon">{n.sym}</div>
                  <span>{n.name}</span>
                </div>
              ))}
            </div>

            <div className="assets-row">
              <span className="assets-label">Actifs suivis :</span>
              <div className="asset-chips">
                {ASSETS.map((a, i) => (
                  <span key={i} className="chip">{a}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
