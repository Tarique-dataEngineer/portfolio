import React from 'react';
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';
import profile_pic from '.././assets/profile_pic.jpeg'

const About = () => {
  return (
    <div className="pt-20">
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">About Me</h1>
            
            <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
              <div className="flex flex-col md:flex-row gap-8 items-center mb-8">
                <img
                  src={profile_pic}
                  alt="Profile"
                  className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
                />
                <div>
                  <h2 className="text-2xl font-bold mb-2">Tarique Israr</h2>
                  <p className="text-indigo-600 font-medium mb-4">AI/ML Engineer</p>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin size={18} />
                      <span>New Delhi</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase size={18} />
                      <span>2+ years of experience</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={18} />
                      <span>Available for freelance</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-gray-600 leading-relaxed mb-6">
                  I'm a passionate AI/ML engineer with over a 2+ years of experience in building scalable web applications
                  and distributed systems with AI Support. My journey in technology began with a deep curiosity about how things work, 
                  which inspired me to pursue computer science and eventually specialize in machine learning, big data, and AI-driven solutions. 
                  Over the years, I have developed a passion for creating impactful web applications and innovative products tailored for companies and individual clients.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                Now focusing on developing custom web applications, predictive models, and AI solutions that 
                solve real-world problems for businesses and individuals. My mission is to bring ideas to life 
                through technology, combining innovation with practical results.
                </p>
                <p className="text-gray-600 leading-relaxed">
                Let’s work together to create something extraordinary!
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <Briefcase className="text-indigo-600" />
                  Work Experience
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      role: "ML/AI Engineer",
                      company: "GarudaUAV Soft Solutions",
                      period: "May 2023 - Present",
                      description: "Leading data annotation team for Training and Devloping of AI/ML applications"
                    },
                    {
                      role: "Big Data And Business Analytics",
                      company: "LG Electronics Pvt Ltd",
                      period: "July 2023 - April 2024",
                      description: "Collecting and analyzing data, building an NLP model"
                    },
                    
                  ].map((job, index) => (
                    <div key={index} className="border-l-2 border-indigo-200 pl-4">
                      <h4 className="font-semibold text-gray-800">{job.role}</h4>
                      <p className="text-indigo-600">{job.company}</p>
                      <p className="text-sm text-gray-500">{job.period}</p>
                      <p className="text-gray-600 mt-1">{job.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <GraduationCap className="text-indigo-600" />
                  Education
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      degree: "Post Graduate Diploma in Big Data",
                      school: "Jawaharlal Nehru University - New Delhi",
                      period: "2022 - 2023",
                      description: "Specialized in Data Science"
                    },
                    {
                      degree: "Bachelor's in Information Technology",
                      school: "TMBU",
                      period: "2017 - 2021",
                      description: "Specialized in Computer Science"
                    }
                  ].map((edu, index) => (
                    <div key={index} className="border-l-2 border-indigo-200 pl-4">
                      <h4 className="font-semibold text-gray-800">{edu.degree}</h4>
                      <p className="text-indigo-600">{edu.school}</p>
                      <p className="text-sm text-gray-500">{edu.period}</p>
                      <p className="text-gray-600 mt-1">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;