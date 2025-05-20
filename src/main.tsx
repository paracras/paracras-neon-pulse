
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Update page title
document.title = 'Paracras - AI Automation Agency';

// Add meta description
const metaDescription = document.createElement('meta');
metaDescription.name = 'description';
metaDescription.content = 'Intelligent AI Automation for Businesses - Transform your operations with intelligent automation solutions by Paracras';
document.head.appendChild(metaDescription);

// Add Google Fonts
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap';
document.head.appendChild(fontLink);

createRoot(document.getElementById("root")!).render(<App />);
