import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Integrations from './pages/Integrations';
import Blog from './pages/Blog';
import RequestDemo from './pages/RequestDemo';
import Contact from './pages/Contact';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import APIDocumentation from './pages/API';

import GlowBackground from './components/GlowBackground';

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/integrations" element={<Integrations />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/api documentation" element={<APIDocumentation />} />
            <Route path="/demo" element={<RequestDemo />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;