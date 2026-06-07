import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import Platform from './pages/Platform'
import Doubles from './pages/Doubles'
import Matelier from './pages/Matelier'
import Ritualwear from './pages/Ritualwear'
import GlowUp from './pages/GlowUp'
import Ritualwhere from './pages/Ritualwhere'
import About from './pages/About'
import Status from './pages/Status'

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/doubles" element={<Doubles />} />
        <Route path="/matelier" element={<Matelier />} />
        <Route path="/ritualwear" element={<Ritualwear />} />
        <Route path="/glowup" element={<GlowUp />} />
        <Route path="/ritualwhere" element={<Ritualwhere />} />
        <Route path="/about" element={<About />} />
        <Route path="/status" element={<Status />} />
      </Routes>
      <Footer />
    </div>
  )
}
