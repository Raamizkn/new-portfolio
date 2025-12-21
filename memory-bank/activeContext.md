# Active Context: New Portfolio

## Current Focus
- Implementing the "Product Management" section in the portfolio.
- Creating detailed case study pages, starting with the Uber Commuter Pass.

## Recent Changes
- Renamed "Product Design" section to "Product Management" in `projects.tsx`.
- Updated project data with Uber, Airbnb, and Talkform.
- Redesigned `ProjectCard` to match a new aesthetic with client info and larger images for PM projects.
- Created `app/case-studies/[slug]/page.tsx` with a detailed layout for the Uber case study.
- Added comprehensive data for the Uber Commuter Pass case study, including overview, intro, concept summary, impact statement, challenge/opportunity, competitor landscape, personas, product experience, pricing, GTM strategy, risks, and forecasts.
- Implemented the Airbnb CoSpace case study with full strategic analysis and market data.
- Updated Talkform project image to `Talkform.png`.
- Refined the "Strategic Moat" section of the case study template to be context-aware based on the project slug.

## Next Steps
- Implement Talkform AI case study once data is provided.
- Refine the transition between the home page and case study pages.
- Ensure all images are correctly linked and high quality.

## Active Decisions
- Using a separate data structure within the case study page for now, but considering moving to a dedicated `lib/data/case-studies.ts` file for better organization.
- Keeping the case study page white-themed for readability, even in dark mode (need to verify user preference on this).
