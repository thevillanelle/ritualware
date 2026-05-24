import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Platform from './pages/Platform'
import Doubles from './pages/Doubles'
import Matelier from './pages/Matelier'
import Apps from './pages/Apps'
import About from './pages/About'

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/doubles" element={<Doubles />} />
        <Route path="/matelier" element={<Matelier />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}
