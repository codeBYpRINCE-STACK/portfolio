import React from 'react';

const projects = [
  {
    title: "E-Commerce Sales Management System",
    tools: ["Python", "SQL", "Power BI"],
    period: "Oct 2025 - Jan 2026",
    metrics: "1.3M+ Records Handled",
    github: "https://github.com/codeBYpRINCE-STACK/Analysis-of-Ecommerce-retailer--Target", 
    description: "Architected a robust backend data processing system designed for high-volume sales analysis. I optimized over 25 SQL queries, which resulted in a 32% reduction in execution time. The project involved designing modular code for data validation and business logic, culminating in Power BI dashboards that visualize over 3.5 Crore in revenue insights.",
  },
  {
    title: "GitGather EMS (Event Management System)",
    tools: ["Python", "SQL", "Git"],
    period: "Recent Development",
    metrics: "Full-Stack Event Orchestration",
    github: "https://github.com/codeBYpRINCE-STACK/GitGather_EMS",
    description: "Developed a comprehensive backend system for managing organizational event data and user enrollments. Implemented CRUD operations with optimized relational schemas and followed OOP principles to ensure a modular, maintainable codebase for tracking attendance and performance metrics.",
  },
  {
    title: "Data Processing & Validation Toolkit",
    tools: ["Python", "SQL", "Pandas"],
    period: "Recent Development",
    metrics: "5-Layer Validation Architecture",
    github: "https://github.com/codeBYpRINCE-STACK/data-validation-toolkit",
    description: "Architected a modular framework for high-efficiency data integrity. Implemented 5 layers of validation: Normalization (SQL TRIM/UPPER), Structural Integrity (account balance verification), Logical Validation (null/negative scans), Anomaly Detection (statistical outliers), and Feature Engineering (risk-level labeling).",
  },
  {
    title: "Financial Reporting Automation System",
    tools: ["Python", "SQL"],
    period: "June 2025 - Sept 2025",
    metrics: "40% Manual Effort Reduction",
    github: "https://github.com/codeBYpRINCE-STACK/automated-financial-pipeline",
    description: "Engineered an automated pipeline to process and analyze 50,000+ financial records. By developing reusable Python modules for data transformation and validation, I improved system accuracy by 18%. This system effectively eliminated repetitive manual tasks, boosting workflow efficiency by 40%.",
  },
  {
    title: "Student Management System",
    tools: ["Java", "SQL Server", "JDBC"],
    period: "Feb 2025 - Apr 2025",
    metrics: "Optimized CRUD Operations",
    github: "https://github.com/codeBYpRINCE-STACK/SMS",
    description: "Developed a Java-based application to manage enrollment, attendance, and performance tracking. I designed a relational database schema in SQL Server and used JDBC for seamless connectivity. The application was built on Object-Oriented Programming principles to ensure a modular and maintainable codebase.",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-transparent">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold font-orbitron text-white">
            Technical <span className="text-red-500">Arsenal</span>
          </h2>
          <div className="h-1 w-20 bg-red-500 mt-2"></div>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="glass-card flex flex-col md:flex-row gap-8 p-8 rounded-3xl border border-white/5 group hover:border-red-500/30 transition-all"
            >
              <div className="md:w-1/3">
                <div className="text-red-500 font-mono text-sm mb-2">{project.period}</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool, i) => (
                    <span 
                      key={i} 
                      className="text-[10px] uppercase tracking-widest border border-red-500/50 px-2 py-1 rounded text-red-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="p-3 bg-red-500/10 rounded-lg inline-block border border-red-500/20">
                  <span className="text-red-400 font-bold">{project.metrics}</span>
                </div>
              </div>
              
              <div className="md:w-2/3 flex flex-col justify-center">
                <p className="text-gray-400 leading-relaxed text-lg">
                  {project.description}
                </p>
                <div className="mt-6">
                  {/* Link now points directly to GitHub repositories */}
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-red-400 font-bold inline-flex items-center gap-2 hover:gap-4 transition-all"
                  >
                    View on GitHub <span className="text-xl">↗</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;