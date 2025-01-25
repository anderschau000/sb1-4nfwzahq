import React, { useState, useEffect } from 'react';

function Clients() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const transformations = [
    {
      before: "/transformation1-before.jpg",
      after: "/transformation1-after.jpg",
      text: "20kg weight loss and complete lifestyle transformation"
    },
    {
      before: "/transformation2-before.jpg",
      after: "/transformation2-after.jpg",
      text: "From struggling with confidence to achieving peak physical condition"
    }
  ];

  const testimonials = [
    {
      text: "The man to the right now stands with confidence & self belief. I set myself up every morning with a plan & process to execute. Coach Johnny helped me climb over these obstacles & reach the top of the mountain.",
      image: "/testimonial1.jpg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % transformations.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="pt-20 bg-gradient-to-b from-black via-zinc-900 to-black">
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title">Client <span className="text-red-600">Transformations</span></h2>
          <div className="carousel-container">
            <div 
              className="carousel" 
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {transformations.map((item, index) => (
                <div key={index} className="carousel-item">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="relative">
                      <img src={item.before} alt="Before" className="rounded-lg shadow-xl" />
                      <span className="absolute top-4 left-4 bg-red-600 text-white px-4 py-1 rounded-full">Before</span>
                    </div>
                    <div className="relative">
                      <img src={item.after} alt="After" className="rounded-lg shadow-xl" />
                      <span className="absolute top-4 right-4 bg-red-600 text-white px-4 py-1 rounded-full">After</span>
                    </div>
                  </div>
                  <p className="text-center text-xl mt-6">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title">Client <span className="text-red-600">Testimonials</span></h2>
          <div className="carousel-container">
            <div className="grid md:grid-cols-2 gap-12">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card">
                  <p className="text-lg mb-6">{testimonial.text}</p>
                  <img 
                    src={testimonial.image} 
                    alt={`Testimonial ${index + 1}`}
                    className="rounded-lg shadow-xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Clients;