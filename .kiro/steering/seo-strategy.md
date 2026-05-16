# SEO, PSEO, AEO & Indexing Strategy — TaxReturnsOnline

## What's Already Implemented

### Technical SEO
- `index.html` — corrected canonical URL, rich meta tags, keywords, geo targeting (IN-GJ)
- `public/sitemap.xml` — all 18 routes with priority, changefreq, lastmod
- `public/robots.txt` — allows all, points to sitemap
- `public/favicon.svg` — SVG favicon with fallback `.ico`
- Poppins font loaded via Google Fonts preconnect in `index.html`
- `react-helmet` used on every page for per-page title, description, canonical

### Structured Data (Schema.org JSON-LD)
| Page | Schema Type |
|---|---|
| `index.html` | `AccountingService`, `WebSite` (SearchAction), `BreadcrumbList` |
| Home | `LocalBusiness` with `aggregateRating` |
| ITR Filing | `Service` with `Offer` array (3 pricing tiers) |
| GST Registration | `Service` with `Offer` array |
| Company Registration | `Service` with `Offer` |
| Accounting Services | `Service` with `Offer` |
| IEC Registration | `Service` with `Offer` |
| Tax Planning | `Service` with `Offer` |
| Annual Compliance | `Service` with `Offer` |
| Bookkeeping | `Service` with `Offer` |
| Project Report | `Service` with `Offer` |
| ITR FAQ | `FAQPage` (enables Google rich results) |
| Accounting FAQ | `FAQPage` |

---

## On-Page SEO — Per Page Targets

### Priority 1 — Highest traffic intent
| Page | Target Keyword | Title Pattern |
|---|---|---|
| ITR Filing | "ITR filing online India" | `ITR Filing Online — CA-Assisted \| TaxReturnsOnline` |
| GST Registration | "GST registration online India" | `GST Registration Online — Expert CA \| TaxReturnsOnline` |
| Home | "file ITR online India" | `File ITR Online — CA-Assisted Tax Filing \| TaxReturnsOnline` |

### Priority 2
| Page | Target Keyword |
|---|---|
| Company Registration | "private limited company registration India" |
| Tax Planning | "tax planning consultancy India" |
| Annual Compliance | "annual compliance filing Pvt Ltd" |

### Priority 3
| Page | Target Keyword |
|---|---|
| Accounting Services | "accounting services for small business India" |
| Bookkeeping | "online bookkeeping service India" |
| IEC Registration | "IEC registration online India" |
| Project Report | "project report for bank loan India" |

---

## PSEO (Programmatic SEO) — Future Opportunities

These are high-volume, low-competition keyword clusters that can be targeted with templated pages:

### 1. City-based ITR filing pages
Pattern: `/itr-filing-[city]`
Examples: `/itr-filing-ahmedabad`, `/itr-filing-surat`, `/itr-filing-mumbai`
Volume: 1,000–5,000 searches/month per city
Implementation: Create a `CityITR` page component with city name as a URL param

### 2. ITR type pages
Pattern: `/itr-[type]-filing`
Examples: `/itr-1-filing`, `/itr-2-filing`, `/itr-3-filing`, `/itr-4-filing`
Volume: 2,000–10,000 searches/month per form type

### 3. GST sub-service pages
Already partially built — ensure each has its own route and Helmet:
- `/our-services/gst-nil-return-filing`
- `/our-services/gst-annual-filing`
- `/our-services/gst-lut-filing`
- `/our-services/gst-e-way-bill`

### 4. State-specific compliance pages
Pattern: `/company-registration-[state]`
Examples: `/company-registration-gujarat`, `/company-registration-maharashtra`

---

## AEO (Answer Engine Optimisation) — AI & Voice Search

AEO targets featured snippets, Google's "People Also Ask", and AI answer engines (ChatGPT, Perplexity, Gemini).

### Rules for AEO content
1. Every FAQ section must have `FAQPage` schema — already done for ITR and Accounting
2. Add FAQ sections to: GST, Company Registration, IEC, Tax Planning, Bookkeeping pages
3. Answer format: question as H3, answer in 40–60 words, plain language
4. Use "What is", "How to", "Who needs", "When is" question patterns
5. Include the target keyword in the question itself

### AEO FAQ topics to add per page
- GST: "What is GST registration?", "Who needs GST registration in India?", "What is the penalty for not registering for GST?"
- Company Reg: "What is the cheapest way to register a company in India?", "How long does company registration take?"
- ITR: Already has 6 FAQs with schema ✅

### Structured answer blocks
Add a "Quick Answer" box at the top of key service pages:
```jsx
<div className="bg-blue-50 border-l-4 border-[#005C9D] p-4 rounded-r-xl mb-8">
  <p className="text-sm font-semibold text-[#005C9D] mb-1">Quick Answer</p>
  <p className="text-sm text-gray-700">ITR filing deadline is July 31, 2025. File online with a CA starting at ₹999.</p>
</div>
```

---

## Internal Linking Structure

### Hub & Spoke model
- **Hub**: `/our-services` — links to all service spokes
- **Spokes**: Each service page links back to hub and to 2–3 related services

### Required internal links to add
| From | To | Anchor text |
|---|---|---|
| ITR Filing | GST Registration | "also need GST registration?" |
| ITR Filing | Tax Planning | "plan your taxes for next year" |
| GST Registration | Company Registration | "registering a new company?" |
| Company Registration | Annual Compliance | "annual compliance after registration" |
| Accounting Services | Bookkeeping | "online bookkeeping service" |
| Home Hero | ITR Filing | "File ITR Now" ✅ already done |
| Footer | All service pages | ✅ already done |

### Breadcrumb implementation
Every service page should render a visible breadcrumb:
```jsx
// Home > Our Services > ITR Filing
<nav aria-label="breadcrumb">
  <ol className="flex items-center gap-2 text-xs text-gray-400">
    <li><Link to="/">Home</Link></li>
    <li>/</li>
    <li><Link to="/our-services">Services</Link></li>
    <li>/</li>
    <li className="text-gray-700">ITR Filing</li>
  </ol>
</nav>
```
Breadcrumb schema is already in `index.html` for the homepage.

---

## Backlink Strategy

### Tier 1 — Free, high-authority
1. **Google Business Profile** — Create at business.google.com with NAP (Name, Address, Phone) matching the website exactly
2. **Justdial / Sulekha / IndiaMART** — List the business with website URL
3. **CA Club India** — Post articles linking back to service pages
4. **LinkedIn Company Page** — Post weekly tax tips linking to service pages

### Tier 2 — Content-based
1. Write guest posts on:
   - `taxguru.in` — "How to file ITR online in 2025"
   - `caclubindia.com` — "GST registration checklist for new businesses"
   - `cleartax.in` community — answer questions with links
2. Answer questions on Quora with links to relevant service pages
3. Submit to Indian business directories: Tradeindia, Exportersindia

### Tier 3 — PR & citations
1. Press release on PRLog / BusinessWire India when launching new services
2. Get listed on `startupindia.gov.in` vendor directory
3. Partner with startup incubators for referral links

---

## Indexing Checklist

- [ ] Submit sitemap to Google Search Console: `https://search.google.com/search-console`
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify domain ownership in GSC
- [ ] Request indexing for all 18 URLs via GSC URL Inspection tool
- [ ] Set up GSC email alerts for coverage issues
- [ ] Monitor Core Web Vitals in GSC (LCP, CLS, FID)
- [ ] Add Google Analytics 4 property and link to GSC

---

## Performance SEO (Core Web Vitals)

### Current issues to fix
- All service images are JPEG/PNG — convert to WebP for 30–50% size reduction
- Add `width` and `height` to all `<img>` tags to prevent CLS
- Hero images should use `loading="eager"` ✅ already done on service pages
- All below-fold images should use `loading="lazy"` ✅ already done

### Image optimisation command (run locally)
```bash
# Install sharp-cli: npm install -g sharp-cli
# Convert all service images to WebP
for f in public/images/services/*.jpeg; do sharp -i "$f" -o "${f%.jpeg}.webp"; done
```

---

## Maintenance Schedule

| Task | Frequency |
|---|---|
| Update `lastmod` in sitemap.xml | Monthly |
| Review GSC for crawl errors | Weekly |
| Update ITR deadline dates in content | Annually (April) |
| Add new FAQ entries based on GSC "queries" report | Quarterly |
| Check for broken internal links | Monthly |
