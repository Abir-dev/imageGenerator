import React from 'react';
import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white/5 backdrop-blur-md border-t border-white/10 mt-16">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center space-x-2 text-purple-200">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-pink-400 fill-current" />
          <span>using Hugging Face AI</span>
        </div>
      </div>
    </footer>
  );
}