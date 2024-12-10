import { MotionProvider } from '@/components/providers/motion-provider';
import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Impact from '@/components/sections/impact';
import Forms from '@/components/sections/forms';

export default function Home() {
  return (
    <MotionProvider>
      <main className="min-h-screen">
        <Hero />
        <About />
        <Impact />
        <Forms />
      </main>
    </MotionProvider>
  );
}