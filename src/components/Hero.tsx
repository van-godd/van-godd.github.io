import { TrendingUp, Eye } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background image with overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 animate-spiral-slow">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1754421017539-5fc7ef8f46e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwc3BpcmFsJTIwdm9ydGV4fGVufDF8fHx8MTc2NTY3MjQzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Dark spiral background" 
            className="w-full h-full object-cover opacity-40 scale-110"
          />
        </div>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Animated spiral pattern overlay */}
      <div className="absolute inset-0 opacity-10 animate-spiral-reverse">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="spiral-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <path
                d="M 100 100 m -50 0 a 50 50 0 1 1 100 0 a 50 50 0 1 1 -100 0 M 100 100 m -40 0 a 40 40 0 1 0 80 0 a 40 40 0 1 0 -80 0 M 100 100 m -30 0 a 30 30 0 1 1 60 0 a 30 30 0 1 1 -60 0 M 100 100 m -20 0 a 20 20 0 1 0 40 0 a 20 20 0 1 0 -40 0 M 100 100 m -10 0 a 10 10 0 1 1 20 0 a 10 10 0 1 1 -20 0"
                stroke="white"
                strokeWidth="1"
                fill="none"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#spiral-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-7xl md:text-9xl mb-4 tracking-wider" style={{ fontFamily: 'monospace' }}>
            vangodd
          </h1>
          
          <div className="h-1 w-64 bg-red-600 mx-auto mb-8" />
          
          <h2 className="text-2xl md:text-3xl mb-4 tracking-widest opacity-80" style={{ fontFamily: 'monospace' }}>
            data analyst | data science & predictive modeling
          </h2>
          
          <p className="text-lg mb-12 max-w-2xl mx-auto leading-relaxed opacity-60" style={{ fontFamily: 'monospace' }}>
            uncovering hidden patterns in data that drive business decisions
          </p>
          
          <div className="flex gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-black transition-all tracking-wider"
              style={{ fontFamily: 'monospace' }}
            >
              view projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}