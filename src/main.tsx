import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import './index.css';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import { Workbox } from 'workbox-window';
import AboutUs from './pages/AboutUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import CookiePolicy from './pages/CookiePolicy';
import SecurityPolicy from './pages/SecurityPolicy';
import BusinessOperations from './pages/BusinessOperations';
import { ROUTES } from './config/constants';

// Register Service Worker
if ('serviceWorker' in navigator) {
  const wb = new Workbox('/service-worker.js');
  
  wb.addEventListener('installed', (event) => {
    if (event.isUpdate) {
      if (confirm('New content is available! Click OK to refresh.')) {
        window.location.reload();
      }
    }
  });

  wb.register();
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <ThemeProvider>
          <Routes>
            <Route path={ROUTES.home} element={<App />}>
              <Route path={ROUTES.about} element={<AboutUs />} />
              <Route path={ROUTES.privacy} element={<PrivacyPolicy />} />
              <Route path={ROUTES.terms} element={<Terms />} />
              <Route path={ROUTES.cookies} element={<CookiePolicy />} />
              <Route path={ROUTES.security} element={<SecurityPolicy />} />
              <Route path="/business-operations" element={<BusinessOperations />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </AuthProvider>
    </Router>
  </StrictMode>
);