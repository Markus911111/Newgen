document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('start-btn');
  const startScreen = document.getElementById('start-screen');
  const gameContainer = document.getElementById('game-container');
  const narrativeText = document.getElementById('narrative-text');

  if (startBtn && startScreen && gameContainer && narrativeText) {
    startBtn.addEventListener('click', () => {
      // Loading state
      startBtn.disabled = true;
      startBtn.innerHTML = '<span class="spinner"></span>Starting...';

      // Simulate loading delay
      setTimeout(() => {
        startScreen.hidden = true;
        gameContainer.hidden = false;
        gameContainer.classList.add('fade-in');
        narrativeText.textContent =
          'You wake up in a dark room. The air is cold and damp.';
        // UX Improvement: Move focus to the narrative text or the first choice
        gameContainer.setAttribute('tabindex', '-1');
        gameContainer.focus();
      }, 800);
    });
  }
});
