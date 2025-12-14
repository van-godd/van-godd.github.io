import { Eye } from 'lucide-react';

export function Header() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/20">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Eye className="w-6 h-6" />
            <span className="tracking-wider" style={{ fontFamily: 'monospace' }}>vangodd</span>
          </div>
          <ul className="flex gap-8" style={{ fontFamily: 'monospace' }}>
            <li>
              <button 
                onClick={() => scrollToSection('about')}
                className="hover:text-red-500 transition-colors tracking-wide"
              >
                about
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('skills')}
                className="hover:text-red-500 transition-colors tracking-wide"
              >
                skills
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('projects')}
                className="hover:text-red-500 transition-colors tracking-wide"
              >
                projects
              </button>
            </li>
            <li>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-red-500 transition-colors tracking-wide"
              >
                contact
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}