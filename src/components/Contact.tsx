import { Mail, Linkedin, Github, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl mb-16 text-center tracking-wider" style={{ fontFamily: 'monospace' }}>
            CONTACT
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="border-4 border-white p-12">
              <h3 className="text-3xl mb-12 tracking-wide text-center" style={{ fontFamily: 'monospace' }}>
                GET IN TOUCH
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-center gap-4 border-2 border-white p-4">
                  <Mail className="w-6 h-6 flex-shrink-0" />
                  <a 
                    href="mailto:vangoddx@gmail.com" 
                    className="text-lg hover:text-red-500 transition-colors"
                    style={{ fontFamily: 'monospace' }}
                  >
                    vangoddx@gmail.com
                  </a>
                </div>
                
                <div className="flex items-center gap-4 border-2 border-white p-4">
                  <Phone className="w-6 h-6 flex-shrink-0" />
                  <a 
                    href="tel:883454087" 
                    className="text-lg hover:text-red-500 transition-colors"
                    style={{ fontFamily: 'monospace' }}
                  >
                    883 454 087
                  </a>
                </div>
                
                <div className="flex items-center gap-4 border-2 border-white p-4">
                  <Github className="w-6 h-6 flex-shrink-0" />
                  <a 
                    href="https://github.com/van-godd" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-red-500 transition-colors"
                    style={{ fontFamily: 'monospace' }}
                  >
                    github.com/van-godd
                  </a>
                </div>
                
                <div className="flex items-center gap-4 border-2 border-white p-4">
                  <Linkedin className="w-6 h-6 flex-shrink-0" />
                  <a 
                    href="https://www.linkedin.com/in/natalia-cygan-b727b7280/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-red-500 transition-colors"
                    style={{ fontFamily: 'monospace' }}
                  >
                    linkedin.com/in/vangodd
                  </a>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t-2 border-white/20">
                <p className="text-center opacity-60" style={{ fontFamily: 'monospace' }}>
                  Open to full-time opportunities, contract projects, and consulting engagements
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
