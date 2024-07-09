import React from 'react';
import './App.css';

const App: React.FC = () => {
    return (
        <div>
            <nav className="navbar">
                <div className="nav-links">
                    <a href="#" className="active">Swap</a>
                    <a href="#">Explore</a>
                    <a href="#">Pools</a>
                    <a href="#">More</a>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search tokens..." />
                </div>
                <button className="connect-wallet">Connect Wallet</button>
            </nav>

            <div className="main-content">
                <div className="swap-box">
                    <h2>Swap anytime, anywhere.</h2>
                    <div className="swap-option">
                        <label htmlFor="pay">You pay</label>
                        <select id="pay">
                            <option value="btc">BTC</option>
                        </select>
                        <input type="number" placeholder="56" />
                    </div>
                    <div className="swap-option">
                        <label htmlFor="get">You get</label>
                        <select id="get">
                            <option value="usdt">USDT</option>
                        </select>
                        <input type="number" placeholder="166674" />
                    </div>
                    <button className="swap-button">Swap</button>
                    <div className="details">
                        <p>1 BTC = 33,000 USDT</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;

