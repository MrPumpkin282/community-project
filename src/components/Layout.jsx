import Navbar from './Navbar';
import Footer from './Footer';
import ChatBot from './ChatBot';
import ScrollToTop from './ScrollToTop';
import { Toaster } from '@/components/ui/sonner';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar />
      <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
        {children}
      </main>
      <Footer />
      <ChatBot />
      <Toaster position="top-right" richColors />
    </div>
  );
}
