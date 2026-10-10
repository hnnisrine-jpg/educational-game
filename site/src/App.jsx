import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Play from './pages/Play';
import Courses from './pages/Courses';
import Teachers from './pages/Teachers';
import About from './pages/About';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/play" element={<Play />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:grade" element={<Courses />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
