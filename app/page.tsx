import Header from '@/components/Header';
import InspirationGallery from '@/components/InspirationGallery';
import BrandStrategyInput from '@/components/BrandStrategyInput';
import PersonaSelector from '@/components/PersonaSelector';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Visual Inspiration for Designers</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <InspirationGallery />
          </div>
          <div>
            <BrandStrategyInput />
            <PersonaSelector />
          </div>
        </div>
      </main>
    </div>
  );
}