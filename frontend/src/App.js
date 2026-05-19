import React, { useState, useEffect } from 'react';
// Original MyLawBox app saved in MyLawBox.backup.jsx - do not delete!
// import MyLawBox from './MyLawBox'
import Home from './Home';
import Contact from './Contact';
import ServicePage from './ServicePage';
import Metrics from './Metrics';
import './App.css';

const SERVICE_PAGES = [
  'fractional-coo',
  'fractional-cfo',
  'bookkeeping',
  'hr-payroll',
  'fractional-cio',
  'fractional-cmo',
  'fractional-caio',
  'tax-strategy',
  'policy-limits',
  'lien-resolution',
  'settlement-disbursement',
];

function App() {
  const getInitialPage = () => {
    const path = (window.location.pathname.toLowerCase().replace(/\/+$/, '') || '/');

    if (path === '/contact') return 'contact';
    if (path === '/metrics') return 'metrics';

    const serviceMatch = path.replace('/', '');
    if (SERVICE_PAGES.includes(serviceMatch)) return serviceMatch;

    return 'home';
  };

  const [currentPage, setCurrentPage] = useState(getInitialPage());

  const navigate = (page) => {
    setCurrentPage(page);

    if (page === 'home') {
      window.history.pushState({}, '', '/');
    } else {
      window.history.pushState({}, '', `/${page}`);
    }

    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getInitialPage());
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // To restore the original app, uncomment MyLawBox and comment out the return below
  // return <MyLawBox />;

  if (currentPage === 'contact') {
    return <Contact onNavigateHome={() => navigate('home')} />;
  }

  if (currentPage === 'metrics') {
    return <Metrics />;
  }

  if (SERVICE_PAGES.includes(currentPage)) {
    return (
      <ServicePage
        serviceId={currentPage}
        onNavigate={navigate}
        onNavigateContact={() => navigate('contact')}
      />
    );
  }

  return <Home onNavigateContact={() => navigate('contact')} onNavigate={navigate} />;
}

export default App;