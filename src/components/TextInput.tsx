import React, { useState } from 'react';
import { Wand2, Lightbulb } from 'lucide-react';

interface TextInputProps {
  onGenerate: (prompt: string) => void;
  isGenerating: boolean;
}

const promptSuggestions = [
  "A majestic dragon flying over a crystal mountain at sunset",
  "A cyberpunk city with neon lights reflecting in puddles",
  "A peaceful zen garden with cherry blossoms and koi fish",
  "A steampunk airship floating through cloudy skies",
  "A magical forest with glowing mushrooms and fireflies",
  "A vintage robot reading a book in a cozy library"
];

export function TextInput({ onGenerate, isGenerating }: TextInputProps) {
  const [prompt, setPrompt] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim() && !isGenerating) {
      onGenerate(prompt.trim());
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    setPrompt(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the image you want to create..."
            className="w-full h-32 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-3 text-white placeholder-purple-200 resize-none focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-200"
            disabled={isGenerating}
          />
          <div className="absolute bottom-3 right-3 text-purple-300 text-sm">
            {prompt.length}/500
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            disabled={!prompt.trim() || isGenerating}
            className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 disabled:from-gray-500 disabled:to-gray-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 disabled:cursor-not-allowed group"
          >
            <Wand2 className={`w-5 h-5 ${isGenerating ? 'animate-spin' : 'group-hover:rotate-12'} transition-transform duration-200`} />
            <span>{isGenerating ? 'Creating Magic...' : 'Generate Image'}</span>
          </button>

          <button
            type="button"
            onClick={() => setShowSuggestions(!showSuggestions)}
            className="bg-white/10 hover:bg-white/20 text-purple-200 font-medium py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center space-x-2 border border-white/20"
          >
            <Lightbulb className="w-5 h-5" />
            <span>Ideas</span>
          </button>
        </div>
      </form>

      {showSuggestions && (
        <div className="mt-4 space-y-2 animate-in slide-in-from-top-2 duration-200">
          <h4 className="text-purple-200 font-medium">Try these prompts:</h4>
          <div className="grid gap-2">
            {promptSuggestions.map((suggestion, index) => (
              <button
                key={index}
                onClick={() => handleSuggestionClick(suggestion)}
                className="text-left p-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-white/20 text-purple-100 transition-all duration-200 text-sm"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}