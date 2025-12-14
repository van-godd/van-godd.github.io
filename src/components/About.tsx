import { Brain, Database, Skull } from 'lucide-react';
import profileImage from 'figma:asset/3568701a1aa96db1d18561457c862824c3a35445.png';

export function About() {
  return (
    <section id="about" className="py-24 bg-white text-black relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-black" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Skull className="w-12 h-12" />
            <h2 className="text-5xl tracking-wider" style={{ fontFamily: 'monospace' }}>about me </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-lg mb-6 leading-relaxed" style={{ fontFamily: 'monospace' }}>
                I am a Data Analyst with over 3 years of professional experience, specializing in data mining and predictive modeling. I hold a degree in Mathematics and possess advanced expertise in mathematical analysis and statistical modeling.
              </p>
              <p className="text-lg mb-6 leading-relaxed" style={{ fontFamily: 'monospace' }}>
                My background includes extensive work in scientific research, where I developed machine learning and data analysis solutions that are currently being utilized in laboratories at the University of Wrocław.
              </p>
              <p className="text-lg mb-6 leading-relaxed" style={{ fontFamily: 'monospace' }}>
                I also completed an internship focused on Alzheimer's disease research at Wrocław University of Technology in collaboration with the University of Bordeaux.
              </p>
              <p className="text-lg leading-relaxed" style={{ fontFamily: 'monospace' }}>
                I combine technical precision with creative approaches to data analysis, creating valuable insights that help organizations make better business decisions. In my free time, I teach mathematics to students, sharing my passion for analytical thinking.
              </p>
            </div>
            
            <div className="space-y-6">
              {/* Profile Image */}
              <div className="border-4 border-black p-4 bg-zinc-900">
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="w-full h-auto grayscale"
                />
              </div>
              
              <div className="border-2 border-black p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Database className="w-6 h-6" />
                  <h3 className="text-2xl tracking-wide" style={{ fontFamily: 'monospace' }}>certifications</h3>
                </div>
                <ul className="space-y-2 text-lg" style={{ fontFamily: 'monospace' }}>
                  <li>• Data Science - DeepLearning.AI (Nov 2025)</li>
                  <li>• App Builder - Quickbase (Feb 2024)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black" />
    </section>
  );
}