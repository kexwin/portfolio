import React from 'react';
import { Terminal, Heart, Github, Linkedin, Mail, Code } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleMailClick = () => {
    window.open('mailto:shreehari.deshpande2005@gmail.com', '_blank');
  };

  return (
    <footer className="bg-black border-t border-green-500/30 relative">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-green-500/10"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Terminal className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold text-green-400 font-mono">kex</span>
            </div>
            <p className="text-green-300 font-mono text-sm">
              Penetrating systems, crafting code, and testing the digital frontier through innovative technology.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.github.com/kexwin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors p-2 bg-gray-900/50 rounded border border-green-500/30 hover:border-green-400"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/shreehari-b-deshpande"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors p-2 bg-gray-900/50 rounded border border-green-500/30 hover:border-green-400"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <button
                onClick={handleMailClick}
                className="text-green-400 hover:text-green-300 transition-colors p-2 bg-gray-900/50 rounded border border-green-500/30 hover:border-green-400"
              >
                <Mail className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-green-400 font-semibold mb-4 font-mono">{'>'} navigation</h3>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection('home')}
                className="block text-green-300 hover:text-green-400 transition-colors font-mono text-sm"
              >
                ./home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block text-green-300 hover:text-green-400 transition-colors font-mono text-sm"
              >
                ./about
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block text-green-300 hover:text-green-400 transition-colors font-mono text-sm"
              >
                ./projects
              </button>
              <button
                onClick={() => scrollToSection('blog')}
                className="block text-green-300 hover:text-green-400 transition-colors font-mono text-sm"
              >
                ./blog
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-green-300 hover:text-green-400 transition-colors font-mono text-sm"
              >
                ./contact
              </button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-green-400 font-semibold mb-4 font-mono">{'>'} services</h3>
            <div className="space-y-2 font-mono text-sm">
              <p className="text-green-300">Penetration Testing</p>
              <p className="text-green-300">Bug Bounty Hunting</p>
              <p className="text-green-300">Seasonal Programming</p>
              <p className="text-green-300">CTF Mentoring</p>
            </div>
          </div>

          {/* System Info */}
          <div>
            <h3 className="text-green-400 font-semibold mb-4 font-mono">{'>'} sys_info</h3>
            <div className="space-y-2 font-mono text-sm">
              <p className="text-green-300">shreehari.deshpande2005@gmail.com</p>
              <p className="text-green-300">Bengaluru, India</p>
              <div className="flex items-center space-x-2 mt-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-xs">System Online</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-green-500/30 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-green-300 flex items-center space-x-2 font-mono text-sm">
              <span>© 2025 kex.dev. Crafted with</span>
              <Heart className="h-4 w-4 text-red-400" />
              <span>and lots of caffeine.</span>
            </p>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <Code className="h-4 w-4 text-green-400" />
              <span className="text-green-300 font-mono text-sm">Built with Typescript & Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;