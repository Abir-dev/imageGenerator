import React from 'react';
import { Users } from 'lucide-react';

const teamMembers = [
  {
    name: 'Jit Barui',
    image: '/src/public/Jit.jpeg',
    role: 'Developer'
  },
  {
    name: 'Arin Biswas',
    image: '/src/public/Arin.jpeg',
    role: 'Developer'
  },
  {
    name: 'Arindam Roy',
    image: '/src/public/Arindam.jpeg',
    role: 'Developer'
  },
  {
    name: 'Karim Shekh',
    image: '/src/public/karim.jpeg',
    role: 'Developer'
  }
];

export function Team() {
  return (
    <section className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 mt-16">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white">Meet Our Team</h2>
        </div>
        <p className="text-purple-200">This project was crafted by our talented team of developers</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105"
          >
            <div className="mb-4">
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-purple-400/50"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = `data:image/svg+xml;base64,${btoa(`
                    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="40" cy="40" r="40" fill="#6366f1"/>
                      <circle cx="40" cy="32" r="12" fill="white"/>
                      <path d="M20 60c0-11 9-20 20-20s20 9 20 20" fill="white"/>
                    </svg>
                  `)}`;
                }}
              />
            </div>
            <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
            <p className="text-purple-300 text-sm">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}