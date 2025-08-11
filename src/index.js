import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Liquidity from './components/Liquidity';
import './css/Liquidity.css';
// import Gasdark from './components/Gasdark';
// import Gas from './components/Gas';
// import Dlearn from './components/Dlearn';
// import './css/Dlearn.css';
// import Learnmore from './components/Learnmore';
// import Dark from './components/Dark';
// import Unidex from './components/Unidex';
// import './css/Unidex.css';
// import './css/Dark.css';
// import './css/Learnmore.css';
// import './css/Gas.css';
// import './css/Gasdark.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Unidex/> */}
    {/* <Dark/> */}
    {/* <Learnmore /> */}
    {/* <Dlearn /> */}
    {/* <Gas /> */}
    {/* <Gasdark/> */}
    <Liquidity/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
