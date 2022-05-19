import React from 'react';
import Header from './components/Header/Header';
import Home  from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Header></Header>
      <Home></Home>
      <About></About>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}
