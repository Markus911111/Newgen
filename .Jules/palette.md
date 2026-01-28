## 2025-01-27 - Hidden Attribute vs Display Property

**Learning:** The `hidden` HTML attribute is often overridden by CSS `display` properties (like `display: flex` on a form). This can lead to elements remaining visible even when `hidden` is set.
**Action:** Always include `[hidden] { display: none !important; }` in the CSS reset or utility classes, or ensure CSS selectors targeting hidden elements account for the state (e.g., `form:not([hidden])`).

## 2026-01-28 - Visual Disabled State

**Learning:** Programmatically setting `disabled` on a button prevents interaction but does not automatically provide clear visual feedback in all browsers if `background-color` is overridden. Users may think the app is unresponsive if the button remains the "active" color during async operations.
**Action:** Always add explicit `button:disabled` styles (e.g., lower opacity or distinct gray/light color) when customizing button styles to match the system's "processing" or "inactive" state.
