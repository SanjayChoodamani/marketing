import About from './components/About'
import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Scroll from './components/Scroll'
import Invest from './components/Invest'
import Events from './components/Events'
import Sopnsors from './components/Sponsors'
import Carousel from './components/Carousel'
import Contact from './components/Contact'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Hero />
        <About />
        <Scroll />
        <Invest />
        <Events />
        <Sopnsors />
        <Carousel />
        <Contact />
      </BrowserRouter>
    </div>
  );
}

export default App
