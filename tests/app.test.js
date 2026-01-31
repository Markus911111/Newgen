/**
 * @vitest-environment happy-dom
 */
import { describe, it, expect, beforeEach } from 'vitest';
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

    document.documentElement.innerHTML = html;

    // Execute the script manually
    const event = new Event('DOMContentLoaded');
    eval(scriptContent);
    document.dispatchEvent(event);
  });

  it('starts the game when button is clicked', () => {
    const startBtn = document.getElementById('start-btn');
    const startScreen = document.getElementById('start-screen');
    const gameContainer = document.getElementById('game-container');

    expect(startBtn).toBeTruthy();
    expect(startScreen.hidden).toBe(false);
    expect(gameContainer.hidden).toBe(true);

    startBtn.click();

    expect(startScreen.hidden).toBe(true);
    expect(gameContainer.hidden).toBe(false);
  });
});
