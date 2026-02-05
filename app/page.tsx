import { Hero } from '@/app/components/sections/hero';
import { Metrics } from '@/app/components/sections/metrics';
import { News } from '@/app/components/sections/news';
import { About } from '@/app/components/sections/about';
import { Roadmap } from '@/app/components/sections/roadmap';
import { Contact } from '@/app/components/sections/contact';

export default function Home() {
  return (
    <>
      <Hero />
      <News />
      <About />
      <Metrics />
      <Roadmap />
      <Contact />
    </>
  );
}
