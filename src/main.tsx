
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Remove any existing app.css imports if any
// import './App.css'

createRoot(document.getElementById("root")!).render(<App />);
