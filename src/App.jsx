import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Nav from './components/Nav'
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
import AuthCallback from './pages/AuthCallback'

export default function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-cream text-ink">
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
          <Route path="/auth/callback" element={<AuthCallback />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  )
}
