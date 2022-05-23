import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Modal from './components/Modal/Modal';
import './styles/styles.css'

export default function App() {
  return (
    <>
      <Header></Header>
      <Modal></Modal>
      <main>
        <Home></Home>
        <Portfolio></Portfolio>
        <About></About>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </>
  );
}
