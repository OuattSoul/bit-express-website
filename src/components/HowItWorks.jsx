import { useReveal } from '../hooks/useReveal';
import './HowItWorks.css';

const STEPS = [
  {
    n: '01',
    title: 'Créez votre compte',
    desc: 'Inscrivez-vous avec votre email. Vérification OTP en 30 secondes. Aucune carte bancaire requise.',
    detail: 'Email • OTP • JWT sécurisé',
  },
  {
    n: '02',
    title: 'Générez votre wallet',
    desc: 'BitExpress génère 12 mots BIP39 directement sur votre appareil. Sauvegardez-les hors ligne — c\'est votre seule sauvegarde.',
    detail: 'BIP39 • BIP44 • Compatible MetaMask',
  },
  {
    n: '03',
    title: 'Envoyez et tradez',
    desc: 'Envoyez de l\'ETH ou du BNB en quelques secondes. Consultez vos soldes, le marché et gérez vos tokens ERC-20.',
    detail: 'ETH • BNB • ERC-20 illimité',
  },
];

export default function HowItWorks() {
  const titleRef = useReveal();

  return (
    <section className="how" id="how">
      <div className="how-pattern" aria-hidden="true">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`pat-cell cell-${i}`} />
        ))}
      </div>

      <div className="container">
        <div className="section-header reveal" ref={titleRef}>
          <span className="section-tag">Processus</span>
          <h2 className="section-title">Démarrer en 3 étapes</h2>
        </div>

        <div className="steps-grid">
          {STEPS.map((s, i) => (
            <Step key={i} {...s} delay={i * 120} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Step({ n, title, desc, detail, delay }) {
  const ref = useReveal(0.1);
  return (
    <div className="step reveal" ref={ref} style={{ transitionDelay: `${delay}ms` }}>
      <div className="step-number">{n}</div>
      <div className="step-connector" aria-hidden="true" />
      <div className="step-body">
        <h3 className="step-title">{title}</h3>
        <p className="step-desc">{desc}</p>
        <div className="step-detail">{detail}</div>
      </div>
    </div>
  );
}
