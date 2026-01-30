# BACKGRND - Editorial Website PRD

## Original Problem Statement
Build a calm, editorial, essay-led website for a firm called BACKGRND. Not a marketing site or startup landing page. The website must feel like an internal memo, research note, or capital committee brief. Goal is clarity, restraint, and judgment — not persuasion or conversion.

## Technical Constraints
- Frontend: React.js (pure presentation layer)
- Backend: Python FastAPI (owns all data and business logic)
- Communication: REST APIs
- Database: MongoDB
- Frontend must not implement business logic - clean separation

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

### Backend (FastAPI)
- ✅ GET /api/config - Site configuration
- ✅ GET /api/essays - All published essays (list view)
- ✅ GET /api/essays/recent - Recent essays with limit param
- ✅ GET /api/essays/{slug} - Single essay with full body
- ✅ GET /api/about - About page content
- ✅ Auto-seed data on startup
- ✅ MongoDB integration

### Frontend (React)
- ✅ Homepage with API-driven intro and recent essays
- ✅ Essays listing page
- ✅ Individual essay pages with full content
- ✅ About page with structured sections
- ✅ API client module (/api/client.js)
- ✅ Loading and error states
- ✅ Clean navigation

## Architecture
```
Frontend (React)          Backend (FastAPI)         Database (MongoDB)
     |                          |                         |
     |-- GET /api/config ------>|-- query site_config --->|
     |<-- site config ----------|<-- config data ---------|
     |                          |                         |
     |-- GET /api/essays ------>|-- query essays -------->|
     |<-- essay list -----------|<-- essays --------------|
```

## Prioritized Backlog
### P0 (Critical) - DONE
- All core pages and API endpoints implemented
- Clean frontend/backend separation

### P1 (Important) - Future
- RSS feed for essays
- Admin panel for content management
- Email subscription

### P2 (Nice to have)
- Dark mode toggle
- Print-optimized styles
- Reading time estimates

## Next Tasks
1. Add admin authentication for content management
2. Add RSS feed endpoint for essay syndication
3. Consider email subscription for essay updates
