import React from 'react';
import { ExternalLink, Github, ArrowRight, Terminal, Lock, Shield, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Deep Recon Tool",
      description: "An educational Python script that simulates a real-world information stealer by extracting saved Chrome passwords, clipboard contents, and system details to help students understand cybersecurity vulnerabilities, forensic techniques, and ethical hacking practices.",
      technologies: ["Python", "Cryptography", "Recon", "Digital Forensics"],
      github: "https://github.com/kexwin/Deep-Recon",
      featured: false,
      type: "OffSec"
    },
    {
      title: "Command and Control (C2) Framework",
      description: "A lightweight and extensible C2 framework built in Python using Flask and custom agents. Provides a CLI interface for managing multiple agents, executing remote commands, and simulating red team adversary emulation scenarios.",
      technologies: ["Python", "Flask", "UUID", "Requests", "Subprocess"],
      github: "https://github.com/kexwin/C2-Server",
      featured: true,
      type: "Red Team Simulation"
    },
    {
      title: "Stealth Remote Access Tool",
      description: "A fully undetectable backdoor implementation using sockets. Employs advanced evasion techniques, encrypted communication channels, and persistence mechanisms for red team operations.",
      technologies: ["Python", "Sockets", "Encryption", "Remote Shell"],
      github: "https://github.com/kexwin/FUD-Backdoor",
      featured: false,
      type: "Penetration Testing"
    },
    {
      title: "FTP Penetration Suite",
      description: "Advanced FTP cracking tool with brute-force and dictionary attack logics. Features multi-threaded processing, custom wordlist support, and comprehensive logging for security assessments.",
      technologies: ["Python", "Threading", "Brute-force", "ftplib"],
      github: "https://github.com/kexwin/FTP-Cracker",
      featured: false,
      type: "OffSec"
    },
    {
      title: "SSH Botnet Controller",
      description: "A Python-based botnet framework leveraging SSH to manage multiple remote devices. Enables distributed command execution and simulates SYN flood DDoS attacks for educational cybersecurity research and red team practice.",
      technologies: ["Python", "Paramiko", "SSH", "Networking"],
      github: "https://github.com/kexwin/SSH-Botnet",
      featured: true,
      type: "Cybersecurity Research"
    },
    {
      title: "PDF Security Analyzer",
      description: "A PDF file cracking tool that performs brute-force attacks using either dictionary-based methods or dynamically generated passwords with customizable character sets and lengths, enabling the extraction of password-protected content across a wide range of complexity levels.",
      technologies: ["Python", "pikepdf", "Multiprocessing"],
      github: "https://github.com/kexwin/PDF-Cracker",
      featured: false,
      type: "Regex"
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Security': return <Shield className="h-4 w-4" />;
      case 'Penetration Testing': return <Lock className="h-4 w-4" />;
      case 'Cryptography': return <Lock className="h-4 w-4" />;
      default: return <Code className="h-4 w-4" />;
    }
  };

  const handleViewAllProjects = () => {
    window.open('https://github.com/kexwin?tab=repositories', '_blank');
  };

  return (
    <section id="projects" className="py-20 bg-gray-900 relative">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-green-500/10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-4 font-mono">
            {'>'} ./projects --list
          </h2>
          <p className="text-xl text-green-300 max-w-2xl mx-auto font-mono">
            A collection of exploits, tools, and applications that push the boundaries of technology.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-black/50 backdrop-blur-sm rounded-lg overflow-hidden border border-green-500/30 hover:border-green-400 transition-all duration-300"
            >
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-2 bg-gray-900/50 border-b border-green-500/30">
                <div className="flex items-center space-x-2">
                  <Terminal className="h-4 w-4 text-green-400" />
                  <span className="text-green-400 font-mono text-sm">project.exe</span>
                </div>
                <div className="flex items-center space-x-2">
                  {getTypeIcon(project.type)}
                  <span className="text-green-300 text-xs font-mono">{project.type}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-green-400 mb-3 font-mono">{project.title}</h3>
                <p className="text-green-200 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-green-500/20 text-green-300 rounded border border-green-500/30 text-sm font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-green-300 hover:text-green-400 transition-colors font-mono"
                  >
                    <Github className="h-5 w-5" />
                    <span>source</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-green-400 mb-8 text-center font-mono">{'>'} ./other_projects</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {otherProjects.map((project, index) => (
                <div
                  key={index}
                  className="group p-6 bg-black/30 backdrop-blur-sm rounded-lg border border-green-500/30 hover:border-green-400 hover:bg-green-500/5 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-2">
                      <h4 className="text-xl font-bold text-green-400 font-mono">{project.title}</h4>
                      <div className="flex items-center space-x-1">
                        {getTypeIcon(project.type)}
                        <span className="text-green-300 text-xs font-mono">{project.type}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-300 hover:text-green-400 transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                  <p className="text-green-200 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs border border-green-500/30 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* View All Projects CTA */}
        <div className="text-center">
          <button 
            onClick={handleViewAllProjects}
            className="flex items-center space-x-2 bg-green-500 text-black px-8 py-3 rounded-lg hover:bg-green-400 transition-all duration-300 transform hover:scale-105 mx-auto font-mono font-bold"
          >
            <Terminal className="h-5 w-5" />
            <span>./view_all_projects</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;