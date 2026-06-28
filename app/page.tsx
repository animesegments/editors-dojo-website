import EDNav from '../components/EDNav';
import EDHero from '../components/EDHero';
import EDAbout from '../components/EDAbout';
import EDServices from '../components/EDServices';
import EDPortfolio from '../components/EDPortfolio';
import EDBeforeAfter from '../components/EDBeforeAfter';
import EDInstagram from '../components/EDInstagram';
import EDProcess from '../components/EDProcess';
import EDContact from '../components/EDContact';
import EDFooter from '../components/EDFooter';

export default function EditorsDojo() {
  return (
    <main className="min-h-screen bg-[var(--color-bg-primary)] overflow-hidden">
      <EDNav />
      <EDHero />
      <EDAbout />
      <EDServices />
      <EDPortfolio />
      <EDBeforeAfter />
      <EDInstagram />
      <EDProcess />
      <EDContact />
      <EDFooter />
    </main>
  );
}