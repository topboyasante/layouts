# Sales Report Layout Design

## Goal

Add a new dashboard layout inspired by the provided reference image. The result should feel visually close in structure and tone, but remain an original, maintainable layout that fits the existing layout library.

## Chosen approach

Use an inspired reconstruction rather than a pixel-perfect clone.

This keeps the overall composition of the reference while simplifying some of the denser decorative details. It also matches the current project style, which favors handcrafted static layouts over deeply stateful or highly abstracted UI systems.

## Layout identity

- Name: `Sales Report`
- Category: `Analytics`
- Frameworks: `react`
- Visual direction: soft premium analytics dashboard with warm gray surfaces, white cards, rounded shells, pill controls, and pink accent highlights

## Structure

The layout will live under `src/layouts/sales-report/`.

Planned files:

- `src/layouts/sales-report/meta.ts`
- `src/layouts/sales-report/react/index.tsx`
- `src/layouts/sales-report/react/sidebar.tsx`
- `src/layouts/sales-report/react/topbar.tsx`
- `src/layouts/sales-report/react/main-content.tsx`

## Screen composition

The layout should be built from these major regions:

1. A narrow left utility rail with circular icon buttons and a settings area at the bottom
2. A navigation sidebar with workspace branding, section links, nested report groups, and small badges
3. A top content bar with search, compact collaborator chips, and utility actions
4. A report header with title, revenue figure, comparison chips, timeframe controls, and KPI cards
5. A lower analytics grid with channel cards, a compact category chart, a large performance panel, and a ranked team table

## Component strategy

The layout should follow the same composition style as the existing React layouts.

- `index.tsx` assembles the shell and background
- `sidebar.tsx` contains both the icon rail and the nested navigation column
- `topbar.tsx` renders search, avatars, and action controls
- `main-content.tsx` renders the report header, stat cards, chart panels, and team table

Small helper components may be defined within `sidebar.tsx` and `main-content.tsx` for repeated UI patterns such as nav rows, stat pills, channel items, and performance rows.

## Data model

All content should use static in-file arrays and objects, consistent with the rest of the project.

Examples:

- sidebar sections
- collaborator chips
- KPI summary cards
- sales channel metrics
- team ranking rows
- chart labels and annotation markers

No fetching, external state, or real charting library is needed.

## Visual rules

- Keep a light, airy background with subtle contrast between shell, cards, and panels
- Use pink as the key accent for selected states, value chips, and chart highlights
- Prefer rounded corners and soft borders over heavy separators
- Use dense but readable spacing so the page feels information-rich without becoming cramped
- Use handcrafted SVG or CSS-based mini charts instead of external chart packages

## Responsiveness

The layout should remain usable inside the preview frame and on narrower widths.

- Collapse or hide the outer utility rail first on smaller screens
- Reduce the navigation column width before stacking the main analytics sections
- Stack the lower analytics cards into a single column on smaller breakpoints
- Allow horizontal overflow only where it improves fidelity, such as dense tables or KPI strips

## Interaction scope

The layout is presentational only.

- active and hover states should be styled
- pills, buttons, and rows can appear interactive
- no real filtering, timeframe logic, or expandable data behavior is required

## Testing and verification

Verification should focus on integration with the existing gallery system.

- add `meta.ts` so the new layout is discovered automatically
- ensure `react/index.tsx` loads correctly in the preview route
- run `npm run test` to confirm layout discovery helpers still pass
- run `npm run build` to catch type and route issues

## Non-goals

- pixel-perfect duplication of the reference image
- full data interactivity
- backend integration
- cross-framework versions in the first pass
