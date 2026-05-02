import './Ticker.css';

const COINS = [
  { sym: 'BTC', price: '$63,540', change: '+2.1%', up: true },
  { sym: 'ETH', price: '$3,402', change: '+1.8%', up: true },
  { sym: 'BNB', price: '$586', change: '+5.4%', up: true },
  { sym: 'SOL', price: '$170', change: '-0.6%', up: false },
  { sym: 'USDT', price: '$1.00', change: '0.0%', up: true },
  { sym: 'XRP', price: '$0.52', change: '+3.2%', up: true },
  { sym: 'ADA', price: '$0.46', change: '-1.1%', up: false },
  { sym: 'DOGE', price: '$0.16', change: '+7.3%', up: true },
];

const items = [...COINS, ...COINS];

export default function Ticker() {
  return (
    <div className="ticker-wrap">
      <div className="ticker-label">LIVE</div>
      <div className="ticker-track">
        <div className="ticker-inner">
          {items.map((c, i) => (
            <div key={i} className="ticker-item">
              <span className="t-sym">{c.sym}</span>
              <span className="t-price">{c.price}</span>
              <span className={`t-change ${c.up ? 'up' : 'down'}`}>{c.change}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
