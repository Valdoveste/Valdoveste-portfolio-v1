import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/styles.css'

window.addEventListener("load", () => {
  const section = document.querySelectorAll('section')!;
  const observerSection = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        let target = entry.target;
        if (!target.classList.contains('--fadeinup') && target.id !== "home") {
          target.classList.add('--fadeinup');
        }
      }
    });
  });

  section.forEach(card => {
    observerSection.observe(card)
  })

  const cards = document.querySelectorAll('.card')!;
  const observerCards = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
      let target = entry.target;
      if (entry.intersectionRatio > 0) {
        // target.classList.add("--fadeinup");
        if (parseInt(target.id) % 2 === 0) {
          target.classList.add("--fadetoright");
        } else {
          target.classList.add("--fadetoleft");
        }
      }
    });
  });

  cards.forEach(card => {
    observerCards.observe(card)
    card.addEventListener("animationend", (e) => {
      card.classList.add("--opacity")
    })
  })
})

function App() {
  return (
    <>
      <Header></Header>
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

export default App;
