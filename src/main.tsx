
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Update page title
document.title = 'Paracras - AI Automation Agency';

// Add meta description
const metaDescription = document.createElement('meta');
metaDescription.name = 'description';
metaDescription.content = 'Transform your operations with intelligent automation solutions by Paracras, the leading AI Automation Agency';
document.head.appendChild(metaDescription);

createRoot(document.getElementById("root")!).render(<App />);
