import Home from './pages/home';
import Header from './components/Header';
import Footer from './components/Footer';
import useScroller from './components/Scroller';
import useNav from './components/Nav';
import useMobileDetection from './components/Mobliedetection';
import useLenisAndGsap from './components/LenisGSAP';
import useGsapAnimations from './components/GSAP';


import './App.css';

function App() {
  useScroller();
  useNav();
  useMobileDetection();
  useLenisAndGsap();
  useGsapAnimations();
  

  return (
  
    <div >
    
      
      <Home />
      
    </div>
  );
}

export default App;

// rm -rf node_module
//rm -f package-lock.json
//npm cache clean --force