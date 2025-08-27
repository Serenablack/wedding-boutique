import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import DesignerShowcase from './components/DesignerShowcase';
import BridalGallery from './components/BridalGallery';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className='App'>
      <a href='#main-content' className='skip-link'>
        Skip to main content
      </a>
      <Header />
      <main id='main-content'>
        <Hero />
        <About />
        <DesignerShowcase />
        <BridalGallery />
        <Services />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
