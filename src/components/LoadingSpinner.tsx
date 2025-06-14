import React from 'react';
import { Loader2, Sparkles } from 'lucide-react';

export function LoadingSpinner() {
  return (
    <div className="text-center space-y-6">
      <div className="relative">
        <div className="w-20 h-20 mx-auto">
          <Loader2 className="w-20 h-20 text-purple-400 animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-pink-400 animate-pulse" />
          </div>
        </div>
      </div>
      
      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-white">Creating Your Masterpiece</h3>
        <p className="text-purple-200">This may take a few moments...</p>
      </div>

      <div className="flex justify-center space-x-2">
        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  );
}