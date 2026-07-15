# AI Prompts Used — CineGrid (Sprint 8)

A log of the key prompts used to direct AI assistance throughout this sprint, from initial planning through deployment.

1. Shared the complete Sprint 8 specification (Phase 1 mandatory deliverables and Phase 2 priority features) to scope the project before implementation began.

2. Confirmed TMDB API key readiness and made an explicit decision to build Phase 1 first, deferring Phase 2 as a separate milestone.

3. Requested scaffolding of the base project structure and the TMDB API service layer.

4. Requested a complete first-pass implementation of all Phase 1 requirements — popular movies grid, poster/title/year/rating cards, and search — for evaluation as a full feature set.

5. Requested a more granular commit breakdown to ensure the version control history reflected realistic, incremental development.

6. Directed implementation of the three Phase 2 requirements explicitly: infinite scroll (IntersectionObserver), debounced search input (500ms), and favorites persistence (localStorage).

7. Adjusted the delivery format to inline code blocks instead of packaged files, to control integration into the existing project directly.

8. Reported that infinite scroll stopped loading after the first additional page, based on manual testing.

9. Provided a precise clarification (confirmed the behavior was a complete stop, not a delay) to support root-cause diagnosis.

10. Reported a visual regression (loss of grid/card styling) after a CSS update, caught through direct inspection.

11. Reported a subsequent blank-screen crash, and retrieved the browser console error independently to support debugging.

12. Supplied the actual file contents of the components in question so the discrepancy could be diagnosed from real code.

13. Confirmed a file-content mismatch between two components after being asked to verify, leading to a corrected fix.

14. Verified the infinite scroll fix through renewed manual testing and confirmed it was working.

15. Requested a full completeness audit against the original Phase 1 and Phase 2 requirements before considering the sprint done.

16. Reported a deployment error on the live Vercel URL following initial deployment.

17. Provided environment variable configuration screenshots to support diagnosis, through multiple rounds of verification (variable names, scope, and redeploy status).

18. Identified and resolved a hidden whitespace/newline character in an environment variable value, confirmed after redeployment that the live deployment was fully functional.
