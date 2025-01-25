import React from 'react';
import { Brain, Dumbbell } from 'lucide-react';

function Story() {
  return (
    <div className="pt-20">
      <section className="py-20 px-6 bg-gradient-to-b from-black via-zinc-900 to-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title">My <span className="text-red-600">Journey</span></h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">
                Hey, I'm Jonathan Maloney, and I'm here to help you break the cycle and finally create a life you love—in a body you're proud of. For 20 years, I was caught in the grips of gambling, binge drinking, and choices that kept me from the life I knew I wanted.
              </p>
              <p className="text-lg mb-6">
                Through commitment, fitness, and a complete mindset shift, I lost 20kg, built a physique I'm proud of, and transformed my life. Now, it's my mission to help others do the same.
              </p>
              <div className="flex gap-6 mt-8">
                <Brain className="icon-outline" />
                <Dumbbell className="icon-outline" />
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1737743247943-491321a36659?q=80&w=1940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                alt="Jonathan's Transformation"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto max-w-6xl">
          <h2 className="section-title">Why Most People <span className="text-red-600">Struggle</span></h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="program-card">
              <p className="text-lg mb-6">
                You know what it feels like to start strong, only to get pulled back by the same habits, doubts, and challenges. Maybe you've tried diets, gym routines, or even coaches before—yet here you are, feeling stuck.
              </p>
              <p className="text-lg">
                My coaching program is built for people who are ready to break out of that cycle. I'm here to give you clear direction, unwavering accountability, and a roadmap to lasting change.
              </p>
            </div>
            <div className="relative">
              <img 
                src="/speaking.jpg" 
                alt="Jonathan Speaking"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Story;