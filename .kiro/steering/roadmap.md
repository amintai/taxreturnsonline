# TaxReturnsOnline  Product Roadmap

## Phase 1  Foundation Fixes (High Priority)

These are bugs, broken UX, and tech debt that should be resolved before any new features.

### 1.1 Dedicated Trademark Registration Page
- `/our-services/trademark-registration` currently reuses `ImportExportCode` component
- Create `src/pages/Services/Trademark/` with its own hero, benefits, documents, and CTA sections
- Update `App.jsx` route to point to the new component

### 1.2 Centralise Hardcoded Contact Info
- WhatsApp number `919512397377` is scattered across `Hero.jsx`, `Header.jsx`, and `WhatsApp.jsx`
- Create `src/config/contact.js` exporting `WHATSAPP_NUMBER`, `PHONE`, `EMAIL`
- Replace all hardcoded values with imports from this config

### 1.3 404 Page
- Catch-all `*` route currently redirects to Home  confusing for users and bad for SEO
- Create `src/pages/NotFound.jsx` with a clear message and link back to Home
- Update `App.jsx` catch-all route

### 1.4 Error Boundaries
- No error boundaries exist  a single component crash takes down the whole page
- Add a root-level `ErrorBoundary` wrapping `<Suspense>` in `App.jsx`
- Optionally add per-route boundaries for service pages

### 1.5 Mobile Menu Animation
- Mobile nav opens/closes with no transition  jarring UX
- Add a slide-down or fade animation using Framer Motion (already installed)

### 1.6 Footer Newsletter Signup
- Input exists in Footer but submits nowhere
- Wire it up to EmailJS using the existing `useEmailJS` hook, or remove it if not planned

---

## Phase 2  Content Completions (Medium Priority)

Sections that exist in code but are commented out or incomplete.

### 2.1 Re-enable ITR Page Sections
- `ItrApplicationForm` and `ItrFaq` are commented out in the ITR service page
- Review, update content, and re-enable both sections

### 2.2 Re-enable Home Page Sections
- `CAExpertsSection` and `Benefits` are commented out in `Home.jsx`
- Decide whether to restore or permanently remove; if restoring, update content

### 2.3 Complete GST Sub-Services
- GST folder has multiple sub-service files (annual, cancel, LUT, nil return, e-way bill, modification)
- Verify each has a route in `App.jsx` and is linked from the GST landing page

### 2.4 Company Registration Sub-Routes
- Private Limited and LLP sub-routes exist but are not surfaced in the nav
- Add them as nested items under "Company Registration" in the Header submenu

---

## Phase 3  UX & SEO Improvements (Medium Priority)

### 3.1 Consistent Page-Level SEO
- Audit all service pages for `<Helmet>` title + description + canonical tags
- Several pages are missing canonical URLs

### 3.2 Sitemap & Robots
- `public/sitemap.xml` exists  verify all routes are listed and dates are current
- Confirm `robots.txt` is not blocking any indexable routes

### 3.3 Image Optimisation
- Service images are `.jpeg`/`.jpg`/`.png`  convert to WebP for faster loads
- Add explicit `width` and `height` attributes to `<img>` tags to reduce CLS

### 3.4 Lazy Load Images
- Hero and above-the-fold images should use `loading="eager"`; all others `loading="lazy"`

### 3.5 Accessible Forms
- Audit all forms for `<label>` associations, `aria-required`, and error message `aria-live` regions
- Ensure keyboard navigation works on all dropdowns and modals

---

## Phase 4  New Features (Lower Priority / Future)

### 4.1 Service Pricing Pages
- Add transparent pricing tiers for ITR, GST, and Company Registration
- `ComplienceFilling` already has a `PriceComparision` component  use as a pattern

### 4.2 Blog / Resources Section
- Add a `/blog` or `/resources` section for tax tips and guides
- Good for SEO and organic traffic; can be static MDX files initially

### 4.3 CA Expert Profiles
- `CAExpertSection.jsx` and `Experts/` components exist but are unused
- Build out a team/experts page with real CA profiles and credentials

### 4.4 Live Chat / Callback Scheduling
- Currently only WhatsApp and email  consider adding a callback scheduling widget
- Calendly embed or a simple form with preferred time slot

### 4.5 Multi-language Support (Hindi)
- Target audience is India-wide; Hindi support would expand reach significantly
- Evaluate `react-i18next` for i18n

---

## Ongoing / Maintenance

- Keep `serviceData.js` as the single source of truth for service cards  do not duplicate service metadata inline
- All new service pages must follow the existing pattern: `HeroSection`, `Benefits/Features`, `DocumentList`, `FAQ`, `CTA` with `SideForm`
- All new forms must use the `useEmailJS` hook  do not call EmailJS directly in components
- Run `eslint` before every commit; fix all warnings in files you touch
