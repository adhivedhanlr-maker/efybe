import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Base routing
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import { Home, About, LoanDesk, Contact, Legal } from './pages';

import ScrollToTop from './components/common/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-wrapper" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/loandesk" element={<LoanDesk />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Legal type="privacy" />} />
            <Route path="/terms" element={<Legal type="terms" />} />
            <Route path="/disclaimer" element={<Legal type="disclaimer" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
