import React from 'react'
import '../css/Liquidity.css';
import list from '../assest/c symbol.png';
import square from '../assest/square.png';
import etherum from '../assest/etherum.png';
import music from '../assest/music.png';
import design from '../assest/line1.png';
import designone from '../assest/line2.png';
import designtwo from '../assest/sona.png';
import designthree from '../assest/sona2.png';
import designfour from '../assest/sona3.png';
import designfive from '../assest/sona4.png';


  const Liquidity = () => {
  const tableData = [
    { source: "oX RFQ", icon: "" ,total: "$2.8B", vol30d: "$108.5 M", networks: ["jjj"] },
    { source: "Across", icon: "", total: "$1.2B", vol30d: "$207.5 k", networks: ["jjj"] },
    { source: "oX RFQ", icon: "", total: "$2.8B", vol30d: "$108.5 M", networks: ["kkk"] },
    { source: "Across", icon: "", total: "$1.2B", vol30d: "$207.5 k", networks: ["jjj"] },
    { source: "oX RFQ", icon: "", total: "$2.8B", vol30d: "$108.5 M", networks: ["kkk"] },
    { source: "Across", icon: "", total: "$1.2B", vol30d: "$207.5 k", networks: ["iii"] },
    { source: "OX RFQ", icon: "", total: "$2.8B", vol30d: "$108.5 M", networks: ["jjj"] },
    { source: "Across", icon: "", total: "$1.2B", vol30d: "$207.5 k", networks: ["uuu"] }
  ];

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
        <h1 className="title">Liquidity Sources</h1><br></br><br></br>
        <p className="description">
         Deep liquidity for the best prices on 9+ million tokens across 14 chains. Tap into 130+<br></br> liquidity sources aggregated by Matcha!.</p>
        <button className="cta-button">Start Trading</button></main>
            </div>
    
    <div className="table-container">
      <div className="table-header">
        <h2>Integrated liquidity sources</h2>
        <div className="table-controls">
          <div className="search-box">
            <div />
            <input type="text" placeholder="Search by liquidity source" />
          </div>
          <select>
            <option>Network</option>
            <option>Ethereum</option>
            <option>Polygon</option>
            <option>Arbitrum</option>
            <option>Optimism</option>
          </select>
          <select>
            <option>All time</option>
            <option>30 days</option>
            <option>7 days</option>
          </select>
        </div>
      </div>
    

    <table className="liquidity-table">
      <thead>
        <tr>
          <th>Source</th>
          <th>Total Volume (USD)</th>
          <th>30D Volume (USD)</th>
          <th>Networks available</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, i) => (
          <tr key={i}>
            <td>
              <img src={row.jack} alt={row.source} className="source-icon" />
            </td>
            <td>{row.total}</td>
            <td>{row.vol30d}</td>
            <td className="networks">
              {row.networks.map((net, idx) => (
                <img  src={etherum} alt="" className="network-icon"/>
            ))}
            {row.networks.map((net, idx) => (
                <img  src={music} alt="" className="network-icon"/>
            ))}
            {row.networks.map((net, idx) => (
                <img  src={square} alt="" className="network-icon"/>
            ))}
            {row.networks.map((net, idx) => (
                <img  src={list} alt="" className="network-icon"/>
            ))}

            </td>
          </tr>
        ))}
      </tbody>
    </table>



      <div className="pagination">
        <button>{"<"}</button>
        {[1, 2, 3, 4, 5].map((page) => (
          <button key={page}>{page}</button>
        ))}
        <button>{">"}</button>
      </div>
    </div>
  <div className='content'>
    <center><h1>Deep liquidity.<br></br>
    AMM and RFQ combined.</h1></center>
    <center><p>Matcha combines 130+ liquidity<br></br>
    sources, on-chain and off-chain.</p></center>
    <img src={design} alt=""></img>
     <img src={designone} alt="" ></img>
     <img src={designtwo} alt=""></img>
      <img src={designthree} alt=""></img>
       <img src={designfour} alt=""></img>
        <img src={designfive} alt=""></img>
</div>



    </>
  )
}

export default Liquidity;
