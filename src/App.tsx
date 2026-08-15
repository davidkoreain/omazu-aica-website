import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { LandingView } from './views/LandingView';
import { ConsultingView } from './views/ConsultingView';
import { AcademyView } from './views/AcademyView';
import { DiagnosticModal } from './components/DiagnosticModal';
import { InquiryModal } from './components/InquiryModal';

export function App() {
  const [activeTab, setActiveTab] = useState<'landing' | 'consulting' | 'academy'>('landing');
  const [isDiagnosticOpen, setIsDiagnosticOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0D14] text-slate-100 selection:bg-cyan-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        openDiagnosticModal={() => setIsDiagnosticOpen(true)}
        openInquiryModal={() => setIsInquiryOpen(true)}
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

      {/* Footer */}
      <Footer
        setActiveTab={setActiveTab}
        openInquiryModal={() => setIsInquiryOpen(true)}
      />
    </div>
  );
}

export default App;
