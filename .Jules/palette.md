## 2025-01-27 - Hidden Attribute vs Display Property
**Learning:** The `hidden` HTML attribute is often overridden by CSS `display` properties (like `display: flex` on a form). This can lead to elements remaining visible even when `hidden` is set.
**Action:** Always include `[hidden] { display: none !important; }` in the CSS reset or utility classes, or ensure CSS selectors targeting hidden elements account for the state (e.g., `form:not([hidden])`).
