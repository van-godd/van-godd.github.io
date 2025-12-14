import { ExternalLink, Github, FlaskConical, Database, Music, TrendingDown, Network } from 'lucide-react';

interface ProjectsProps {
  onProjectClick: (project: any) => void;
}

export function Projects({ onProjectClick }: ProjectsProps) {
  const projects = [
    {
      icon: FlaskConical,
      title: 'THE ALCHEMY OF CONVERSION',
      subtitle: 'A/B TESTING',
      description: 'Rigorous statistical analysis of user behavior. Designed an A/B test framework to distinguish signal from noise, utilizing hypothesis testing and power analysis to optimize decision-making processes with mathematical precision.',
      tech: ['Python', 'Scipy', 'Statsmodels', 'Statistical Inference']
    },
    {
      icon: Database,
      title: 'CUSTOMER SEGMENTATION',
      subtitle: 'THE RFM TRIAD',
      description: 'Advanced database mining and customer profiling. Combined complex SQL queries with Python scripting to architect an RFM segmentation model, categorizing user base into actionable strategic cohorts.',
      tech: ['SQL', 'Python', 'Pandas', 'Data Mining']
    },
    {
      icon: Music,
      title: 'AUDIO ARCHITECTURES',
      subtitle: 'SPOTIFY EDA',
      description: 'Deep exploration of sonic landscapes. Analyzed audio features of over 100k tracks to uncover hidden correlations between musical mathematics and popularity trends across decades.',
      tech: ['Python', 'Seaborn', 'Plotly', 'Exploratory Analysis']
    },
    {
      icon: TrendingDown,
      title: 'THE LABYRINTH OF RETENTION',
      subtitle: 'FUNNEL ANALYSIS',
      description: 'Mapping the user journey through the digital void. Visualize conversion funnels and cohort retention using Sankey diagrams to identify critical drop-off points and optimize the product lifecycle.',
      tech: ['Product Analytics', 'Plotly', 'Sankey', 'Cohort Analysis']
    },
    {
      icon: Network,
      title: 'CONSTELLATIONS OF PURCHASING',
      subtitle: 'ASSOCIATION RULES',
      description: 'Unveiling hidden connections in transactional data. Applied the Apriori algorithm to discover purchasing patterns, visualized as network graphs resembling celestial constellations.',
      tech: ['Machine Learning', 'NetworkX', 'Association Rules', 'Graph Theory']
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white text-black relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-black" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl mb-16 text-center tracking-wider" style={{ fontFamily: 'monospace' }}>
            projects
          </h2>
          
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="border-4 border-black p-8 hover:shadow-2xl transition-all bg-white"
              >
                <div className="flex items-start gap-6">
                  <div className="border-2 border-black p-4 flex-shrink-0">
                    <project.icon className="w-12 h-12" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-3xl mb-2 tracking-wide" style={{ fontFamily: 'monospace' }}>
                      {project.title}
                    </h3>
                    <h4 className="text-xl mb-4 opacity-60 tracking-wide" style={{ fontFamily: 'monospace' }}>
                      {project.subtitle}
                    </h4>
                    <p className="text-lg mb-6 leading-relaxed" style={{ fontFamily: 'monospace' }}>
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-4 py-2 bg-black text-white tracking-wide"
                          style={{ fontFamily: 'monospace' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <button 
                        onClick={() => onProjectClick(project)}
                        className="flex items-center gap-2 border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span style={{ fontFamily: 'monospace' }}>view details</span>
                      </button>
                      <button className="flex items-center gap-2 border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-all">
                        <Github className="w-4 h-4" />
                        <span style={{ fontFamily: 'monospace' }}>code</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-black" />
    </section>
  );
}