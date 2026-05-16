# Agent Context  TaxReturnsOnline

## What This Project Is

TaxReturnsOnline (`taxreturnsonline.in`) is a React-based marketing and lead-generation website for an Indian CA (Chartered Accountant) firm. It lets users learn about tax/compliance services and submit enquiries. There is no user authentication, no dashboard, and no backend  all form submissions go through EmailJS.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 18 + Vite 5 |
| Routing | React Router DOM v7 |
| Styling | Tailwind CSS v3 + custom CSS layers in `src/index.css` |
| Animation | Framer Motion |
| Icons | Lucide React, Heroicons |
| Email | EmailJS (`@emailjs/browser`) via custom hook |
| SEO | React Helmet |
| Analytics | Vercel Analytics |
| Notifications | React Toastify |
| Marquee | React Fast Marquee |
| Deployment | Vercel |

## Project Structure

```
src/
  App.jsx              # Root: layout shell + all routes (lazy-loaded)
  main.jsx             # Entry point, BrowserRouter wrapper
  index.css            # Tailwind directives + shared CSS component classes
  pages/
    Home.jsx
    AboutUs.jsx
    contactUs/
    TermsOfUse.jsx
    PrivacyPolicy.jsx
    Disclaimer.jsx
    Services/
      index.jsx                  # /our-services listing page
      ITR/
      Accounting/
      GST/
      companyRegistration/       # + sub-routes: privateCompany, LLP
      ImportExportCode/          # also handles /trademark-registration
      BookKeeping/
      TaxPlanning/
      ProjectReport/
      ComplienceFilling/
  components/
    Header.jsx                   # Sticky nav, dropdown menus, mobile hamburger
    Footer.jsx                   # Multi-column footer, social links
    Hero.jsx                     # Home hero section
    Marquee.jsx                  # Top announcement bar
    ScrollToTop.jsx
    ScrollEventBar.jsx
    Button.jsx
    Services/
      ServiceCard.jsx
      ServiceGrid.jsx
      serviceData.js             # Centralised service list (id, title, description, image)
    Features/
      index.jsx
      FeatureItem.jsx
      WhatsApp.jsx               # Floating WhatsApp CTA button
    Benifits/                    # Note: intentional typo in folder name
    WhyChoosUs/                  # Note: intentional typo in folder name
    Experts/
    CAExpertSection.jsx
  hooks/
    emailService.js              # useEmailJS()  wraps emailjs.sendForm()
public/
  images/                        # All static images and SVG icons
    services/                    # Service-specific images
```

## Routing Map

| Path | Component |
|---|---|
| `/` | Home |
| `/our-services` | Services index |
| `/our-services/itr-filling` | ITR |
| `/our-services/accounting-services` | Accounting |
| `/our-services/company-registration` | CompanyRegistration |
| `/our-services/company-registration/private-limited-company` | PrivateCompany |
| `/our-services/company-registration/limited-liability-partnership` | LLP |
| `/our-services/gst-registration` | GstRegistration |
| `/our-services/iec-registration` | ImportExportCode |
| `/our-services/trademark-registration` | ImportExportCode (reused) |
| `/tax-compliance/annual-complience-filling` | AnnualComplienceFilling |
| `/tax-compliance/tax-planning-consultancy` | TaxPlanning |
| `/tax-compliance/bookkeeping-service` | BookKeeping |
| `/tax-compliance/tax-report-project` | ProjectReport |
| `/contact-us` | ContactUs |
| `/about-us` | AboutUs |
| `/terms-of-use` | TermsOfUse |
| `/privacy-policy` | PrivacyPolicy |
| `/disclaimer` | Disclaimer |
| `*` | Home (catch-all) |

All routes are lazy-loaded via `React.lazy()` + `Suspense`.

## Styling Conventions

- Use Tailwind utility classes as the primary approach.
- Shared reusable classes are defined in `src/index.css` under `@layer components`:
  - `.primary-button`  blue filled CTA button
  - `.secondary-button`  outlined button
  - `.primary-button-white`  inverted primary button
  - `.nav-item`  navigation link style
  - `.container`  max-w-7xl centered wrapper
  - `.icon-button`  hover scale effect for icon buttons
- Brand colours: primary blue `#005C9D`, body text `#22343D`, green accents via Tailwind `green-600`.
- Font: Poppins (loaded globally).

## Email / Form Pattern

All contact and enquiry forms use the `useEmailJS` hook from `src/hooks/emailService.js`. Forms use uncontrolled inputs with `useRef`. Environment variables required:

```
VITE_APP_SERVICE_ID
VITE_APP_TEMPLATE_ID
VITE_APP_WELCOME_EMAIL_TEMPLATE_ID
VITE_APP_PUBLIC_KEY
```

## Known Issues / Debt

- Several sections are commented out: `CAExpertsSection`, `Benefits` on Home, `ItrApplicationForm`, `ItrFaq`.
- `/our-services/trademark-registration` reuses the `ImportExportCode` component  it needs its own page.
- Folder/component names have typos: `Benifits`, `WhyChoosUs`, `ComplienceFilling`, `Acconting`  do not rename without using `semanticRename` + `smartRelocate`.
- WhatsApp number `919512397377` is hardcoded in multiple files (Hero, Header, WhatsApp button).
- Newsletter signup in Footer has no backend integration.
- No error boundaries anywhere in the tree.
- No 404 page  catch-all redirects to Home.
- Mobile menu has no animation/transition.
