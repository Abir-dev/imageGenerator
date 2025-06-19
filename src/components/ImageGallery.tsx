import React from 'react';
import { History, Download } from 'lucide-react';
import { GeneratedImage } from './ImageGenerator';

interface ImageGalleryProps {
  images: GeneratedImage[];
  onSelectImage: (image: GeneratedImage) => void;
  currentImageId?: string;
}

export function ImageGallery({ images, onSelectImage, currentImageId }: ImageGalleryProps) {
  const handleDownload = async (image: GeneratedImage, e: React.MouseEvent) => {
    e.stopPropagation();
    
    const link = document.createElement('a');
    link.href = image.imageUrl;
    link.download = `ai-generated-${image.id}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
      <div className="flex items-center space-x-3 mb-6">
        <History className="w-5 h-5 text-purple-400" />
        <h3 className="text-lg font-semibold text-white">Recent Creations</h3>
        <span className="text-purple-300 text-sm">({images.length})</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image) => (
          <div
            key={image.id}
            onClick={() => onSelectImage(image)}
            className={`relative group cursor-pointer bg-white/5 rounded-lg overflow-hidden border transition-all duration-200 hover:scale-105 hover:bg-white/10 ${
              currentImageId === image.id 
                ? 'border-purple-400 ring-2 ring-purple-400/50' 
                : 'border-white/20 hover:border-white/30'
            }`}
          >
            <div className="aspect-square">
              <img
                src={image.imageUrl}
                alt={image.prompt}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-white text-xs line-clamp-2 mb-2">
                  {image.prompt}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-200 text-xs">
                    {image.timestamp.toLocaleDateString()}
                  </span>
                  <button
                    onClick={(e) => handleDownload(image, e)}
                    className="bg-green-500 hover:bg-green-600 text-white p-1.5 rounded transition-colors duration-200"
                    title="Download"
                  >
                    <Download className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>

            {currentImageId === image.id && (
              <div className="absolute top-2 right-2 w-3 h-3 bg-purple-400 rounded-full border-2 border-white"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}