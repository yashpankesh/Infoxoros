import React from 'react';
import { ChevronRight } from 'lucide-react';

const SitemapLink = ({ href, children }) => (
  <a 
    href={href}
    className="flex items-center gap-2 text-zinc-300 hover:text-white transition-colors duration-200 py-2 group"
  >
    <ChevronRight className="w-5 h-5 text-zinc-400 group-hover:translate-x-1 transition-transform duration-200" />
    <span className="text-lg">{children}</span>
  </a>
);

const Sitemap = () => {
  return (
    <div className="min-h-screen bg-zinc-900 mt-24">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-6xl font-bold text-white mb-16">Sitemap</h1>
        
        <div className="bg-zinc-800 rounded-xl shadow-2xl p-8 border border-zinc-700">
          <h2 className="text-3xl font-bold text-zinc-100 mb-8">About Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            <div className="space-y-2">
              <SitemapLink href="/">Home</SitemapLink>
              <SitemapLink href="/it-consulting">It Consulting</SitemapLink>
              <SitemapLink href="/get-in-touch">Get In Touch</SitemapLink>
            </div>
            
            <div className="space-y-2">
              {/* <SitemapLink href="/sitemap">Sitemap</SitemapLink> */}
              <SitemapLink href="/about-us">About-Us</SitemapLink>
              <SitemapLink href="/careers">Careers</SitemapLink>
              <SitemapLink href="/courses">Courses</SitemapLink>
              {/* <SitemapLink href="/">Clients Speak</SitemapLink>
              <SitemapLink href="/alliances">Alliances</SitemapLink>
              <SitemapLink href="/esg">ESG</SitemapLink>
              <SitemapLink href="/awards">Awards</SitemapLink>
              <SitemapLink href="/knowledge-institute">Infosys Knowledge Institute</SitemapLink> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitemap;
