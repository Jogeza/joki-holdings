# Joki Holdings — Phase H2 Responsive QA

**Date:** 2026-09-07  
**Branch:** `feature/joki-v3`  
**Repository:** `D:\PROJECTS\joki-holdings`

## A. Preconditions

The existing dirty worktree was preserved. No reset, revert, stash, commit, push, deploy, provider configuration, broad CSS refactor, or D4 image-generation retry was performed.

## B. Stable viewport method used

One reusable browser tab was used with explicit viewport overrides and sequential navigation. Each route was measured for `innerWidth`, available client width, document scroll width, broken images, and interactive-control bounds. Loaded-page screenshots were captured for representative mobile and desktop views.

## C. Routes inspected

- `/`
- `/design`
- `/print`
- `/web`
- `/work`
- `/about`
- `/contact`
- `/privacy`
- `/not-a-route` (404)

## D–I. Required viewport findings

All nine routes passed the responsive overflow and broken-image checks at:

`375px` · `430px` · `768px` · `1024px` · `1280px` · `1440px`

The four-step Print quote flow was exercised at `375px`, `430px`, `768px`, and `1024px`; every step remained within the viewport and the final WhatsApp fallback remained available.

## J. Overflow issues found

- **Overflow:** Home decorative hero artwork extended beyond the viewport. Fixed with a containing overflow boundary.
- **Overflow:** Print full-bleed bands extended 4–8px beyond the available layout width. Fixed by correcting the full-bleed margins and mobile gutter offsets.

## K. Collision issues found

The floating WhatsApp button overlapped the Contact form and Print quote controls. It is now hidden on `/contact` and `/print`; inline WhatsApp actions remain available.

## L. Typography issues found

Print availability copy was dark on the dark hero at desktop widths. It now uses readable white text across all breakpoints.

## M. Spacing issues found

No remaining reproducible spacing defect was found.

## N. Image crop issues found

No broken images or distorted crops were found. The genuine restaurant-menu image remains in use.

## O. Form issues found

Contact and Print controls remained within viewport bounds at every tested width. Labels, inputs, textarea, buttons, consent, error areas, and quote-flow controls remained usable.

## P. Header/nav issues found

Logo scale, active states, Start a Project CTA, breakpoint behavior, mobile navigation, and clipping all passed visual review.

## Q. Footer issues found

No reproducible footer overflow, density, or transition issue was found.

## R. WhatsApp issues found

The floating control was removed from Contact and Print conversion surfaces to prevent overlap. Existing inline WhatsApp links and quote fallback remain active.

## S–AA. Page findings and fixes

- **S — Home:** Added hero artwork containment; no content redesign.
- **T — Design:** No fix required.
- **U — Print:** Corrected full-bleed margins, desktop contrast, and floating WhatsApp overlap.
- **V — Web:** No fix required.
- **W — Work:** Positioned the single featured-project copy beside the image in the first desktop fold.
- **X — About:** No fix required.
- **Y — Contact:** Floating WhatsApp hidden; `?service=web` context remains intact.
- **Z — Privacy:** No fix required.
- **AA — 404:** Branding, CTA, mobile alignment, and route behavior passed.

## AB. Form-system fixes

No form rewrite was required. The four-step Print quote flow was traversed after selecting a product, through the final Artwork & Contact step, without submitting external data.

## AC. Shared CSS/root-cause fixes

Measured shared fixes were applied in [src/App.css](../src/App.css): hero containment, Work featured alignment, Print full-bleed geometry, and Print contrast.

## AD. Page-specific fixes

Page-specific adjustments were limited to Print, Work, and the WhatsApp visibility condition in [src/components/WhatsAppButton.jsx](../src/components/WhatsAppButton.jsx).

## AE. Accessibility result

Existing labels, headings, focus styles, contrast, touch targets, and semantics remain intact. No formal axe audit was run.

## AF. Phase G regression result

Lead normalization, validation, Contact submission, Print quote submission, WhatsApp fallback, service-context routing, Privacy, ErrorBoundary, analytics, security headers, Supabase, Resend, and Upstash boundaries remain intact.

## AG. Build result

Production build passed successfully.

## AH. Test result

2 test suites passed; 14 tests passed.

## AI. `git diff --check` result

Passed. Only normal Windows line-ending warnings appeared.

## AJ. Files changed

H2 edits were limited to:

- [src/App.css](../src/App.css)
- [src/components/WhatsAppButton.jsx](../src/components/WhatsAppButton.jsx)

Earlier Phase A–G dirty changes were preserved.

## AK. Remaining responsive limitations

Representative screenshots were captured at 375px and 1440px. The remaining required widths were measured with the stable workflow; 1280px was also visually checked. No external lead submission was performed.

## AL. D4 status

D4 remains parked. No image generation was retried, and no fabricated assets were added.

## AM. Visual freeze recommendation

Freeze the current visual system.

## AN. Recommended next checkpoint

Return to staging infrastructure: Supabase, Resend, Upstash, and real lead-submission testing before deployment.

