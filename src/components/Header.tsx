import React from 'react';
import { Sparkles } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center space-x-3">
          <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white">AI Image Studio</h1>
            <p className="text-purple-200">Transform your words into stunning visuals</p>
          </div>
        </div>
      </div>
    </header>
  );
}