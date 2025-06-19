import React, { useState } from 'react';
import { ImageGenerator } from './components/ImageGenerator';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Team } from './components/Team';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <ImageGenerator />
          <Team />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;