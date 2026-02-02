document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('start-btn');
  const startScreen = document.getElementById('start-screen');
  const gameContainer = document.getElementById('game-container');
  const narrativeText = document.getElementById('narrative-text');

  if (startBtn && startScreen && gameContainer && narrativeText) {
    startBtn.addEventListener('click', () => {
      // UX Improvement: Show loading state
      startBtn.disabled = true;
      startBtn.setAttribute('aria-busy', 'true');
      const originalText = startBtn.textContent;
      startBtn.innerHTML =
        '<span class="spinner" aria-hidden="true"></span>Starting...';

      setTimeout(() => {
        startScreen.hidden = true;
        gameContainer.hidden = false;
        narrativeText.textContent =
          'You wake up in a dark room. The air is cold and damp.';
        // UX Improvement: Move focus to the narrative text or the first choice
        gameContainer.setAttribute('tabindex', '-1');
        gameContainer.focus();

        // Reset button state (though screen is hidden, good practice)
        startBtn.disabled = false;
        startBtn.removeAttribute('aria-busy');
        startBtn.textContent = originalText;
      }, 800);
    });
  }
});
