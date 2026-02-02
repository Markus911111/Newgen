/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import fs from 'fs';
import path from 'path';

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
const scriptContent = fs.readFileSync(
  path.resolve(__dirname, '../main.js'),
  'utf8'
);

describe('Newgen RPG', () => {
  beforeEach(() => {
    if (window.happyDOM) {
      window.happyDOM.settings.disableJavaScriptFileLoading = true;
      window.happyDOM.settings.disableCSSFileLoading = true;
    }

    // Remove external resources to prevent happy-dom loading errors
    const cleanHtml = html
      .replace(/<link rel="stylesheet".*?>/, '')
      .replace(/<script type="module" src="\/main.js"><\/script>/, '');

    document.documentElement.innerHTML = cleanHtml;

    // Execute the script manually
    const event = new Event('DOMContentLoaded');
    eval(scriptContent);
    document.dispatchEvent(event);
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('starts the game when button is clicked', () => {
    vi.useFakeTimers();
    const startBtn = document.getElementById('start-btn');
    const startScreen = document.getElementById('start-screen');
    const gameContainer = document.getElementById('game-container');

    expect(startBtn).toBeTruthy();
    expect(startScreen.hidden).toBe(false);
    expect(gameContainer.hidden).toBe(true);

    startBtn.click();

    // Verify loading state
    expect(startBtn.disabled).toBe(true);
    expect(startBtn.getAttribute('aria-busy')).toBe('true');
    expect(startBtn.innerHTML).toContain('spinner');

    // Should still be on start screen
    expect(startScreen.hidden).toBe(false);
    expect(gameContainer.hidden).toBe(true);

    // Fast-forward time
    vi.advanceTimersByTime(800);

    // Verify game started
    expect(startScreen.hidden).toBe(true);
    expect(gameContainer.hidden).toBe(false);

    // Verify cleanup
    expect(startBtn.disabled).toBe(false);
    expect(startBtn.getAttribute('aria-busy')).toBeNull();
  });
});
