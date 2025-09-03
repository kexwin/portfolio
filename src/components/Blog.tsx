import React from 'react';
import { Calendar, Clock, ArrowRight, Terminal, FileText, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
  const navigate = useNavigate();

  const blogPosts = [
    {
      title: "My First Bug Discovered",
      excerpt: "I reported a critical bug of NASA and received a Hall of Fame on my very first attempt to discover bugs.",
      date: "4th July, 2025",
      readTime: "5 mins read",
      tags: ["Bug Bounty", "Hall of Fame", "NASA"],
      slug: "My-First-Bug",
      featured: true
    },
    // {
    //   title: "Building Secure APIs with Zero Trust Architecture",
    //   excerpt: "A comprehensive guide to implementing zero trust principles in API design and development for maximum security.",
    //   date: "2024-01-10",
    //   readTime: "12 min read",
    //   tags: ["API", "Security", "Architecture"],
    //   slug: "building-secure-apis-with-zero-trust-architecture",
    //   featured: true
    // }
  ];

  const handlePostClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <section id="blog" className="py-20 bg-black relative">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-green-500/10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-4 font-mono">
            {'>'} ./blog --recent
          </h2>
          <p className="text-xl text-green-300 max-w-2xl mx-auto font-mono">
            Insights, exploits, and technical deep-dives into the world of cybersecurity and development.
          </p>
        </div>

        {/* Featured Posts */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-green-400 mb-8 font-mono flex items-center">
            <Terminal className="h-6 w-6 mr-2" />
            {'>'} featured_posts.sh
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="group bg-gray-900/50 backdrop-blur-sm rounded-lg border border-green-500/30 hover:border-green-400 hover:bg-green-500/5 transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => handlePostClick(post.slug)}
              >
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-2 bg-black/50 border-b border-green-500/30">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4 text-green-400" />
                    <span className="text-green-400 font-mono text-sm">article.md</span>
                  </div>
                  <div className="flex items-center space-x-2 text-green-300 text-xs font-mono">
                    <Calendar className="h-3 w-3" />
                    <span>{post.date}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-bold text-green-400 mb-3 font-mono group-hover:text-green-300 transition-colors">
                    {post.title}
                  </h4>
                  <p className="text-green-200 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs border border-green-500/30 font-mono flex items-center"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-green-300 text-sm font-mono">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <button 
                      className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors font-mono"
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePostClick(post.slug);
                      }}
                    >
                      <span>read_more</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;