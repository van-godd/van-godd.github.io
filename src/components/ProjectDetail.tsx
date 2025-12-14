import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

interface ProjectDetailProps {
  project: {
    icon: any;
    title: string;
    subtitle: string;
    description: string;
    tech: string[];
    longDescription?: string;
    methodology?: string[];
    results?: string[];
    challenges?: string[];
  };
  onBack: () => void;
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  return (
    <div className="min-h-screen bg-white text-black pt-24 pb-16">
      <div className="container mx-auto px-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 mb-8 border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-all"
          style={{ fontFamily: 'monospace' }}
        >
          <ArrowLeft className="w-5 h-5" />
          <span>back_to_projects</span>
        </button>

        <div className="max-w-4xl mx-auto">
          <div className="flex items-start gap-6 mb-12">
            <div className="border-4 border-black p-6 flex-shrink-0">
              <project.icon className="w-16 h-16" />
            </div>
            
            <div>
              <h1 className="text-5xl mb-2 tracking-wide" style={{ fontFamily: 'monospace' }}>
                {project.title}
              </h1>
              <h2 className="text-2xl opacity-60 tracking-wide" style={{ fontFamily: 'monospace' }}>
                {project.subtitle}
              </h2>
            </div>
          </div>

          <div className="border-4 border-black p-8 mb-8">
            <h3 className="text-3xl mb-4 tracking-wide" style={{ fontFamily: 'monospace' }}>
              OVERVIEW
            </h3>
            <p className="text-lg leading-relaxed mb-6" style={{ fontFamily: 'monospace' }}>
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-black text-white tracking-wide"
                  style={{ fontFamily: 'monospace' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="border-4 border-black p-8 mb-8">
            <h3 className="text-3xl mb-6 tracking-wide" style={{ fontFamily: 'monospace' }}>
              METHODOLOGY
            </h3>
            <ul className="space-y-4" style={{ fontFamily: 'monospace' }}>
              <li className="text-lg leading-relaxed">
                {'>'} Data collection and preprocessing: Gathered raw data from multiple sources, cleaned inconsistencies, and normalized values for analysis.
              </li>
              <li className="text-lg leading-relaxed">
                {'>'} Exploratory data analysis: Conducted statistical analysis to identify patterns, outliers, and key relationships within the dataset.
              </li>
              <li className="text-lg leading-relaxed">
                {'>'} Model development: Built and trained analytical models using appropriate algorithms based on project requirements.
              </li>
              <li className="text-lg leading-relaxed">
                {'>'} Validation and testing: Performed rigorous testing to ensure model accuracy and reliability across different scenarios.
              </li>
              <li className="text-lg leading-relaxed">
                {'>'} Visualization and reporting: Created comprehensive dashboards and reports to communicate findings effectively.
              </li>
            </ul>
          </div>

          <div className="border-4 border-black p-8 mb-8">
            <h3 className="text-3xl mb-6 tracking-wide" style={{ fontFamily: 'monospace' }}>
              KEY FINDINGS
            </h3>
            <ul className="space-y-4" style={{ fontFamily: 'monospace' }}>
              <li className="text-lg leading-relaxed">
                {'>'} Identified significant patterns in the data that were previously overlooked, leading to actionable insights.
              </li>
              <li className="text-lg leading-relaxed">
                {'>'} Achieved high model accuracy through careful feature engineering and hyperparameter tuning.
              </li>
              <li className="text-lg leading-relaxed">
                {'>'} Discovered unexpected correlations that opened new avenues for further investigation.
              </li>
              <li className="text-lg leading-relaxed">
                {'>'} Provided data-driven recommendations that influenced strategic decision-making.
              </li>
            </ul>
          </div>

          <div className="border-4 border-black p-8 mb-8">
            <h3 className="text-3xl mb-6 tracking-wide" style={{ fontFamily: 'monospace' }}>
              CHALLENGES & SOLUTIONS
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl mb-2 tracking-wide" style={{ fontFamily: 'monospace' }}>
                  Challenge: Data Quality Issues
                </h4>
                <p className="text-lg leading-relaxed opacity-80" style={{ fontFamily: 'monospace' }}>
                  Solution: Implemented robust data cleaning pipelines and validation checks to ensure data integrity throughout the analysis process.
                </p>
              </div>
              <div>
                <h4 className="text-xl mb-2 tracking-wide" style={{ fontFamily: 'monospace' }}>
                  Challenge: Computational Complexity
                </h4>
                <p className="text-lg leading-relaxed opacity-80" style={{ fontFamily: 'monospace' }}>
                  Solution: Optimized algorithms and utilized parallel processing techniques to handle large-scale datasets efficiently.
                </p>
              </div>
              <div>
                <h4 className="text-xl mb-2 tracking-wide" style={{ fontFamily: 'monospace' }}>
                  Challenge: Stakeholder Communication
                </h4>
                <p className="text-lg leading-relaxed opacity-80" style={{ fontFamily: 'monospace' }}>
                  Solution: Created intuitive visualizations and clear documentation to make complex findings accessible to non-technical audiences.
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex items-center gap-2 border-2 border-black px-6 py-3 hover:bg-black hover:text-white transition-all">
              <Github className="w-5 h-5" />
              <span style={{ fontFamily: 'monospace' }}>view code</span>
            </button>
            <button className="flex items-center gap-2 border-2 border-black px-6 py-3 hover:bg-black hover:text-white transition-all">
              <ExternalLink className="w-5 h-5" />
              <span style={{ fontFamily: 'monospace' }}>live demo</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
