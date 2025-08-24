import LeftSidebar from '@/components/LeftSidebar';
import TopNavbar from '@/components/TopNavbar';
import MainContent from '@/components/MainContent';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex h-screen bg-black text-white">
      <LeftSidebar />
      <div className="flex flex-col flex-1">
        <TopNavbar />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}
