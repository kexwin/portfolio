import React, { useEffect, useState } from 'react';
import { ArrowRight, Download, Github, Linkedin, Terminal } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'kex@terminal:~$ whoami';

  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
        setTimeout(typeWriter, 100);
      }
    };
    typeWriter();

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Matrix-style background */}
      <div className="absolute inset-0 opacity-10">
        <div className="matrix-bg"></div>
      </div>

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid-pattern"></div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-green-600 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Terminal Window */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gray-900/80 backdrop-blur-sm rounded-lg border border-green-500/30 shadow-2xl">
              <div className="flex items-center justify-between px-4 py-2 bg-gray-800/50 rounded-t-lg border-b border-green-500/30">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-green-400 text-sm font-mono">terminal</span>
                <div></div>
              </div>
              <div className="p-6 font-mono">
                <div className="text-green-400 text-lg mb-4">
                  {text}
                  <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
                </div>
                <div className="text-left space-y-2 text-green-300">
                  <div>{'>'} Cybersecurity Enthusiast</div>
                  <div>{'>'} Seasonal Programmer</div>
                  <div>{'>'} Bug Bounty Player</div>
                  <div>{'>'} Front-end Developer</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight font-mono">
              <span className="text-green-400">{'<'}</span>
              kexwin
              <span className="text-green-400">{'/>'}</span>
            </h1>
            <p className="text-xl md:text-2xl text-green-300 mb-8 max-w-3xl mx-auto leading-relaxed font-mono">
              Penetrating the digital realm, one line of code at a time.
              <br />
              <span className="text-green-500">Building the future through technology.</span>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://www.github.com/kexwin"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-900/50 rounded-lg border border-green-500/30 hover:border-green-400 hover:bg-green-500/10 transition-all duration-300 group backdrop-blur-sm"
            >
              <Github className="h-6 w-6 text-green-400 group-hover:text-green-300 transition-colors" />
            </a>
            <a
              href="https://www.linkedin.com/in/shreehari-b-deshpande"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gray-900/50 rounded-lg border border-green-500/30 hover:border-green-400 hover:bg-green-500/10 transition-all duration-300 group backdrop-blur-sm"
            >
              <Linkedin className="h-6 w-6 text-green-400 group-hover:text-green-300 transition-colors" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button
              onClick={() => scrollToSection('projects')}
              className="flex items-center space-x-2 bg-green-500 text-black px-8 py-4 rounded-lg hover:bg-green-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 font-mono font-bold"
            >
              <Terminal className="h-5 w-5" />
              <span>./my_projects</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <a
              href={`${process.env.PUBLIC_URL}/Resume-CV.pdf`}
              download="Resume-CV.pdf"
              className="flex items-center space-x-2 bg-transparent text-green-400 px-8 py-4 rounded-lg border border-green-500 hover:bg-green-500/10 transition-all duration-300 transform hover:scale-105 font-mono"
            >
              <Download className="h-5 w-5" />
              <span>./download_resume</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .matrix-bg {
          background-image:
            linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
          width: 100%;
          height: 100%;
          animation: matrix-scroll 20s linear infinite;
        }

        .grid-pattern {
          background-image:
            linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          width: 100%;
          height: 100%;
          animation: grid-move 30s linear infinite;
        }

        @keyframes matrix-scroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-20px);
          }
        }

        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
