import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/styles.css'

const App: React.FC = () => {
  window.addEventListener("DOMContentLoaded", (e) => {

    const mediaQuery = window.matchMedia("(max-width: 500px)");

    const options = {
      root: null,
      threshold: 0.2,
      marginRoot: "0px"
    }

    // Cards Observer
    const observerCards = new IntersectionObserver((entries, observerCards) => {
      entries.forEach(entry => {
        let target = entry.target;
        if (entry.intersectionRatio > 0) {
          if (mediaQuery.matches) {
            target.classList.add("--fadeinup");
          } else {
            if (parseInt(target.id) % 2 === 0) {
              target.classList.add("--fadetoleft");
            }
            else {
              target.classList.add("--fadetoright");
            }
          }
        }
      });
    });

    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
      observerCards.observe(card);
      card.addEventListener("animationend", (e) => {
        card.classList.add("--opacity");
      });
    });

    // Section Observer
    const oberserSection = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        let target = entry.target;
        if (entry.intersectionRatio > 0 && target.id !== "home")
          target.classList.add("--fadeinup");
      });
    });

    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
      oberserSection.observe(section);
    });

    // Cube Observer
    const aboutCube = document.getElementById('home')!;

    const observerCube = new IntersectionObserver((entries) => {
      const sceneCube = document.querySelectorAll(".scene");
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          sceneCube.forEach(scene => {
            scene.classList.add("--fadeincube");
          })
        }
      });
    }, options);

    observerCube.observe(aboutCube);
  });

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