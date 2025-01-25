import React, { useState, useEffect } from 'react';
import { Brain, Dumbbell, Users } from 'lucide-react';

declare global {
  interface Window {
    voiceflow: {
      chat: {
        open: () => void;
      };
    };
  }
}

function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openChatWidget = () => {
    if (window.voiceflow?.chat?.open) {
      window.voiceflow.chat.open();
    } else {
      console.warn('Voiceflow chat widget is not available.');
    }
  };

  return (
    <div className="relative">
      {/* Audio Background */}
      <div className="audio-background absolute top-0 left-0 w-full h-full z-0">
        <audio autoPlay loop volume={1.0}>
          <source src="https://drive.google.com/uc?export=download&id=1w5A45-m0NOf0WbsNONTdnjgL_C_tIZvN" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </div>

      {/* Video Background */}
      <div className="video-background absolute top-0 left-0 w-full h-full z-0">
        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source src="https://cdn.coverr.co/videos/coverr-premium-shadow-boxing-in-the-woods-6055/1080p.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Hero Section */}
      <section className="hero-content min-h-screen flex flex-col justify-center items-center text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Ready to Break Free and Become the <br />
          <span className="text-red-600">Best Version of Yourself?</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl">
          Transform Your Life with Jonathan Maloney – Your Guide to Strength and Confidence
        </p>
        <button
          onClick={openChatWidget}
          className="cta-button px-6 py-3 text-lg font-bold text-white bg-red-600 rounded-lg hover:bg-red-700 transition duration-300"
        >
          Get Started
        </button>
      </section>

      {/* Program Details */}
      <section className="py-20 px-6 bg-gradient-to-b from-black via-zinc-900 to-black text-white relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold mb-12 text-center">
            A Program Designed to <span className="text-red-600">Transform</span> Every Part of Your Life
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="program-card bg-zinc-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <Dumbbell className="icon-outline mb-6 text-red-600" size={48} />
              <h3 className="text-2xl font-bold mb-4">Structured Fitness & Nutrition Plan</h3>
              <p className="text-lg text-gray-300">
                Custom-built to match your lifestyle and goals, so you get stronger, fitter, and healthier.
              </p>
            </div>
            <div className="program-card bg-zinc-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <Brain className="icon-outline mb-6 text-red-600" size={48} />
              <h3 className="text-2xl font-bold mb-4">Mindset & Lifestyle Coaching</h3>
              <p className="text-lg text-gray-300">
                Build self-belief, resilience, and daily routines that set you up for success.
              </p>
            </div>
            <div className="program-card bg-zinc-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300">
              <Users className="icon-outline mb-6 text-red-600" size={48} />
              <h3 className="text-2xl font-bold mb-4">Community Support</h3>
              <p className="text-lg text-gray-300">
                Join a community of like-minded people on the same journey, supporting each other.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
