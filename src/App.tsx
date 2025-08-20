import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Accolades from './pages/Accolades';
import Experience from './pages/Experience';
import Codolio from './pages/Codolio';

function App() {
  const [mounted, setMounted] = useState(false);
  const location = useLocation();

  // Used for preventing hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <ThemeProvider>
      <Layout>
        <Routes location={location} key={location.pathname}> 
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/accolades" element={<Accolades />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/codolio" element={<Codolio />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App;