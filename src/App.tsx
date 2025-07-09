import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/" element={
          <div className="min-h-screen bg-black">
            <Header />
            <Hero />
            <About />
            <Projects />
            <Blog />
            <Contact />
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
