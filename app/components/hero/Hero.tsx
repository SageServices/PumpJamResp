import HeroImage from './HeroImage';
import HeroContent from './HeroContent';
import HeroButtons from './HeroButtons';

export default function Hero() {
  return (
    <section className="pt-24 pb-16 text-center relative">
      <HeroImage />
      <HeroContent />
      <HeroButtons />
    </section>
  );
}