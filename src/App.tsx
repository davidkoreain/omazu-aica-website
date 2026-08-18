import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { ConsultingView } from './views/ConsultingView';
import { AcademyView } from './views/AcademyView';
import { PrivacyView } from './views/PrivacyView';
import { TermsView } from './views/TermsView';
import { InquiryModal } from './components/InquiryModal';

function MainApp() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const openInquiryModal = () => {
    setIsInquiryOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0D14] text-slate-100 selection:bg-cyan-500 selection:text-white font-sans">
      {/* Navigation Header */}
      <Navbar openInquiryModal={openInquiryModal} />

      {/* Main Page View Routes (v2.1 GNB: HOME / CONSULTING / ACADEMY) */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomeView openInquiryModal={openInquiryModal} />} />
          <Route path="/consulting" element={<ConsultingView openInquiryModal={openInquiryModal} />} />
          <Route path="/academy" element={<AcademyView openInquiryModal={openInquiryModal} />} />
          <Route path="/privacy" element={<PrivacyView />} />
          <Route path="/terms" element={<TermsView />} />
        </Routes>
      </main>

      {/* Global Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />

      {/* Footer */}
      <Footer openInquiryModal={openInquiryModal} />
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
}

export default App;
