import './App.css';
import Logo from './asset/logoSPL.png';
import bitmap1 from './asset/bitmap1.png';
import bitmap2 from './asset/bitmap2.png';
import bitmap3 from './asset/bitmap3.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={Logo} className="App-logo" alt="logo" />
        <p className="header">NextPay</p>
        <a
          className="App-header-link"
          href="./"
          rel='noopener noreferrer'
          >Home</a>
        <a
          className="App-header-link"
          href="./about"
          rel='noopener noreferrer'
          >About</a>
        <a
          className="App-header-link"
          href="https://github.com/zeankundev/NextPay"
          rel='noopener noreferrer'
          target="_blank"
          >Github</a>
          
      </header>
      <div className="App-body">
        <div className="App-body-main">
          <h1 className="body">
            NextPay is a payment platform that allows you to accept payments in Solana.
          </h1>
          <h1 className="body">
            It is a decentralized payment system that allows you to accept payments in Solana.
          </h1>
          <h1 className="body">
            Built by the community, powered by libraries. Used by peoples like you.
          </h1>
          <br>
          </br>
          <a
            className="App-link"
            href="https://expo.dev/artifacts/81379391-b9cd-4826-8b9e-62cd565388f6"
            target="_blank"
            rel="noopener noreferrer"
          > Download NextPay for Android! </a>
          <a
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
            > APKPure coming soon!</a>
          <a
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
            > iOS version coming soon!!! </a>
        </div>
        <div className="App-body-content">
          <h1>Why use NextPay?</h1>
          <div className="App-card">
            <div className="App-card-content">
              <h1>
                <b>Easy to use.</b>
              </h1>
              <p>Never forget about the hard UI that complicates you.</p>
              <p>NextPay puts you on focus on your Solana.</p>
            </div>
            <div className="App-card-image">
                <img src={bitmap1} alt="bitmap1" className="App-card-image-content" />
              </div>
          </div>
          <br></br>
          <div className="App-card">
            <div className="App-card-image">
                <img src={bitmap2} alt="bitmap2" className="App-card-image-content" />
            </div>
            <div className="App-card-content">
              <h1>
                <b>Secure transactions. Trust us.</b>
              </h1>
              <p>We might get scammed a lot of times for Solana</p>
              <p>NextPay secures your transactions, so it will</p>
              <p>be unlikely to get a scam. Trust us.</p>
            </div>
          </div>
          <br></br>
          <div className="App-card">
            <div className="App-card-content">
              <h1>
                <b>Share NFTs (work in progress)</b>
              </h1>
              <p>If you are bored of some of your NFTs or if they are full.</p>
              <p>NextPay allows you to exchange NFTs in advance (WIP)</p>
            </div>
            <div className="App-card-image">
                <img src={bitmap3} alt="bitmap1" className="App-card-image-content" />
              </div>
          </div>
          <h1>What are you waiting for? Come on, download!</h1>
          <a
            className="App-link"
            href="https://expo.dev/artifacts/81379391-b9cd-4826-8b9e-62cd565388f6"
            target="_blank"
            rel="noopener noreferrer"
          > Download NextPay for Android! </a>
          <a
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
            > APKPure coming soon!</a>
          <a
            className="App-link"
            target="_blank"
            rel="noopener noreferrer"
            > iOS version coming soon!!! </a>
        </div>
        <footer>
          &copy; 2022 zeankun.dev and Next Systems Inc. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default App;
