import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LandingView } from './views/LandingView';
import { ConsultingView } from './views/ConsultingView';
import { AcademyView } from './views/AcademyView';
import { DiagnosticModal } from './components/DiagnosticModal';
import { InquiryModal } from './components/InquiryModal';
import { AuthModal } from './components/AuthModal';
import { MyPageModal } from './components/MyPageModal';

function MainApp() {
  const [activeTab, setActiveTab] = useState<'landing' | 'consulting' | 'academy'>('landing');
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const [isMyPageOpen, setIsMyPageOpen] = useState(false);

  const openAuthModal = (mode: 'login' | 'signup' = 'login') => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0D14] text-slate-100 selection:bg-cyan-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openDiagnosticModal={() => setIsDiagnosticOpen(true)}
        openInquiryModal={() => setIsInquiryOpen(true)}
        openAuthModal={openAuthModal}
        openMyPageModal={() => setIsMyPageOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {activeTab === 'landing' && (
          <LandingView
            setActiveTab={setActiveTab}
            openDiagnosticModal={() => setIsDiagnosticOpen(true)}
            openInquiryModal={() => setIsInquiryOpen(true)}
          />
        )}

        {activeTab === 'consulting' && (
          <ConsultingView
            openDiagnosticModal={() => setIsDiagnosticOpen(true)}
            openInquiryModal={() => setIsInquiryOpen(true)}
          />
        )}

        {activeTab === 'academy' && (
          <AcademyView
            openDiagnosticModal={() => setIsDiagnosticOpen(true)}
            openInquiryModal={() => setIsInquiryOpen(true)}
          />
        )}
      </main>

      {/* Global Modals */}
      <DiagnosticModal
        isOpen={isDiagnosticOpen}
        onClose={() => setIsDiagnosticOpen(false)}
        openInquiryModal={() => setIsInquiryOpen(true)}
      />

      <InquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
        initialMode={authMode}
      />

      <MyPageModal
        isOpen={isMyPageOpen}
        onClose={() => setIsMyPageOpen(false)}
        openDiagnosticModal={() => setIsDiagnosticOpen(true)}
      />

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        openInquiryModal={() => setIsInquiryOpen(true)}
      />
    </div>
  );
}

export function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}

export default App;
