import Brands from '@/components/Orgnisms/Brands';
import FlipSection from '@/components/Orgnisms/FlipSection';
import '../app/globals.css';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import OnePost from '../components/OnePost';
import TabsSection from '../components/Orgnisms/TabsSection';
import Testimonials from '../components/Orgnisms/Testimonials';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FlipSection />
      <Brands />
      <TabsSection />
      <OnePost />
      <Testimonials />
      <Footer />
    </main>
  );
}