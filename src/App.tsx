import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ConsultationModal } from './components/common/ConsultationModal';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Industries } from './pages/Industries';
import { CaseStudies } from './pages/CaseStudies';
import { Capabilities } from './pages/Capabilities';
import { Contact } from './pages/Contact';
import { COMPANY_INFO } from './data/companyData';
import { MessageCircle, ArrowUp } from 'lucide-react';

export function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalTopic, setModalTopic] = useState<string>('General Project Discussion');
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);

  // Sync state with hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').trim();
      const validTabs = ['home', 'about', 'services', 'industries', 'case-studies', 'capabilities', 'contact'];
      if (hash && validTabs.includes(hash)) {
        setCurrentTab(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update document title dynamically
  useEffect(() => {
    const tabTitles: Record<string, string> = {
      home: 'Transforming Documents into Digital Intelligence',
      about: 'About Our Company & Institutional Governance',
      services: 'Enterprise Digitization, OCR & Metadata Services',
      industries: 'Universities, Libraries & Sector Solutions',
      'case-studies': 'Institutional Case Studies & Experience',
      capabilities: 'Library & Information Management Capabilities',
      contact: 'Project Consultation & Contact'
    };

    const subtitle = tabTitles[currentTab] || 'DocuDigital Solutions';
    document.title = `${COMPANY_INFO.name} | ${subtitle}`;
  }, [currentTab]);

  // Track scroll position for Back to Top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (tab: string) => {
    setCurrentTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = (topic?: string) => {
    if (topic) setModalTopic(topic);
    setIsModalOpen(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#040711] text-slate-100 flex flex-col selection:bg-cyan-500 selection:text-slate-950 font-sans">
      {/* Sticky Top Navbar */}
      <Navbar
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Main Page Body */}
      <main className="flex-grow pt-20">
        {currentTab === 'home' && (
          <Home
            onNavigate={handleNavigate}
            onOpenConsultation={handleOpenConsultation}
          />
        )}
        {currentTab === 'about' && (
          <About onOpenConsultation={handleOpenConsultation} />
        )}
        {currentTab === 'services' && (
          <Services onOpenConsultation={handleOpenConsultation} />
        )}
        {currentTab === 'industries' && (
          <Industries onOpenConsultation={handleOpenConsultation} />
        )}
        {currentTab === 'case-studies' && (
          <CaseStudies onOpenConsultation={handleOpenConsultation} />
        )}
        {currentTab === 'capabilities' && (
          <Capabilities onOpenConsultation={handleOpenConsultation} />
        )}
        {currentTab === 'contact' && <Contact />}
      </main>

      {/* Corporate Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenConsultation={handleOpenConsultation}
      />

      {/* Interactive Global Consultation Modal */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialTopic={modalTopic}
      />

      {/* Floating Action Buttons: WhatsApp & Scroll to Top */}
      <div className="fixed bottom-5 right-5 z-30 flex flex-col items-end gap-2.5">
        {/* Scroll To Top */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="p-3 bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white rounded-full border border-slate-700/80 shadow-lg backdrop-blur-md transition-all duration-200 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        {/* Direct WhatsApp Floating Badge */}
        <a
          href={COMPANY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-xl shadow-emerald-950/50 hover:shadow-emerald-600/30 transition-all duration-200 text-xs font-semibold group cursor-pointer"
          title={`WhatsApp Direct with ${COMPANY_INFO.managingDirector}`}
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span className="hidden sm:inline">WhatsApp Direct</span>
        </a>
      </div>
    </div>
  );
}

export default App;
