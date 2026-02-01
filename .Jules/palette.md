## 2024-05-22 - Managing Focus in SPAs

**Learning:** When content is replaced dynamically (like switching from Start Screen to Game Screen), screen reader users lose context unless focus is explicitly moved to the new content container.
**Action:** Always use `tabindex="-1"` and `.focus()` on the new container when swapping major views.

## 2026-02-01 - Perceived Performance & Transitions
**Learning:** Adding a loading state and transition to instant actions (like starting a game) makes the experience feel more substantial and prevents jarring context switches.
**Action:** Consider adding micro-delays (500-800ms) with loading indicators for major state changes, even if synchronous.
