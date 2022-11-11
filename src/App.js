
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero"
import Slider from './components/slider/Slider'
import Visual from "./components/Visual/Visual";
import Products from './components/Products/Products'
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Slider/>
      <Visual/>
      <Products/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
