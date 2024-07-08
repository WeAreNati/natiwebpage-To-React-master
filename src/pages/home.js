import React from 'react';
import { ReactSVG } from 'react-svg';
import Sprite from '../components/Sprites'; // Ensure this path is correct
import triangleRoad from '../img/triangle-road.svg'; // Import the SVG file
import triangleAbout from '../img/triangle-about.svg'; // Import the SVG file

class Home extends React.Component {
    render() {
        return (
            <main className="main">
                <Sprite /> {/* Load the sprite */}

                <section className="hero" id="home">
                    <div className="content">
                        <header className="hero-heading heading">
                            <div className="heading-top">
                                <svg className="heading-top-logo" data-reveal="top" viewBox="0 0 1121 1006">
                                    <use href="#logo-sigle"></use>
                                </svg>
                                <svg className="heading-top-line" data-reveal="fade" viewBox="0 0 450 20">
                                    <use href="#flower-line"></use>
                                </svg>
                            </div>

                            <h1>
                                <strong data-reveal="">
                                    You&#39;ve felt<br />
                                    it all your life,
                                </strong>{' '}
                                <small data-reveal="">
                                    the hidden power behind everything,<br />
                                    pulling the strings.
                                </small>
                            </h1>

                            <div className="hero-heading-back">
                                <strong>IlluminatiIlluminati</strong>
                            </div>
                        </header>

                        <div className="hero-bottom">
                            <div className="hero-bottom-left">
                                <p data-reveal="">
                                    Controlling enterprise and governments.<br />
                                    Now, unveil the secrets of this hidden brotherhood.
                                </p>
                            </div>

                            <div className="hero-bottom-right">
                                <ul className="hero-link">
                                    <li data-reveal="">
                                        <a
                                            aria-label="Twitter X"
                                            href="https://twitter.com/naticoineth"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            <svg className="icon-triangle" viewBox="0 0 95 80">
                                                <use href="#triangle"></use>
                                                <use href="#twitter-x"></use>
                                            </svg>{' '}
                                            <span>Twitter X</span>{' '}
                                        </a>
                                    </li>
                                    <li data-reveal="">
                                        <a
                                            aria-label="Telegram"
                                            href="https://t.me/naticoincommunity"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            <svg className="icon-triangle" viewBox="0 0 95 80">
                                                <use href="#triangle"></use>
                                                <use href="#telegram"></use>
                                            </svg>{' '}
                                            <span>Telegram</span>{' '}
                                        </a>
                                    </li>
                                    <li data-reveal="">
                                        <a
                                            aria-label="Dextools"
                                            href="https://www.dextools.io/app/en/ether/pair-explorer/0x33a93bd484053615933502cb1299f77de48036c8"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            <svg className="icon-triangle" viewBox="0 0 95 80">
                                                <use href="#triangle"></use>
                                                <use href="#dextools"></use>
                                            </svg>{' '}
                                            <span>Dextools</span>{' '}
                                        </a>
                                    </li>
                                    <li data-reveal="">
                                        <a
                                            aria-label="Etherscan"
                                            href="https://etherscan.io/token/0x0B9aE6b1D4f0EEeD904D1CEF68b9bd47499f3fFF"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            <svg className="icon-triangle" viewBox="0 0 95 80">
                                                <use href="#triangle"></use>
                                                <use href="#ethscan"></use>
                                            </svg>{' '}
                                            <span>Etherscan</span>{' '}
                                        </a>
                                    </li>
                                    <li data-reveal="">
                                        <a
                                            aria-label="Uniswap"
                                            href="https://app.uniswap.org/swap?inputCurrency=ETH&amp;outputCurrency=0x0B9aE6b1D4f0EEeD904D1CEF68b9bd47499f3fFF"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            <svg className="icon-triangle uniswap" viewBox="0 0 95 80">
                                                <use href="#triangle"></use>
                                                <use href="#uniswap"></use>
                                            </svg>{' '}
                                            <span>Uniswap</span>{' '}
                                        </a>
                                    </li>
                                    <li data-reveal="">
                                        <a
                                            aria-label="Poloniex"
                                            href="https://poloniex.com/trade/NATI_USDT?type=spot"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            <svg className="icon-triangle" viewBox="0 0 95 80">
                                                <use href="#triangle"></use>
                                                <use href="#poloniex"></use>
                                            </svg>{' '}
                                            <span>Poloniex</span>{' '}
                                        </a>
                                    </li>
                                    <li data-reveal="">
                                        <a
                                            aria-label="CoinGecko"
                                            href="https://www.coingecko.com/en/coins/illuminaticoin"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                        >
                                            <svg className="icon-triangle coing" viewBox="0 0 95 80">
                                                <use href="#triangle"></use>
                                                <use href="#coin-gecko"></use>
                                            </svg>{' '}
                                            <span>CoinGecko</span>{' '}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="hero-address" data-reveal="bottom">
                            <div className="line-hr">
                                <svg viewBox="0 0 11.32 6.14">
                                    <use href="#arrow-left"></use>
                                </svg>
                            </div>
                            <small>Contract address:</small> <strong>0x0B9aE6b1D4f0EEeD904D1CEF68b9bd47499f3fFF</strong>

                            <div className="line-hr line-hr-right">
                                <svg viewBox="0 0 11.32 6.14">
                                    <use href="#arrow-left"></use>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="bg">
                        <div className="hero-bg"></div>
                    </div>
                </section>

                <section className="about" id="about">
                    <div className="about-word">
                        <div>About</div>
                    </div>

                    <div className="content">
                        <div className="about-left">
                            <header className="about-heading heading">
                                <div className="heading-top">
                                    <svg className="heading-top-logo" data-reveal="top" viewBox="0 0 1121 1006">
                                        <use href="#logo-triangle"></use> <text x="440" y="710">?</text>
                                    </svg>
                                    <svg className="heading-top-line" data-reveal="fade" viewBox="0 0 450 20">
                                        <use href="#flower-line"></use>
                                    </svg>
                                </div>

                                <h2>
                                    <small data-reveal="">A mysterious new token</small> <strong data-reveal="">has emerged.</strong>
                                </h2>
                            </header>

                            <div className="p">
                                <p className="intro" data-reveal="">
                                    IlluminatiCoin&#39;s origins are intertwined with ancient symbols and occult knowledge and is said to hold the key to understanding the true nature of wealth.
                                </p>

                                <p data-reveal="">
                                    Owning IlluminatiCoin is more than an investment; it&#39;s an invitation to be part of the chosen group of enlightened holders, poised to influence the future of wealth and financial empowerment.
                                </p>

                                <p data-reveal="">
                                    Holders of <strong className="nati">$NATI</strong> embark on a journey of discovery. <strong className="nati">$NATI</strong> is a coin for those who seek knowledge. Launched stealth with no presale, zero taxes, LP burnt and contract renounced. Investors are rewarded with access to exclusive insights, illuminating the path to financial well-being and unraveling the mysteries of wealth.
                                </p>
                            </div>
                        </div>

                        <div className="about-right" data-reveal="fade">
                            <div className="about-right-img">
                                <svg className="about-img" viewBox="0 0 896 894">
                                    <use href="#triangle-about"></use>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="bg">
                        <div className="about-bg"></div>
                    </div>
                </section>

                <section className="how" id="how">
                    <div className="content">
                        <div className="how-left">
                            <header className="how-heading heading">
                                <div className="heading-top">
                                    <svg className="heading-top-logo" data-reveal="top" viewBox="0 0 1121 1006">
                                        <use href="#logo-triangle"></use> <use href="#wallet" transform="scale(11)" x="35" y="38"></use>
                                    </svg>
                                    <svg className="heading-top-line" data-reveal="fade" viewBox="0 0 450 20">
                                        <use href="#flower-line"></use>
                                    </svg>
                                </div>

                                <h2>
                                    <small data-reveal="">How to buy</small> <strong data-reveal="">$NATI Coin?</strong>
                                </h2>
                            </header>
                        </div>

                        <div className="how-right">
                            <article>
                                <svg className="icon-triangle wallet" data-reveal="top" viewBox="0 0 95 80">
                                    <use href="#triangle"></use> <use href="#wallet"></use>
                                </svg>

                                <h3 className="h3" data-reveal="top">Create a wallet</h3>

                                <div className="p">
                                    <p className="intro" data-reveal="">
                                        Download Metamask, or your wallet of choice, from the{' '}
                                        <a href="https://apps.apple.com/fr/app/metamask-blockchain-wallet/id1438144202" rel="noopener noreferrer" target="_blank">
                                            Apple App Store
                                        </a>{' '}
                                        or{' '}
                                        <a href="https://play.google.com/store/apps/details?id=io.metamask&amp;hl=en_US" rel="noopener noreferrer" target="_blank">
                                            Google Play Store
                                        </a>{' '}
                                        for free.
                                    </p>

                                    <p data-reveal="">
                                        Desktop users, download the Google Chrome extension by going to{' '}
                                        <a href="https://metamask.io/" rel="noopener noreferrer" target="_blank">
                                            metamask.io
                                        </a>
                                        .
                                    </p>
                                </div>
                            </article>

                            <article>
                                <svg className="icon-triangle eth" data-reveal="top" viewBox="0 0 95 80">
                                    <use href="#triangle"></use> <use href="#eth"></use>
                                </svg>

                                <h3 className="h3" data-reveal="top">Get some ETH</h3>

                                <div className="p">
                                    <p className="intro" data-reveal="">
                                        Have ETH in your wallet to switch to <strong className="nati">$NATI</strong>.
                                    </p>

                                    <p data-reveal="">
                                        If you don&#39;t have any ETH, you can buy directly on Metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.
                                    </p>
                                </div>
                            </article>

                            <article>
                                <svg className="icon-triangle uniswap" data-reveal="top" viewBox="0 0 95 80">
                                    <use href="#triangle"></use> <use href="#uniswap"></use>
                                </svg>

                                <h3 className="h3" data-reveal="top">Go to Uniswap</h3>

                                <div className="p">
                                    <p className="intro" data-reveal="">
                                        Connect to Uniswap. Go to{' '}
                                        <a href="https://app.uniswap.org/" rel="noopener noreferrer" target="_blank">
                                            app.uniswap.org
                                        </a>{' '}
                                        in your web browser, or on the browser inside of the Metamask app.
                                    </p>

                                    <p data-reveal="">
                                        Connect your wallet. Paste the <strong className="nati">$NATI</strong> token address into Uniswap, select NATI, and confirm. When Metamask prompts you for a wallet signature, sign.
                                    </p>
                                </div>
                            </article>

                            <article>
                                <svg className="icon-triangle swap" data-reveal="top" viewBox="0 0 95 80">
                                    <use href="#triangle"></use> <use href="#swap-nati-eth"></use>
                                </svg>

                                <h3 className="h3" data-reveal="top" id="buy">Swap ETH for NATI</h3>

                                <div className="p">
                                    <p data-reveal="">
                                        We have <strong>ZERO</strong> taxes so you don&#39;t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.
                                    </p>

                                    <p className="intro" data-reveal="">
                                        Use the swap module just below to buy your first <strong className="nati">$NATI</strong>.
                                    </p>
                                </div>

                                <div className="swaper-content">
                                    <div className="fading"></div>

                                    <div className="swaper">
                                        <iframe
                                            data-src="https://app.uniswap.org/#/swap?outputCurrency=0x0B9aE6b1D4f0EEeD904D1CEF68b9bd47499f3fFF"
                                            height="600"
                                            id="uniswap-iframe"
                                            src="about:blank"
                                            title="Uniswap App Widget"
                                        ></iframe>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>

                    <div className="bg">
                        <div className="how-bg"></div>
                    </div>
                </section>
                {/*token Start */}
                <section className="token">
                    <div className="token-wrapper">
                        <div className="token-triangle">
                            <div className="token-triangle-svg">
                                <svg viewBox="0 0 95 80">
                                    <use href="#triangle"></use>
                                </svg>
                            </div>

                            <div className="token-circle">
                                <div className="token-circle-svg">
                                    <svg viewBox="0 0 100 100">
                                        <circle className="c92" cx="50" cy="50" r="50"></circle> <circle className="c7" cx="50" cy="50" r="50"></circle> <circle className="c1" cx="50" cy="50" r="50"></circle>
                                    </svg>
                                </div>
                                <svg className="token-title" viewBox="0 0 505 43">
                                    <text y="41">
                                        {' '}
                                        <tspan>T</tspan>
                                        <tspan>o</tspan>
                                        <tspan>k</tspan>
                                        <tspan>e</tspan>
                                        <tspan>n</tspan>
                                        <tspan>o</tspan>
                                        <tspan>m</tspan>
                                        <tspan>i</tspan>
                                        <tspan>c</tspan>
                                        <tspan>s</tspan>{' '}
                                    </text>{' '}
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="token-triangle-trigger"></div>

                    <div className="content" id="tokenomics">
                        <header className="token-heading heading">
                            <div className="heading-top">
                                <svg className="heading-top-logo" data-reveal="top" viewBox="0 0 1121 1006">
                                    <use href="#logo-sigle"></use>
                                </svg>
                                <svg className="heading-top-line" data-reveal="fade" viewBox="0 0 450 20">
                                    <use href="#flower-line"></use>
                                </svg>
                            </div>

                            <h2>
                                <small data-reveal="">Total supply</small> <strong data-reveal="">33,000,000,000,000</strong>
                            </h2>
                        </header>

                        <div className="p">
                            <p className="intro" data-reveal="">
                                92% of the tokens were sent to the liquidity pool, LP tokens were burnt, and contract renounced.
                            </p>
                        </div>
                    </div>

                    <div className="bg">
                        <div className="token-bg"></div>
                    </div>
                </section>
                {/* token end */}
                <section className="road" id="roadmap">
                    <div className="content">
                        <div>
                            <header className="road-heading heading">
                                <div className="heading-top">
                                    <svg className="heading-top-logo" data-reveal="top" viewBox="0 0 1121 1006">
                                        <use href="#logo-triangle"></use> <use href="#calendar" transform="scale(14)" x="28" y="30"></use>
                                    </svg>
                                    <svg className="heading-top-line" data-reveal="fade" viewBox="0 0 450 20">
                                        <use href="#flower-line"></use>
                                    </svg>
                                </div>

                                <h2>
                                    <small data-reveal="">Enlightenment awaits</small> <strong data-reveal="">Roadmap</strong>
                                </h2>
                            </header>

                            <div className="p">
                                <p className="intro" data-reveal="">
                                    Here is a rough sketch of <strong className="nati">$NATI</strong> path ahead. Epiphany is upon us. Enlightenment awaits.
                                </p>
                            </div>

                            <div className="road-right">
                                <div className="road-right-img" data-reveal="">
                                    <svg className="road-img" viewBox="0 0 1284 1103">
                                        <use href="triangle-road"></use>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <ol className="road-list">
                            <li>
                                <div className="road-phase">
                                    <span data-reveal="top">Phase 1</span>
                                </div>

                                <h3 data-reveal="">Establish Secret Society</h3>

                                <ul data-reveal="">
                                    <li>Mint initial supply of 33 trillion tokens</li>
                                    <li>Launch liquidity pool with 92% of the initial supply</li>
                                    <li>Formation of secret token gated Discord</li>
                                </ul>
                            </li>
                            <li>
                                <div className="road-phase">
                                    <span data-reveal="top">Phase 2</span>
                                </div>

                                <h3 data-reveal="">Subvert and Infiltrate</h3>

                                <ul data-reveal="">
                                    <li>Community partnerships</li>
                                    <li>CEX Listings</li>
                                    <li>10,000+ holders</li>
                                    <li>Hide secret stashes of coins across the internet</li>
                                </ul>
                            </li>
                            <li>
                                <div className="road-phase">
                                    <span data-reveal="top">Phase 3</span>
                                </div>

                                <h3 data-reveal="">New Crypto Order</h3>

                                <ul data-reveal="">
                                    <li>IlluminatiCoin merch</li>
                                    <li>T1 Exchange Listings</li>
                                    <li>100,000+ holders</li>
                                    <li>New Crypto Order</li>
                                </ul>
                            </li>
                        </ol>
                    </div>

                    <div className="bg">
                        <div className="road-bg"></div>
                    </div>
                </section>
            </main>
        );
    }
}

export default Home;
