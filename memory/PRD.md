# BACKGRND - Editorial Website PRD

## Original Problem Statement
Build a calm, editorial, essay-led website for a firm called BACKGRND. Not a marketing site or startup landing page. The website must feel like an internal memo, research note, or capital committee brief. Goal is clarity, restraint, and judgment — not persuasion or conversion.

## User Personas
- **Institutional Investors**: Seeking thoughtful, long-form content about investment philosophy
- **Research-oriented readers**: Interested in essays on capital allocation and judgment
- **Prospective partners**: Evaluating BACKGRND's approach and philosophy

## Core Requirements (Static)
- Text-first, editorial design
- High whitespace, no visual clutter
- No cards, icons, illustrations, gradients, or decorative elements
- Typography: Source Serif 4 (body), Inter (navigation)
- Colors: #FAFAFA background, #111111 primary, #444444 secondary, #888888 meta
- Max content width: 680px
- No animations beyond simple underline hover

## What's Been Implemented
**Date: January 2025**
- ✅ Homepage with firm intro and recent essays
- ✅ Essays listing page with all 5 essays
- ✅ Individual essay pages with full content
- ✅ About page with firm philosophy and contact
- ✅ Responsive navigation (BACKGRND, Essays, About)
- ✅ Typography system using Google Fonts
- ✅ Color scheme per specifications
- ✅ 680px max-width content constraint
- ✅ Simple, restrained hover effects

## Architecture
- **Frontend**: React with React Router
- **Styling**: Custom CSS (no Tailwind utilities, pure editorial design)
- **Content**: Static essay data in /data/essays.js
- **Components**: Layout (shared header/footer)

## Prioritized Backlog
### P0 (Critical) - DONE
- All core pages implemented

### P1 (Important) - Future
- RSS feed for essays
- Email subscription for new essays
- Search functionality

### P2 (Nice to have)
- Dark mode toggle
- Print-optimized styles
- Reading time estimates

## Next Tasks
1. Add RSS feed endpoint for essay syndication
2. Consider email subscription for essay updates
3. Add print stylesheet for essay pages
