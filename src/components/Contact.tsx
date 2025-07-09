import React, { useState } from 'react';
import { Mail, MessageSquare, Send, MapPin, Clock, Terminal, User, FileText } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:shreehari.deshpande2005@gmail.com?subject=${subject}&body=${body}`;
    
    // Open default email client
    window.location.href = mailtoLink;
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 relative">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-transparent to-green-500/10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-400 mb-4 font-mono">
            {'>'} ./contact --init
          </h2>
          <p className="text-xl text-green-300 max-w-2xl mx-auto font-mono">
            Willing to collaborate on your next project? Let's establish a secure connection.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-black/50 backdrop-blur-sm rounded-lg border border-green-500/30 overflow-hidden">
            {/* Terminal Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-gray-900/50 border-b border-green-500/30">
              <div className="flex items-center space-x-2">
                <Terminal className="h-4 w-4 text-green-400" />
                <span className="text-green-400 font-mono text-sm">contact_form.exe</span>
              </div>
              <div className="flex space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center space-x-3 mb-6">
                <MessageSquare className="h-6 w-6 text-green-400" />
                <h3 className="text-2xl font-bold text-green-400 font-mono"> send_message</h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-green-300 mb-2 font-mono">
                      {'>'} name:
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-green-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-green-300 placeholder-green-500/50 font-mono"
                      placeholder="your_name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-green-300 mb-2 font-mono">
                      {'>'} email:
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/50 border border-green-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-green-300 placeholder-green-500/50 font-mono"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-green-300 mb-2 font-mono">
                    {'>'} subject:
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-green-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-green-300 placeholder-green-500/50 font-mono"
                    placeholder="project_discussion"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-green-300 mb-2 font-mono">
                    {'>'} message:
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/50 border border-green-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-green-300 placeholder-green-500/50 resize-none font-mono"
                    placeholder="tell_me_about_your_project..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 bg-green-500 text-black px-6 py-3 rounded-lg hover:bg-green-400 transition-all duration-300 transform hover:scale-105 font-mono font-bold"
                >
                  <Send className="h-5 w-5" />
                  <span>./send_message</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-black/50 backdrop-blur-sm rounded-lg border border-green-500/30 overflow-hidden">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-2 bg-gray-900/50 border-b border-green-500/30">
                <div className="flex items-center space-x-2">
                  <Terminal className="h-4 w-4 text-green-400" />
                  <span className="text-green-400 font-mono text-sm">contact_info.txt</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <Mail className="h-6 w-6 text-green-400" />
                  <h3 className="text-2xl font-bold text-green-400 font-mono">{'>'} contact_data</h3>
                </div>
                
                <div className="space-y-6 font-mono">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-5 w-5 text-green-400 mt-1" />
                    <div>
                      <h4 className="font-semibold text-green-400">{'>'} location:</h4>
                      <p className="text-green-300">Bengaluru, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="h-5 w-5 text-green-400 mt-1" />
                    <div>
                      <h4 className="font-semibold text-green-400">{'>'} email:</h4>
                      <p className="text-green-300">shreehari.deshpande2005@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="h-5 w-5 text-green-400 mt-1" />
                    <div>
                      <h4 className="font-semibold text-green-400">{'>'} response_time:</h4>
                      <p className="text-green-300">Within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Availability Status */}
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 rounded-lg p-6 border border-green-500/30 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-green-400 mb-4 font-mono">{'>'} system_status</h3>
              <p className="text-green-200 mb-4 font-mono">
                Currently available for freelance projects or to chat about my projects and contributions. 
                Let's secure the digital infrastructure together.
              </p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold font-mono">Status: Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;