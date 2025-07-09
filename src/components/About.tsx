import React from 'react';
import { Code2, Database, Shield, Zap, Terminal, Cpu, Network, Lock } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Frontend Hacking",
      description: "React, TypeScript, Next.js, Tailwind CSS",
      color: "from-green-400 to-green-500"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend Exploitation",
      description: "Node.js, Python, PostgreSQL, MongoDB",
      color: "from-green-400 to-green-500"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security Research",
      description: "Pentesting, Vulnerability Assessment, Bug Bounty Programs, CTFs",
      color: "from-green-400 to-green-500"
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Network Analysis",
      description: "Traffic Analysis, Protocol Reverse Engineering",
      color: "from-green-400 to-green-500"
    }
  ];

  return (
    <section id="about" className="py-20 bg-black relative">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-500/20 via-transparent to-green-500/20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-4 font-mono">
            &gt; ./about_kex
          </h2>
          <p className="text-xl text-green-300 max-w-2xl mx-auto font-mono">
            Penetrating systems, crafting code, and building the digital future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-green-500/30 p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Terminal className="h-5 w-5 text-green-400" />
                <span className="text-green-400 font-mono">kex@system:~$</span>
              </div>
              <p className="text-lg text-green-300 leading-relaxed font-mono mb-4">
                &gt; Initializing profile...
                <br />
                &gt; Loading expertise modules...
                <br />
                &gt; Status: ONLINE
              </p>
              <p className="text-lg text-green-200 leading-relaxed">
                I'm a 20 year old digital architect who thrives in the intersection of development and security. 
                My journey began with curiosity about system vulnerabilities and evolved into a passion for 
                testing robust, secure applications that can withstand the test of time and attacks.
                I am also quite fond of bug bounty programs and have earned the NASA's Hall of Fame on my first try.
              </p>
            </div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-green-500/30 p-6">
              <p className="text-lg text-green-200 leading-relaxed mb-4">
                When I'm not reverse engineering protocols or crafting elegant code, you'll find me 
                contributing to open-source security tools, researching zero-day vulnerabilities, 
                or sharing knowledge with the cybersecurity community. I have mentored a couple of members of the ZTM community.
                Some of my prominent skills include:
              </p>
              <div className="flex flex-wrap gap-3">
                {["React", "Python", "C", "Typescript", "Docker", "Payload creation", "Linux", "Wireshark", "Javascript", "NS2", "OSINT", "Metasploit Framework", "Nmap"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-green-500/20 text-green-300 rounded border border-green-500/30 text-sm font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-2xl p-1 border border-green-500/30">
              <div className="w-full h-full bg-black/80 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                <div className="text-center">
                  <div className="relative mb-6">
                    <Cpu className="h-24 w-24 text-green-400 mx-auto animate-pulse" />
                    <div className="absolute inset-0 bg-green-400/20 rounded-full blur-xl"></div>
                  </div>
                  <p className="text-green-400 font-semibold font-mono">&gt; system.exe</p>
                  <p className="text-green-300 text-sm font-mono mt-2">status: Operational</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group p-6 bg-gray-900/30 backdrop-blur-sm rounded-lg border border-green-500/30 hover:border-green-400 hover:bg-green-500/5 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${skill.color} mb-4 border border-green-500/30`}>
                <div className="text-black">
                  {skill.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-green-400 mb-2 font-mono">{skill.title}</h3>
              <p className="text-green-300 font-mono text-sm">{skill.description}</p>
            </div>
          ))}
        </div>

        {/* Terminal-style stats */}
        <div className="mt-16 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-green-500/30 p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Terminal className="h-5 w-5 text-green-400" />
            <span className="text-green-400 font-mono">system_stats.sh</span>
          </div>
          <div className="grid md:grid-cols-4 gap-6 font-mono text-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">5+</div>
              <div className="text-green-300">Hackathons Organized</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">3+</div>
              <div className="text-green-300">CTFs Hosted</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">4+</div>
              <div className="text-green-300">Vulnerabilities Reported</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400 mb-1">24/7</div>
              <div className="text-green-300">System Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;