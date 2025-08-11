import React from 'react'
import '../css/Dlearn.css';
import shieldIcon from '../assest/Vector.png';
import inner from '../assest/innershield.png';
import swapImage from '../assest/Rectangle.png';
import usd from '../assest/image.png';
import eth from '../assest/eth.png';
import flash from '../assest/flash.png';
import plus from '../assest/Traffic Economy.png';
import fire from '../assest/Fire Minimalistic.png';


function Dlearn() {
  return (
        <>
    <div className="swap-container">
      <header className="swap-header">
        <div className="logo">UNIDEX</div>
        <nav className="nav-links">
                 <a className="App-link" href="Swap.js" target="_blank" rel="noopener noreferrer">Swap</a>
                <a className="App-link" href="pool.js" target="_blank" rel="noopener noreferrer">Pool</a>
                <a className="App-link" href="Vote.js" target="_blank" rel="noopener noreferrer">Vote</a>
        </nav>
      </header>

      <main className="swap-main">
        <p className="subheading">Browse. Swap. Confirm.</p>
        <h1 className="heading">Swap Tokens</h1>
        <p className="description">
          Zero fee trades on 9+ million tokens across 14 chains. Get the best prices by tapping<br />
          into 130+ liquidity sources
        </p>
        <button className="start-btn">Start Trading</button>
      </main>
</div>

    <section className="trade-info-container">
      <div className="trade-left">
        <h1>Get unbeatable trade prices on Unidex.</h1>
        <ul className="feature-list">
          <li><div className="check-icon" />✅<span> Scans multiple sources to find the best possible trade rates</span></li>
          <li><div className="check-icon" />✅<span> Smart routing ensures maximum value across liquidity pools</span></li>
          <li><div className="check-icon" />✅<span> Protects against front-running and sandwich attacks</span></li>
          <li><div className="check-icon" />✅<span> Alerts you to slippage and potential price impact before you trade</span></li>
          <li><div className="check-icon" />✅<span> Optimized for smarter trading with safety and transparency in every swap</span></li>
        </ul>
      </div>

      <div className="trade-right">
        <p className="quote-expiry">Quote Expires in 20s</p>
        <div className="token-boxes">
          <div className="token-card">
            <img src={usd} alt="USDC" />
            <h3>253.63 USDC</h3>
            <p>$253.44</p>
          </div>
          <div className="token-card">
            <img src={eth} alt="ETH" />
            <h3>0.06 ETH</h3>
            <p>$253.44</p>
          </div>
        </div>

        <div className="trade-details">
          <div><strong>Liquidity Providers</strong><span>OxRFQ</span></div>
          <div><strong>Rate</strong><span>1 ETH = 1562.76 USDC ($1562.77)</span></div>
          <div><strong>Ethereum Fees</strong><span>$23</span></div>
        </div>
      </div>
    </section>

    <section className="mev-container">
      <div className="mev-left">
        <h1>MEV Protection</h1>
        <ul className="mev-list">
          <li><span className="check">✅</span> <span className="highlight">RFQ Private</span> Settlement</li>
          <li><span className="check">✅</span> <span className="highlight">No public mempool</span>-no MEV bots</li>
          <li><span className="check">✅</span> <span className="highlight">Enhanced protection with</span> Unidex Auto</li>
          <li><span className="check">✅</span> <span className="highlight">Alerts you to slippage</span>and potential price impact before you trade</li>
          <li><span className="check">✅</span> <span className="highlight">Optimized for smarter</span>trading with safety and transparency in every swap</li>
        </ul>
      </div>
      <div className="mev-right">
        <img src={shieldIcon} alt="Protection Shield" width="400px"/>
        <img src ={inner} alt="" width="300px"/>
        <div>
        </div>
        </div>
    </section>
    
    <div className="smart-routing-container">
      <div className="smart-routing-left">
        <img src={swapImage} alt="Smart Routing" className="swap-image" />
      </div>
      <div className="smart-routing-right">
        <h2 className="smart-title">Smart Routing</h2>
        <ul className="smart-list">
          <li><span className="check">✔</span> <span className="highlight">Unidex Source the market</span> for the best prices</li>
          <li><span className="check">✔</span> <span className="highlight">No public mempool</span> - no MEV bots</li>
          <li><span className="check">✔</span> <span className="highlight">Enhanced protection with Matcha Auto</span></li>
          <li><span className="check">✔</span> <span className="highlight">Alerts you to slippage</span> and potential price impact before you trade</li>
          <li><span className="check">✔</span> <span className="highlight">Optimized for smarter</span> trading with safety and transparency in every swap</li>
        </ul>
      </div>
    </div>
  <div classname ="curve">
    <section className="learn-section">
      <h3 className="trade-mode">New Trade Mode :</h3>
      <h1 className="main-title">Swap Tokens</h1>
      <p className="subtitle">Great Prices, with more speed and less worry</p>
      
      <div className="features-container">
        <div className="feature-item">
          <div className="circle-icon">
            <img src={flash} alt =""></img>
          </div>
          <p>Faster trade Confirmation</p>
        </div>
        <div className="feature-item">
          <div className="circle-icon">
          <img src={plus} alt =""></img>
          </div>
          <p>Reduce failed rate by 75 %</p>
        </div>
        <div className="feature-item">
          <div className="circle-icon">
            <img src={fire} alt =""></img>
          </div>
          <p>Matches handles Gases</p>
        </div>
      </div>
    </section>
    </div>





 

</>
  );
};

export default Dlearn;
