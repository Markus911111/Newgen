## 2024-05-22 - Managing Focus in SPAs

**Learning:** When content is replaced dynamically (like switching from Start Screen to Game Screen), screen reader users lose context unless focus is explicitly moved to the new content container.
**Action:** Always use `tabindex="-1"` and `.focus()` on the new container when swapping major views.

## 2025-10-26 - Respecting Motion Preferences

**Learning:** Adding animations improves delight but causes issues for users with vestibular disorders. Standard fade-ins should always be paired with a media query disable.
**Action:** Wrap all entrance animations in `@media (prefers-reduced-motion: reduce) { animation: none; }`.
