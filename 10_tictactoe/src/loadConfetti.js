// src/loadConfetti.js
export const loadConfettiScripts = () => {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = '/confetti/confetti.js';
      script.onload = () => {
        const script2 = document.createElement('script');
        script2.src = '/confetti/show-confetti.js';
        script2.onload = resolve;
        script2.onerror = reject;
        document.head.appendChild(script2);
      };
      script.onerror = reject;
      document.head.appendChild(script);
    });
  };
  