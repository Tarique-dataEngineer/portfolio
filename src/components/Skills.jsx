import React from 'react';
import { Code, Database, Layout, Server, Cloud, Shield, Brain, Gauge } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Layout,
    skills: [
      { name: 'React', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
      { name: 'TypeScript', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg' },
      { name: 'Next.js', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg' },
      { name: 'Vue.js', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg' },
      { name: 'Tailwind CSS', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-plain.svg' }
    ],
    color: 'indigo'
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg' },
      { name: 'Python', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
      { name: 'Java', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg' },
      { name: 'GraphQL', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg' },
      { name: 'Express', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg' }
    ],
    color: 'emerald'
  },
  {
    title: 'Database',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg' },
      { name: 'MongoDB', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg' },
      { name: 'Redis', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg' },
      { name: 'MySQL', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg' }
    ],
    color: 'violet'
  },
  {
    title: 'DevOps',
    icon: Cloud,
    skills: [
      { name: 'AWS', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original.svg' },
      { name: 'Docker', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg' },
      { name: 'Kubernetes', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg' },
      { name: 'Git', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg' },
      { name: 'Linux', logo: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg' }
    ],
    color: 'amber'
  }
];

const Skills = () => {
  const getColorClasses = (color) => {
    const colors = {
      indigo: { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-600' },
      emerald: { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-600' },
      violet: { bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-600' },
      amber: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-600' }
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600">
            Specialized in full-stack development with modern technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <div
                key={index}
                className={`${colors.bg} rounded-2xl p-6 border ${colors.border} hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <category.icon className={`${colors.text}`} size={24} />
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex flex-col items-center p-3 bg-white rounded-lg hover:shadow-md transition-all duration-300"
                    >
                      <img 
                        src={skill.logo} 
                        alt={skill.name}
                        className="w-8 h-8 mb-2"
                      />
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;