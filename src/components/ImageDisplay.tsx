import React from 'react';
import { Download, Clock, Palette } from 'lucide-react';
import { GeneratedImage } from './ImageGenerator';
import { LoadingSpinner } from './LoadingSpinner';

interface ImageDisplayProps {
  image: GeneratedImage | null;
  isGenerating: boolean;
}

export function ImageDisplay({ image, isGenerating }: ImageDisplayProps) {
  const handleDownload = async () => {
    if (!image) return;

    const link = document.createElement('a');
    link.href = image.imageUrl;
    link.download = `ai-generated-${image.id}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (isGenerating) {
    return (
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
        <LoadingSpinner />
      </div>
    );
  }

  if (!image) {
    return (
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-12 border border-white/20 text-center">
        <div className="max-w-md mx-auto space-y-4">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto">
            <Palette className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white">Ready to Create</h3>
          <p className="text-purple-200">
            Enter a description above and click "Generate Image" to bring your imagination to life.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
      <div className="space-y-4">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-white mb-2">Generated Image</h3>
            <p className="text-purple-200 text-sm leading-relaxed">{image.prompt}</p>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1 text-purple-300 text-sm">
              <Clock className="w-4 h-4" />
              <span>{image.timestamp.toLocaleTimeString()}</span>
            </div>
            <button
              onClick={handleDownload}
              className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg transition-colors duration-200 flex items-center space-x-1"
              title="Download image"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="relative group">
          <img
            src={image.imageUrl}
            alt={image.prompt}
            className="w-full h-auto max-h-96 object-contain bg-black/20 rounded-xl border border-white/20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-xl" />
        </div>
      </div>
    </div>
  );
}