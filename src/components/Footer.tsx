import React from 'react';
import { Heart, Users } from 'lucide-react';

export function Footer() {
  const teamMembers = [
    'Jit Barui',
    'Arin Biswas',
    'Arindam Roy',
    'Karim Shekh'
  ];

  return (
    <footer className="bg-white/5 backdrop-blur-md border-t border-white/10 mt-16">
      <div className="container mx-auto px-4 py-8">
        {/* Team Credits */}
        <div className="text-center mb-6">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Users className="w-5 h-5 text-purple-400" />
            <h3 className="text-lg font-semibold text-white">Development Team</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {teamMembers.map((name, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <p className="text-purple-100 font-medium text-sm">{name}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Made with love */}
        <div className="flex items-center justify-center space-x-2 text-purple-200 border-t border-white/10 pt-6">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-pink-400 fill-current" />
          <span>using Hugging Face AI</span>
        </div>
      </div>
    </footer>
  );
}