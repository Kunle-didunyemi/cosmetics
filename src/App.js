
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero"
import Slider from './components/slider/Slider'
import Visual from "./components/Visual/Visual";
import Products from './components/Products/Products'
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Slider/>
      <Visual/>
      <Products/>
      <Testimonials/>
    </div>
  );
}

export default App;
