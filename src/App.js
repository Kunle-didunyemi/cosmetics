
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero"
import Slider from './components/slider/Slider'
import Visual from "./components/Visual/Visual";

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Slider/>
      <Visual/>
    </div>
  );
}

export default App;
