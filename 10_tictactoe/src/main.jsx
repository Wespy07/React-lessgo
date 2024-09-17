import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { loadConfettiScripts } from './loadConfetti';

function Main() {
  useEffect(() => {
    loadConfettiScripts().catch(error => console.error('Confetti scripts failed to load:', error));
  }, []);

  return <App />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Main />
  </StrictMode>
);
