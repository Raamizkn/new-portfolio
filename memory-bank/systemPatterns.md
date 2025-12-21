# System Patterns: New Portfolio

## Architecture
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Components:** Shadcn/ui (base components)

## Key Technical Decisions
- **Dynamic Routing:** Used for case studies (`app/case-studies/[slug]/page.tsx`) to allow for scalable project additions.
- **Component-Based UI:** Modular components for sections (About, Projects, Experience, etc.) for maintainability.
- **Dark/Light Mode:** Theme support using `next-themes`.
- **Responsive Design:** Mobile-first approach using Tailwind's responsive utilities.

## Design Patterns
- **Standard Layout:** Consistent header and footer across all pages.
- **Case Study Template:** A structured data-driven approach for rendering complex case studies, ensuring consistency and ease of content management.
- **Interactive Cards:** Hover effects and smooth transitions to improve engagement.
