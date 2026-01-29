import { describe, it, expect, beforeEach } from "vitest";
import { Window } from "happy-dom";
import fs from "fs";
import path from "path";

describe("Landing Page", () => {
  let window;
  let document;

  beforeEach(() => {
    const html = fs.readFileSync(
      path.resolve(__dirname, "../index.html"),
      "utf8",
    );
    window = new Window();
    document = window.document;
    document.write(html);
  });

  it("should have the correct title", () => {
    expect(document.title).toBe("Newgen - Interactive RPG");
  });

  it("should have a form with an email input and label", () => {
    const form = document.querySelector("form");
    expect(form).toBeTruthy();

    const input = document.querySelector('input[type="email"]');
    expect(input).toBeTruthy();
    expect(input.hasAttribute("required")).toBe(true);
    expect(input.getAttribute("placeholder")).toBe("you@example.com");

    const label = document.querySelector('label[for="email"]');
    expect(label).toBeTruthy();
    expect(label.textContent).toContain("Email Address");
  });

  it("should have a submit button", () => {
    const button = document.querySelector('button[type="submit"]');
    expect(button).toBeTruthy();
    expect(button.textContent).toContain("Join Waitlist");
  });
});
