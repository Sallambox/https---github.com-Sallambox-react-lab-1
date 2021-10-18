// import logo from './logo.svg';
import './App.css';
import { AboutUs } from './components/aboutUs/aboutUs';
import { Jumbotron } from './components/header/jumbotron';
import { Portfolio } from './components/portfolio/portfolio';
import { Skills } from './components/skills/skills';
import { Footer } from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <Jumbotron/>
      <AboutUs/>
      <Skills/>
      <Portfolio/>
      <Footer/>
    </div>
  );
}

export default App;
