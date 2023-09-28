import React, { useEffect, useRef } from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './styles/styles.css'
import ByTimeElementAnimation from "./Effects/ByTimeElementAnimation";

const App: React.FC = () => {
  const options = {
    root: null,
    threshold: 0.2,
    marginRoot: '0px',
  };

  const mediaQuery = window.matchMedia('(max-width: 500px)');

  // Declare your useRef variables here
  const lgCardsRef = useRef<HTMLElement[]>([]);
  const sMCardsRef = useRef<HTMLElement[]>([]);
  const sectionsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    ByTimeElementAnimation(".side__link__image", "--fadeinup", "desc", 250)
    // Large Cards Observer
    const observerLgCards = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        if (entry.intersectionRatio > 0) {
          if (mediaQuery.matches) {
            target.classList.add('--fadeinup');
          } else {
            switch (target.getAttribute('data-direction')) {
              case 'left':
                target.classList.add('--fadetoleft');
                break;
              case 'right':
                target.classList.add('--fadetoright');
                break;
              default:
                break;
            }
          }
        }
      });
    }, options);

    lgCardsRef.current = Array.from(document.querySelectorAll('.card-lg'));

    lgCardsRef.current.forEach((card) => {
      observerLgCards.observe(card);
      card.addEventListener('animationend', (e) => {
        card.classList.add('--opacity');
      });
    });

    // Small Cards Observer
    const observerSmCards = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        if (entry.intersectionRatio > 0) {
          target.classList.add('--fadeinup');
        }
      });
    });

    sMCardsRef.current = Array.from(document.querySelectorAll('.card-sm'));

    sMCardsRef.current.forEach((card) => {
      observerSmCards.observe(card);
      card.addEventListener('animationend', (e) => {
        card.classList.add('--opacity');
      });
    });

    // Section Observer
    const oberserSection = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const target = entry.target as HTMLElement;
        if (entry.intersectionRatio > 0 && target.id !== 'home') {
          target.classList.add('--fadeinup');
        }
      });
    });

    sectionsRef.current = Array.from(document.querySelectorAll('section'));

    sectionsRef.current.forEach((section) => {
      oberserSection.observe(section);
    });
  }, []); // Empty dependency array means this effect runs once after mounting.

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
};

export default App;