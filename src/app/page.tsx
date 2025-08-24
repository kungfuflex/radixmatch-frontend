import LeftSidebar from "../components/LeftSidebar";
import TopNavbar from "../components/TopNavbar";
import MainContent from "../components/MainContent";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex h-screen bg-night-black text-white">
      <LeftSidebar />
      <div className="flex flex-col flex-1">
        <TopNavbar />
        <main className="flex-1 p-4">
          <MainContent />
        </main>
        <Footer />
      </div>
    </div>
  );
}