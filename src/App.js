import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <>
      <Header />
      <Main />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
