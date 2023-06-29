import './App.css';
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Hero from './components/Hero';
import Products from './components/Products';
import Cta from './components/Cta';
import Info from './components/info';
import Signup from './components/sign-up';
import Insta from './components/Insta';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
   
    <Navbar /> 
    <Hero />
    <Products />
    <Cta />
    <Info />
    <Signup/>
    <Insta/>
<Footer/>
    </div>
  );
}

export default App;
