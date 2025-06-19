import React, { useState } from 'react';
import { TextInput } from './TextInput';
import { ImageDisplay } from './ImageDisplay';
import { ImageGallery } from './ImageGallery';
import { generateImage } from '../services/huggingFace';

export interface GeneratedImage {
  id: string;
  prompt: string;
  imageUrl: string;
  timestamp: Date;
}

export function ImageGenerator() {
  const [currentImage, setCurrentImage] = useState<GeneratedImage | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [imageHistory, setImageHistory] = useState<GeneratedImage[]>([]);

  const handleGenerate = async (prompt: string) => {
    if (!prompt.trim()) return;

    setIsGenerating(true);
    setError(null);

    try {
      const imageBlob = await generateImage(prompt);
      const imageUrl = URL.createObjectURL(imageBlob);
      
      const newImage: GeneratedImage = {
        id: Date.now().toString(),
        prompt,
        imageUrl,
        timestamp: new Date()
      };

      setCurrentImage(newImage);
      setImageHistory(prev => [newImage, ...prev].slice(0, 12)); // Keep last 12 images
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate image');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSelectFromHistory = (image: GeneratedImage) => {
    setCurrentImage(image);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold text-white">
          Describe your vision, watch it come to life
        </h2>
        <p className="text-purple-200 max-w-2xl mx-auto">
          Enter a detailed description of the image you want to create. 
          Be specific about colors, style, mood, and composition for best results.
        </p>
      </div>

      <TextInput 
        onGenerate={handleGenerate} 
        isGenerating={isGenerating}
      />

      {error && (
        <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 text-red-200 text-center">
          {error}
        </div>
      )}

      <ImageDisplay 
        image={currentImage}
        isGenerating={isGenerating}
      />

      {imageHistory.length > 0 && (
        <ImageGallery 
          images={imageHistory}
          onSelectImage={handleSelectFromHistory}
          currentImageId={currentImage?.id}
        />
      )}
    </div>
  );
}