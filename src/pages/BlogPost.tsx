import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Terminal, FileText } from 'lucide-react';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Blog post data based on slug
  const blogPosts = {
    'My-First-Bug': {
      title: "My first Bug discovered",
      date: "2024-01-15",
      readTime: "8 min read",
      content: [
        "It all started when I was casually surfing Google late one night. No tools, no target, no plan. Just me poking around the internet, looking for something interesting, something juicy. I wasn't on a mission to find a vulnerability. I wasn’t even sure what I was doing. It was just one of those curious rabbit-hole moments.",
        "Somewhere in the middle of all that mindless scrolling, I came across a document. At first glance, it looked like a boring PDF. The kind you’d usually ignore. But something about it made me stop. It was a filled-out satellite imaging authorization form, and as I read through it, I realized this wasn’t just some generic paperwork. It mentioned COSMO-SkyMed, a joint satellite project by the Italian Space Agency (ASI) and NASA. My curiosity shifted gears real quick.",
        "The more I read, the more I couldn’t believe what I was seeing. This document wasn’t just informational, it was leaking real stuff. FTP credentials. A public IP address. Usernames. Email chains involving NASA’s Jet Propulsion Lab. Even coordinates for satellite tasking in disaster-hit areas. This wasn’t just sensitive. It was potentially exploitable.",
        "I sat there for a minute, just trying to absorb what I’d found. It didn’t feel real. I kept checking and rechecking the document, half expecting it to disappear or turn out to be fake. But it wasn’t. It was very real, and publicly accessible. That’s when I knew I had to report it, not just because it was exciting, but because it was the right thing to do.",
        "I searched around and found that NASA accepts vulnerability reports through Bugcrowd, under a government disclosure program. So I carefully put together everything I had. I made sure to explain where the file came from, why the exposure mattered, and how someone could potentially misuse it. No scripts, no exploits, just straightforward evidence of a serious oversight.",
        "After I submitted the report, I didn’t expect much. Honestly, I thought maybe someone had already reported it or that it might not even count. But to my surprise, it was accepted. They marked it as valid and impactful. And then came the part I never expected: I got added to NASA’s Hall of Fame.",
        "This was the first bug I ever reported, and somehow, it ended up being acknowledged by NASA. It still feels unreal.",
        "If there’s one thing I’ve learned from this, it’s that you don’t need fancy tools or expert skills to make a difference in cybersecurity. Sometimes, all it takes is curiosity, patience, and a lucky stumble across something that wasn’t meant to be public.",
        "And maybe, just maybe, one late-night Google session can land you in the Hall of Fame."
      ]
    },
    // 'building-secure-apis-with-zero-trust-architecture': {
    //   title: "Building Secure APIs with Zero Trust Architecture",
    //   date: "2024-01-10",
    //   readTime: "12 min read",
    //   content: [
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel magna vel nulla tempor consectetur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
    //     "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo."
    //   ]
    // }
  };

  const currentPost = blogPosts[slug as keyof typeof blogPosts];

  if (!currentPost) {
    return (
      <div className="min-h-screen bg-black text-green-300 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-green-400 mb-4 font-mono">404 - Post Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 bg-green-500 text-black px-6 py-3 rounded-lg hover:bg-green-400 transition-all duration-300 mx-auto font-mono"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>./go_back</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-green-300 relative">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-green-500/10"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors mb-8 font-mono"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>./back_to_home</span>
          </button>

          {/* Blog post container */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg border border-green-500/30 overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-black/50 border-b border-green-500/30">
              <div className="flex items-center space-x-2">
                <FileText className="h-4 w-4 text-green-400" />
                <span className="text-green-400 font-mono text-sm">blog_post.md</span>
              </div>
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>

            <div className="p-8">
              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-bold text-green-400 mb-6 font-mono leading-tight">
                {currentPost.title}
              </h1>

              {/* Meta info */}
              <div className="flex items-center space-x-4 mb-8 text-green-300 font-mono text-sm border-b border-green-500/30 pb-6">
                <div className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Published: {currentPost.date}</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{currentPost.readTime}</span>
                </div>
              </div>

              {/* Content */}
              <div className="prose prose-green max-w-none space-y-6">
                {currentPost.content.map((paragraph, index) => (
                  <p key={index} className="text-green-200 leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Terminal footer */}
              <div className="mt-12 pt-6 border-t border-green-500/30">
                <div className="flex items-center space-x-2 text-green-400 font-mono text-sm">
                  <Terminal className="h-4 w-4" />
                  <span>End of file - Press any key to continue...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;