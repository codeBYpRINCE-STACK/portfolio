import React from 'react';

const SkillCategory = ({ title, skills }) => (
  <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-red-500/40 transition-all group">
    <h3 className="text-xl font-bold text-red-500 mb-6 font-orbitron tracking-wider">{title}</h3>
    <div className="grid grid-cols-2 gap-4">
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col gap-2">
          <div className="flex justify-between text-xs font-mono text-gray-400">
            <span>{skill.name}</span>
          </div>
          <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-red-600 shadow-[0_0_10px_#ef4444] transition-all duration-1000"
              style={{ width: skill.level }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillData = [
    {
      title: "Backend & Systems",
      skills: [
        { name: ".NET / C#", level: "85%" },
        { name: "Dapper / SQL", level: "90%" },
        { name: "Python", level: "90%" },
        { name: "Java", level: "85%" }
      ]
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "Azure", level: "75%" },
        { name: "Docker", level: "80%" },
        { name: "AWS (Basics)", level: "70%" },
        { name: "Agile Methodologies", level: "95%" }
      ]
    },
    {
      title: "Development & Data",
      skills: [
        { name: "jQuery", level: "85%" },
        { name: "Power BI", level: "85%" },
        { name: "DSA", level: "90%" },
        { name: "REST APIs", level: "80%" }
      ]
    },
    {
      title: "Workflow & Tools",
      skills: [
        { name: "Git / GitHub", level: "90%" },
        { name: "JIRA", level: "85%" },
        { name: "Unix / Linux", level: "75%" },
        { name: "Code Optimization", level: "85%" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold font-orbitron text-white">Technical <span className="text-red-500">Competencies</span></h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Aspiring Software Engineer with a strong foundation in Data Structures, Algorithms, and scalable data-driven applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillData.map((category, index) => (
            <SkillCategory key={index} title={category.title} skills={category.skills} />
          ))}
        </div>

        {/* Certifications Badge Section */}
        <div className="mt-16 p-8 glass-card rounded-2xl border border-red-500/20 text-center">
          <h3 className="text-lg font-bold text-white mb-4">Professional Training</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-gray-300 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <span className="text-red-500">🏆</span> Deloitte Australia Data Analyst Simulation
            </div>
            <div className="flex items-center gap-2 text-gray-300 bg-white/5 px-4 py-2 rounded-full border border-white/10">
              <span className="text-red-500">🏆</span> Deloitte Technology Simulation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;