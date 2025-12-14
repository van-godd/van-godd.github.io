import {
  Code2,
  Database,
  BarChart3,
  Braces,
  Cloud,
  GitBranch,
} from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: "PYTHON",
      skills: [
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "TensorFlow",
        "OpenCV",
        "PIL",
        "SciPy",
        "Statsmodels",
      ],
    },
    {
      icon: Database,
      title: "SQL",
      skills: [
        "PostgreSQL",
        "Window Functions",
        "CTEs",
        "Subqueries",
        "Aggregate Functions",
      ],
    },
    {
      icon: Code2,
      title: "R",
      skills: ["Ggplot2", "Dplyr", "Tidyr", "Lubridate"],
    },
    {
      icon: BarChart3,
      title: "POWER BI",
      skills: [
        "DAX",
        "Power Query",
        "Data Modeling",
        "Interactive Dashboards",
        "Storytelling",
      ],
    },
    {
      icon: Braces,
      title: "MACHINE LEARNING",
      skills: [
        "Regression",
        "Classification",
        "Clustering",
        "CNNs",
        "LSTM",
      ],
    },
    {
      icon: Cloud,
      title: "CLOUD & TOOLS",
      skills: [
        "Azure",
        "Snowflake",
        "Git",
        "GitHub",
        "GitLab",
        "PowerApps",
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-5xl mb-16 text-center tracking-wider"
            style={{ fontFamily: "monospace" }}
          >
            skills & technologies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="border-2 border-white p-6 hover:bg-white hover:text-black transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <category.icon className="w-8 h-8 group-hover:animate-pulse" />
                  <h3
                    className="text-2xl tracking-wide"
                    style={{ fontFamily: "monospace" }}
                  >
                    {category.title}
                  </h3>
                </div>
                <ul
                  className="space-y-2"
                  style={{ fontFamily: "monospace" }}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <li
                      key={skillIndex}
                      className="text-sm opacity-80 group-hover:opacity-100"
                    >
                      {">"} {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}