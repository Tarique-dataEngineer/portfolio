import React from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A scalable e-commerce platform handling 100k+ monthly users. Features include real-time inventory, AI-powered recommendations, and seamless payment integration.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
    stats: {
      users: '10k+',
      rating: '4.9',
      uptime: '99.9%'
    },
    githubLink: 'https://github.com',
    liveLink: 'https://example.com',
  },
  {
    title: 'AI Task Manager',
    description: 'Smart task management platform using AI to prioritize and categorize tasks. Integrates with popular tools like Slack and Jira.',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91',
    technologies: ['React', 'Python', 'TensorFlow', 'Docker'],
    stats: {
      users: '5k+',
      rating: '4.8',
      tasks: '10k+'
    },
    githubLink: 'https://github.com',
    liveLink: 'https://example.com',
  },
  {
    title: 'Climate Analytics Dashboard',
    description: 'Real-time climate data visualization platform used by environmental researchers. Processes terabytes of satellite data for accurate predictions.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b',
    technologies: ['React', 'Python', 'AWS', 'D3.js'],
    stats: {
      Data: 'API',
      accuracy: '99.5%',
      countries: '15+'
    },
    githubLink: 'https://github.com',
    liveLink: 'https://example.com',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing some of my best work in software development and system architecture
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-indigo-500 transition-all duration-300 hover:shadow-xl">
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-indigo-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-lg">
                  {Object.entries(project.stats).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-lg font-bold text-indigo-600">{value}</div>
                      <div className="text-sm text-gray-500 capitalize">{key}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
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