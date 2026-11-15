import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Room from './components/Room';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import Rules from './components/Rules';
import Location from './components/Location';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F5EF] text-[#292522]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Room />
        <Facilities />
        <Gallery />
        <Rules />
        <Location />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
