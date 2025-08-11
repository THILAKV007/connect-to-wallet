import React from 'react'
import '../css/Dark.css';
import crp from '../assest/cryto.jpeg';
import apple from '../assest/apple.jpeg';
import ball from '../assest/ball.jpeg';
import carrot from '../assest/carrot.jpeg';
import dove from '../assest/dove.jpeg';
import chart from '../assest/graph.jpeg';

function Dark() {
  return (
       <>
        
  <header className="header">
    <div className="logo">UNIDEX</div>
    <nav className="nav">
       <a className="App-link" href="Feature.js" target="_blank" rel="noopener noreferrer">Features </a>
        <a className="App-link" href="Company.js" target="_blank" rel="noopener noreferrer">Company</a>
     <a className="App-link" href="Blog.js" target="_blank" rel="noopener noreferrer">Blog </a>
        <a className="App-link" href="Unidex.js" target="_blank" rel="noopener noreferrer">Light</a>
    </nav>
    <div className="header-buttons">
      <button className="create">Create Wallet</button>
      <button className="wallet">Connect to Wallet</button>
      <button className="dot">⋯</button>
    </div>
  </header>

  <main className="main-content">
    <div className="left-content">
      <h1><span>Trade</span> with confidence on the most secure DEX</h1>
      <p>Experience lightning-fast trades, minimal fees, and maximum security on our next-generation decentralized exchange platform</p>
    </div>
    <div className="eclipse-background"></div>
  <div className="eclipse-outline">
    {/* <img src="/image/Group 48095694.svg" alt="" srcset=""> */}

    <main className="swap-container">
    <div className="swap-box">
      <div className="swap-header">
        <h2>Swap</h2>
        <button className="settings">⚙️</button>
      </div>

      <div className="swap-section">
        <div className="news">
        <label>From</label>
        <div className="input-row">
          <input type="number" placeholder="0" />
          <span className="token-select">ETH ⬇️</span>
        </div>
        <small>Balance: 0.00</small>
        </div>
      <center><button className="switch-icon"><span className="token-highlight">⇅</span></button></center>
        <div className="news">
        <label>To</label>
        <div className="input-row">
          <input type="number" placeholder="0" />
          <span className="token-select">BNB ⬇️</span>
        </div>
        <small>Balance: 0.00</small>
        </div>
      </div>
      <div className="slippage">Slippage Tolerance</div>
      <button className="swap-button">Swap Now</button>
    </div>
    </main>
    </div>
  </main>
<section className="why-unidex">
  <div className="section-header">
    <h2>Why<span>UNIDEX ?</span></h2>
    <p>The Power of True Decentralization</p>
  </div>

 <div className="features-grid">
    <div className="feature-card">
      <div className="icon-circle">
        <h3>NonCustodial</h3></div>
      <p>Your crypto stays in your wallet — always. Our non-custodial design ensures that you have complete control over your funds, with no third-party access or risk of centralized failure.</p>
    </div>
    <div className="feature-card">
      <div className="icon-circle">
      <h3>DeepLiquidity</h3></div>
      <p>Your crypto stays in your wallet — always. Our non-custodial design ensures that you have complete control over your funds, with no third-party access or risk of centralized failure.</p>
    </div>
    <div className="feature-card">
      <div className="icon-circle">
      <h3>UltraFastSwaps</h3></div>
      <p>Your crypto stays in your wallet — always. Our non-custodial design ensures that you have complete control over your funds, with no third-party access or risk of centralized failure.</p>
    </div>
    <div className="feature-card">
      <div className="icon-circle">
      <h3>Secure&Audited</h3></div>
      <p>Your crypto stays in your wallet — always. Our non-custodial design ensures that you have complete control over your funds, with no third-party access or risk of centralized failure.</p>
    </div>
</div>
 
</section>
<div className="container">
    <h2 className="heading">Popular <span className="token-highlight">Token</span></h2>
    <p className="subheading">The Power of True Decentralization</p>
<div className="sownd">
    <div className="main-card">
      <img src={crp} alt="" height="40px" width="40px"/>
      <h3>Bedrock</h3>
      <p className="symbol">Be</p>
      <h2 className="price">$9209.00</h2>
      <p className="growth">8.0% <span>Last 24 Hours</span></p>
       <img src ={chart} alt=""/>
</div> 
  <div className="filter-buttons">
      <button className="active">All</button>
      <button className="nul">Matic</button>
      <button className="nul">Solana</button>
      <button className="nul">Matic</button>
      <button className="nul">Solana</button>
      <button className="nul">Matic</button>
    <div className="cards-grid">
      <div className="card"><img src={crp} alt="" height="40px" width="40px"/><h4>Bedrock</h4><p className="symbol">Be</p><p className="price">$9209.00</p><p className="percent">8.0%</p></div>
      <div className="card"><img src={crp} alt="" height="40px" width="40px"/><h4>Bedrock</h4><p className="symbol">Be</p><p className="price">$9209.00</p><p className="percent">8.0%</p></div>
      <div className="card"><img src={crp} alt="" height="40px" width="40px"/><h4>Bedrock</h4><p className="symbol">Be</p><p className="price">$9209.00</p><p className="percent">8.0%</p></div>
      <div className="card"><img src={crp} alt="" height="40px" width="40px"/><h4>Bedrock</h4><p className="symbol">Be</p><p className="price">$9209.00</p><p className="percent">8.0%</p></div>
      <div className="card"><img src={crp} alt="" height="40px" width="40px"/><h4>Bedrock</h4><p className="symbol">Be</p><p className="price">$9209.00</p><p className="percent">8.0%</p></div>
      <div className="card"><img src={crp} alt="" height="40px" width="40px"/><h4>Bedrock</h4><p className="symbol">Be</p><p className="price">$9209.00</p><p className="percent">8.0%</p></div>
      <div className="card"><img src={crp} alt="" height="40px" width="40px"/><h4>Bedrock</h4><p className="symbol">Be</p><p className="price">$9209.00</p><p className="percent">8.0%</p></div>
      <div className="card"><img src={crp} alt="" height="40px" width="40px"/><h4>Bedrock</h4><p className="symbol">Be</p><p className="price">$9209.00</p><p className="percent">8.0%</p></div>
    </div>
    </div>
</div>
</div>

 
  <section className="blog-section">
    <h2>Blogs <span className="highlight">UNIDEX ?</span></h2>
    <p className="subtitle">The Power of True Decentralization</p>

    <div className="blog-container">
     
      <div className="blog-card">
       <img src={apple} alt=""/>
        <h3>Swap on Solana</h3>
        <p>The Power of True Decentralization the Dummy Content on the visionary crypto and documentation</p>
      </div>

   
      <div className="blog-card">
        <img src ={ball} alt=""/>
        <h3>Swap on Solana</h3>
        <p>The Power of True Decentralization the Dummy Content on the visionary crypto and documentation</p>
      </div>

   
      <div className="blog-card">
         <img src ={carrot} alt=""/>
        <h3>Swap on Solana</h3>
        <p>The Power of True Decentralization the Dummy Content on the visionary crypto and documentation</p>
      </div>

      <div className="blog-card">
        <img src ={dove} alt=""/>
        <h3>Swap on Solana</h3>
        <p>The Power of True Decentralization the Dummy Content on the visionary crypto and documentation</p>
      </div>
     <div className="blog-card">
        <img src={apple} alt=""/>
        <h3>Swap on Solana</h3>
        <p>The Power of True Decentralization the Dummy Content on the visionary crypto and documentation</p>
      </div>
      <div className="blog-card">
        <img src ={ball} alt=""/>
        <h3>Swap on Solana</h3>
        <p>The Power of True Decentralization the Dummy Content on the visionary crypto and documentation</p>
      </div>
      <div className="blog-card">
        <img src ={carrot} alt=""/>
        <h3>Swap on Solana</h3>
        <p>The Power of True Decentralization the Dummy Content on the visionary crypto and documentation</p>
      </div>
      <div className="blog-card">
         <img src ={dove} alt=""/>
        <h3>Swap on Solana</h3>
        <p>The Power of True Decentralization the Dummy Content on the visionary crypto and documentation</p>
      </div>
 
    </div>
  </section>
<div className="cta">
      <center><h2>Ready to Start Trading</h2></center>
      <p>Your crypto stays in your wallet — always. Our non-custodial design ensures that you have complete control over your funds, with no third-party access or risk of centralized failure.</p>
      <div className="buttons">
        <center><button>Launch App</button>Launch App</center>
      </div>
    </div>

    <footer>
      <div className="logo">UNIDEX</div>
      <div className="footer-links">
        <div>
          <h4>Learn</h4>
          <ul>
            <li>Swap</li>
            <li>Pool</li>
            <li>Vote</li>
          </ul>
        </div>
        <div>
          <h4>Support</h4>
          <ul>
            <li>Swap</li>
            <li>Pool</li>
            <li>Vote</li>
          </ul>
        </div>
        <div>
          <h4>Legal</h4>
          <ul>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
      </div>
    </footer>
</>
  );
};

export default Dark;
