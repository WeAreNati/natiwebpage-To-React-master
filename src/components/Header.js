import React from "react";
import Sprite from "./Sprites"; // Ensure this correctly imports the SVG sprite file

class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="header-left">
                    <a aria-label="IlluminatiCoin" className="header-logo" href="#home">
                        <svg viewBox="0 0 5545 1005">
                            <use href="#logo-sigle"></use>
                            <use href="#logo-txt" transform="scale(1.15)" x="1200" y="300"></use>
                        </svg>
                    </a>
                </div>
                <div className="header-line">
                    <svg viewBox="0 0 11.32 6.14">
                        <use href="#arrow-left"></use>
                    </svg>
                </div>
                <nav className="header-nav">
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="#how">How to buy</a></li>
                        <li><a href="#tokenomics">Tokenomics</a></li>
                        <li><a href="#roadmap">Roadmap</a></li>
                        <li><a href="https://medium.com/@illuminaticoin.io" rel="noopener noreferrer" target="_blank">Medium</a></li>
                        <li className="li-social"><a href="https://t.me/naticoincommunity" rel="noopener noreferrer" target="_blank">Telegram</a></li>
                        <li className="li-social"><a href="https://discord.gg/7VbGkRKD9f" rel="noopener noreferrer" target="_blank">Discord</a></li>
                        <li className="li-social"><a href="https://x.com/naticoineth" rel="noopener noreferrer" target="_blank">Twitter / 𝕏</a></li>
                        <li className="li-social"><a href="https://www.facebook.com/illuminaticoin.io" rel="noopener noreferrer" target="_blank">Facebook</a></li>
                        <li className="li-social"><a href="https://instagram.com/illuminaticoin.io" rel="noopener noreferrer" target="_blank">Instagram</a></li>
                        <li className="li-social"><a href="https://tiktok.com/@illuminaticoin.io" rel="noopener noreferrer" target="_blank">Tik Tok</a></li>
                        <li className="li-social"><a href="https://www.youtube.com/@illuminaticoin" rel="noopener noreferrer" target="_blank">YouTube</a></li>
                        <li className="li-social"><a href="https://www.reddit.com/r/IlluminatiCoin" rel="noopener noreferrer" target="_blank">Reddit</a></li>
                        <li className="li-social"><a href="https://linktr.ee/illuminaticoin" rel="noopener noreferrer" target="_blank">Linktree</a></li>
                        <li className="li-social"><a href="mailto:contact@illuminaticoin.io">Email Us</a></li>
                    </ul>
                </nav>
                <div className="header-line header-line-right">
                    <svg viewBox="0 0 11.32 6.14">
                        <use href="#arrow-left"></use>
                    </svg>
                </div>
                <ul className="header-social">
                    <li><a aria-label="Twitter / 𝕏" href="https://x.com/naticoineth" rel="noopener noreferrer" target="_blank"><svg viewBox="0 0 39 39"><use href="#twitter-x"></use></svg></a></li>
                    <li><a aria-label="Telegram" href="https://t.me/naticoincommunity" rel="noopener noreferrer" target="_blank"><svg viewBox="0 0 39 39"><use href="#telegram"></use></svg></a></li>
                </ul>
                <div className="header-right">
                    <a className="btn" href="#buy">Buy now</a>
                    <button aria-label="Menu" className="btn btn-nav" type="button">
                        <svg viewBox="0 0 100 100">
                            <path className="l-1" d="M0,42h62c13,0,6,26-4,16L35,35"></path>
                            <path name="l-2" d="M0,50h70"></path>
                            <path className="l-3" d="M0,58h62c13,0,6-26-4-16L35,65"></path>
                        </svg>
                    </button>
                </div>
            </header>
        );
    }
}

export default Header;
