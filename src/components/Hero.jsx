import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import profile_pic from '.././assets/profile_pic.jpeg'




const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex items-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-30"></div>
              <img
                src={profile_pic}
                alt="Profile"
                className="relative w-72 h-72 object-cover rounded-full border-4 border-white shadow-xl"
              />
            </div>
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <div className="space-y-4 mb-8">
              <h1 className="text-6xl font-bold text-gray-900 mb-4">
                Tarique Israr
              </h1>
              <h2 className="text-2xl text-indigo-600 font-medium">
                AI/ML Engineer
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                2+ years of experience crafting exceptional digital experiences
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <a href="https://github.com/Tarique-dataEngineer" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all">
                <Github size={20} />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/md-tarique-israr-35426a26b/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all">
                <Linkedin size={20} />
                LinkedIn
              </a>
              <a href="mailto:john.doe@example.com"
                className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-all">
                <Mail size={20} />
                Email
              </a>
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-gray-600">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                Available for freelance projects
              </div>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'React', 'Node.js', 'AWS', 'Python','Analytics'].map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;