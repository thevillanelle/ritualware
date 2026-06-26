import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import Home from './pages/Home'
import Platform from './pages/Platform'
import Apps from './pages/Apps'
import Doubles from './pages/Doubles'
import Matelier from './pages/Matelier'
import Ritualwear from './pages/Ritualwear'
import GlowUp from './pages/GlowUp'
import Ritualwhere from './pages/Ritualwhere'
import About from './pages/About'
import Status from './pages/Status'
import Ritualwealth from './pages/Ritualwealth'
import Robin from './pages/Robin'
import Atlas from './pages/Atlas'
import SalsLibrary from './pages/SalsLibrary'

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink">
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/apps" element={<Apps />} />
        <Route path="/doubles" element={<Doubles />} />
        <Route path="/matelier" element={<Matelier />} />
        <Route path="/ritualwear" element={<Ritualwear />} />
        <Route path="/glowup" element={<GlowUp />} />
        <Route path="/ritualwhere" element={<Ritualwhere />} />
        <Route path="/about" element={<About />} />
        <Route path="/status" element={<Status />} />
        <Route path="/ritualwealth" element={<Ritualwealth />} />
        <Route path="/robin" element={<Robin />} />
        <Route path="/atlas" element={<Atlas />} />
        <Route path="/library" element={<SalsLibrary />} />
      </Routes>
      <Footer />
    </div>
  )
}
