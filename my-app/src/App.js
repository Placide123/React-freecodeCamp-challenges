
import './App.css';
import Information from './components/information';
import About from './components/about';
import Interests from './components/Interests';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
     <Information />
     <About />
     <Interests/>
     <Footer/>
    </div>
  );
}

export default App;
