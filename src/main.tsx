
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Update page title - SEO optimized
document.title = 'Paracras - AI Automation & Custom Web Development Agency';

// Add meta description - SEO optimized
const metaDescription = document.createElement('meta');
metaDescription.name = 'description';
metaDescription.content = 'Transform your business with intelligent AI automation, custom chatbots, workflow automation, and modern web development. Expert AI solutions for lead generation and business growth.';
document.head.appendChild(metaDescription);

// Add keywords meta tag
const metaKeywords = document.createElement('meta');
metaKeywords.name = 'keywords';
metaKeywords.content = 'AI automation, chatbots, workflow automation, web development, lead generation, business automation, AI agents, custom software';
document.head.appendChild(metaKeywords);

// Add robots meta tag
const metaRobots = document.createElement('meta');
metaRobots.name = 'robots';
metaRobots.content = 'index, follow';
document.head.appendChild(metaRobots);

// Add viewport meta tag for mobile optimization
const metaViewport = document.createElement('meta');
metaViewport.name = 'viewport';
metaViewport.content = 'width=device-width, initial-scale=1.0';
document.head.appendChild(metaViewport);

// Add canonical URL
const linkCanonical = document.createElement('link');
linkCanonical.rel = 'canonical';
linkCanonical.href = 'https://paracras.com';
document.head.appendChild(linkCanonical);

// Add Google Fonts
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap';
document.head.appendChild(fontLink);

createRoot(document.getElementById("root")!).render(<App />);
