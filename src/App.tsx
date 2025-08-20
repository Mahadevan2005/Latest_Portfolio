import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Accolades from './pages/Accolades';
import Experience from './pages/Experience';
import Codolio from './pages/Codolio';
import HelloAnimation from './components/HelloAnimation';

const App: React.FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [showAnimation, setShowAnimation] = useState<boolean>(true);
  const location = useLocation();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleAnimationFinish = () => {
    setShowAnimation(false);
  };

  if (!mounted) return null;

  if (showAnimation) {
    return <HelloAnimation onFinish={handleAnimationFinish} />;
  }

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
