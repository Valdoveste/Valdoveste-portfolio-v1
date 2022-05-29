import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
// import Modal from './components/Modal/Modal';
import Social from './components/Social/Social';
import './styles/styles.css'

function App() {

  return (
    <>
      {/* <Modal></Modal> */}
      <Header></Header>
      <main>
        <Home></Home>
        <About></About>
        <Portfolio></Portfolio>
        <Contact></Contact>
        <Social></Social>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
