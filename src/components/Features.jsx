import { useReveal } from '../hooks/useReveal';
import './Features.css';

const FEATURES = [
  {
    icon: '🔑',
    title: 'Clés 100% vôtres',
    desc: 'Seed phrase BIP39 de 12 mots. Votre portefeuille, vos règles — aucune entité tierce ne peut bloquer vos fonds.',
    accent: true,
    size: 'large',
  },
  {
    icon: '⛓',
    title: 'Multi-chaîne',
    desc: 'Ethereum et BNB Chain nativement. Support ERC-20 illimité.',
    size: 'small',
  },
  {
    icon: '📊',
    title: 'Marché en temps réel',
    desc: 'Prix, sparklines et OHLC actualisés toutes les 60 secondes via CoinGecko.',
    size: 'small',
  },
  {
    icon: '🪪',
    title: 'KYC simplifié',
    desc: 'Vérification d\'identité en quelques minutes. Passeport, CNI ou permis de conduire acceptés.',
    size: 'medium',
  },
  {
    icon: '🔐',
    title: 'Stockage chiffré',
    desc: 'Clé privée isolée dans FlutterSecureStorage — chiffrement AES côté OS, inaccessible aux autres apps.',
    size: 'medium',
  },
  {
    icon: '🌍',
    title: 'Conçu pour l\'Afrique',
    desc: 'Interface en français, zéro frais cachés, onboarding guidé même pour les débutants.',
    size: 'small',
  },
];

export default function Features() {
  const titleRef = useReveal();

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-header reveal" ref={titleRef}>
          <span className="section-tag">Fonctionnalités</span>
          <h2 className="section-title">Pourquoi BitExpress ?</h2>
          <p className="section-sub">
            Tout ce dont vous avez besoin pour gérer vos actifs numériques,
            sans compromis sur la sécurité.
          </p>
        </div>

        <div className="features-bento">
          {FEATURES.map((f, i) => (
            <FeatureCard key={i} {...f} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon, title, desc, accent, size, delay }) {
  const ref = useReveal(0.1);

  return (
    <div
      className={`feat-card feat-${size} ${accent ? 'feat-accent' : ''} reveal`}
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="feat-icon">{icon}</div>
      <h3 className="feat-title">{title}</h3>
      <p className="feat-desc">{desc}</p>
      {accent && (
        <div className="feat-glow" aria-hidden="true" />
      )}
    </div>
  );
}
