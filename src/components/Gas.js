import React from 'react'
import '../css/Gas.css';
import a from '../assest/line1.png';
import b from '../assest/line2.png';
import c from '../assest/line3.png';
import d from '../assest/line4.png';
import e from '../assest/line5.png';
import f from '../assest/line6.png';
import green from '../assest/green.png';
import coin from '../assest/coin.png';
import thunder from '../assest/thunder.png';
import list from '../assest/List.png';


function Gas() {
  return (
    <>
   <div className="swap-container">
      <header className="swap-header">
        <div className="logo">UNIDEX</div>
        <nav className="nav-links">
                 <a className="App-link" href="Swap.js" target="_blank" rel="noopener noreferrer">Swap</a>
                <a className="App-link" href="pool.js" target="_blank" rel="noopener noreferrer">Pool</a>
                <a className="App-link" href="Vote.js" target="_blank" rel="noopener noreferrer">Vote</a></nav>
      </header> 
      <main className="hero">
        <p className="subtitle">Go gasless with Unidex..</p><br></br>
        <h1 className="title">Gasless swaps</h1><br></br><br></br>
        <p className="description">
          Swap crypto without native tokens. Matcha handles the gas for<br></br> swaps
          and approvals so you can focus on trading.</p>
        <button className="cta-button">Start Trading</button></main>
      </div>
    
    <div className="gas-free-swaps">
      <div className="logo-grid">
        <img src={a} alt=""></img>
        <img src={b} alt=""></img>
        <img src={c} alt=""></img>
        <button> 〉</button>
        <img src={d} alt=""></img>
        <img src={e} alt=""></img>
        <img src={f} alt=""></img>
      </div>
      <div className="features">
        <h1>Instant gas-free 
          swaps</h1><br></br><br></br>
        <ul>
          <li>✅<span style={{ color: "#0EA5E9" }}>Scans Multiple</span>sources to find the best possible trade rates</li><br></br><br></br>
          <li>✅<span style={{ color: "#0EA5E9" }}>Smart Routing</span>ensures maximum value across liquidity pools</li><br></br><br></br>
          <li>✅<span style={{ color: "#0EA5E9" }}>Protects against front-running</span> and sandwich attacks</li><br></br><br></br>
          <li>✅<span style={{ color: "#0EA5E9" }}>Alerts you to slippage</span> and potential price impact before you trade</li><br></br><br></br>
          <li>✅<span style={{ color: "#0EA5E9" }}>Optimized for Smarter</span>trading with safety and transparency in every swap</li><br></br><br></br>
        </ul>
      </div>
    </div>
  
    <div className="core-container">
      <h2 className="core-title">our Core Swap Functions</h2>
      <p className="core-subtitle">
        Swap crypto without native tokens. Matcha handles the gas for swaps and
        approvals so you can focus on trading.
      </p>

      <div className="core-cards">
        <div className="core-card">
          <img src ={green} alt=""/>
          <h3>MEV protection</h3>
          <p>
            Say goodbye to sandwich attacks and frontrunning. Protect from MEV
            without a second thought.{" "}
            <a href="/">Learn more.</a>
          </p>
        </div>

        <div className="core-card">
          <img
            src={coin} alt=""
          />
          <h3>Get more than you pay for</h3>
          <p>Save on slippage and cut down opportunity cost.</p>
        </div>

        <div className="core-card">
          <img
            src={thunder} alt=""
          />
          <h3>MEV protection</h3>
          <p>
            Say goodbye to sandwich attacks and frontrunning. Protect from MEV
            without a second thought.{" "}
            <a href="/">Learn more.</a>
          </p>
        </div>
      </div>
    </div>
  <div className="whole">
  <div className="wholeone">
 <div className='chain'>
      <center><h1>Available Supporting Chains</h1></center><br></br><br></br>
      <center><p>Swap crypto without native tokens. Matcha handles the gas for<br></br>
       swaps and approvals so you can focus on trading.</p></center>
        <h1 className='volume'>With High Volume</h1>
        </div>
      <center><img src={list} alt=""></img></center>
       <h1 className='most'>with most trending pairs</h1>
      </div>
  </div>
  
    <div className="container">
      <div className="card">
        <h2>Unidex Auto</h2>

        <div className="toggle">
          <button className="active">
            On
          </button>
          <button className="active">
            Off
          </button>
        </div>

        <ul className="features">
          <li> No gas needed</li>
          <li>✔️MEV protection · No slippage</li>
          <li>✔️ 130+ liquidity sources</li>
          <li>✔️Smart Routing · Auto</li>
        </ul>

        <p className="fee">0.05% - 0.25% fee on certain pairs</p>
      </div>

      <div className="bottom-text">
        <h3>Available Supporting Chains</h3>
        <p>
          Swap crypto without native tokens. Matcha handles the gas for swaps
          and approvals so you can focus on trading.
        </p>
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

  )
}

export default Gas;
