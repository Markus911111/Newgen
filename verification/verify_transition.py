from playwright.sync_api import sync_playwright, expect
import re

def verify_transition():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto("http://localhost:5173")

        # Click start
        page.get_by_role("button", name="Start Game").click()

        # Wait for game container to be visible
        game_container = page.locator("#game-container")
        expect(game_container).to_be_visible(timeout=5000)

        # Verify the class is applied (using regex for partial match safety)
        expect(game_container).to_have_class(re.compile(r"fade-in"))
        print("Class .fade-in found!")

        # Take screenshot of the game screen
        page.screenshot(path="verification/game_start.png")

        browser.close()

if __name__ == "__main__":
    verify_transition()
