// import logo from './images/icons/logo.svg';
import { Hero } from 'partials/Hero/Hero';
// import './App.css';
import { Header } from 'partials/Header/Header';
import { GetReqBlock } from 'partials/GetReqBlock/GetReqBlock';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <Header></Header>
      <Hero></Hero>
      <GetReqBlock></GetReqBlock>
    </>
  );
}

export default App;
