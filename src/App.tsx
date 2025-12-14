import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { ProjectDetail } from './components/ProjectDetail';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  if (selectedProject) {
    return (
      <div className="min-h-screen bg-white text-black">
        <Header />
        <ProjectDetail 
          project={selectedProject} 
          onBack={() => setSelectedProject(null)} 
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects onProjectClick={setSelectedProject} />
        <Contact />
      </main>
      <footer className="border-t border-white/20 py-8">
        <div className="container mx-auto px-4 text-center text-white/60" style={{ fontFamily: 'monospace' }}>
          <p>&copy; 2025 vangodd. data analyst portfolio.</p>
        </div>
      </footer>
    </div>
  );
}