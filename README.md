# DocuDigital Solutions — Modern Institutional Website

A high-performance, responsive B2B website for **DocuDigital Solutions Private Limited**, engineered specifically for universities, academic libraries, national archives, research institutions, and large-scale document management organizations across international markets, including Saudi Arabia and the Gulf region.

---

## Key Features

- **Pristine Institutional Design**: Deep navy/midnight theme with cyan/teal accents, subtle glows, and accessible typography powered by Google Fonts (*Plus Jakarta Sans*).
- **Core Service Pillars**:
  1. Digitization & Digital Collections
  2. OCR & Intelligent Document Processing (IDP)
  3. Metadata & Information Management
  4. Content Conversion & Migration
  5. Multi-Tier Quality Assurance
  6. Technology & Workflow Support
- **Dedicated Capability Profile**: Tailored for academic institutions, memory custodians, and regional initiatives in Saudi Arabia and the Gulf.
- **Audited Case Studies**:
  - New York University – Stern School of Business
  - University of South Carolina
  - University of Peru
- **Interactive UI Components**:
  - Global Consultation Request Modal triggerable from any service or CTA.
  - Client-side validated Contact Form with feedback confirmation.
  - Floating direct WhatsApp quick-connect widget.
  - Responsive mobile navigation with hamburger drawer.
  - Filterable and searchable services catalog.

---

## Technology Stack

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 8
- **Styling**: Tailwind CSS v4
- **Iconography**: Lucide React

---

## Running the Project Locally

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Local Development Server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

3. **Build for Production**:
   ```bash
   npm run build
   ```
   The production-ready bundle will be compiled into the `dist/` directory.

4. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## Where to Edit Website Content

All institutional copy, services, industries, workflows, and case studies are cleanly centralized in a single structured configuration file:

📁 **`src/data/companyData.ts`**
- **`COMPANY_INFO`**: Company name, tagline, WhatsApp, website, managing director, and placeholder email.
- **`SERVICES_DATA`**: All 12 detailed service items, descriptions, bullet points, icons, and target recommendations.
- **`INDUSTRIES_DATA`**: Sector challenges, adaptation strategies, and deliverables.
- **`CASE_STUDIES_DATA`**: Client names, institutional context, service scope, and publication statuses.
- **`WORKFLOW_STEPS`**: The 6-step institutional delivery lifecycle.
- **`CAPABILITY_AREAS`**: Regional and archival capability statements.

---

## Where to Replace Logo and Visual Assets

- **Brand Logo & Symbol**:
  - `src/components/common/BrandLogo.tsx`: Contains the SVG emblem and company branding markup. If an official SVG or PNG logo is provided, you can replace the SVG markup inside this component.
- **Favicon & Web Meta**:
  - `index.html`: Contains Open Graph tags, page title, favicon links, and SEO descriptions.

---

## Where to Connect the Contact Form Backend

The contact form is located at:
📁 **`src/pages/Contact.tsx`**

To connect with a real backend service (e.g., EmailJS, Formspree, AWS SES, or custom REST API):
1. In `handleSubmit`, replace the `setTimeout` simulation with your asynchronous `fetch` or `axios` call:
   ```ts
   const response = await fetch('https://your-api-endpoint.com/api/contact', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData)
   });
   ```
2. Same for `src/components/common/ConsultationModal.tsx` for modal inquiries.

---

## Explicit Placeholder Content Summary

As instructed, no facts or metrics have been fabricated. The following items are clearly identified placeholders ready for your actual details when available:

1. **Email Address**: `contact@docudigitalsolutions.com` (Placeholder in `src/data/companyData.ts`).
2. **Case Study Metrics & Throughput**: Displays: *“Detailed case study information will be published after client-approved review.”*
3. **Office Physical Location**: Marked generically as *“DocuDigital Solutions Private Limited, Technology & Operations Hub”*.
4. **DOCX Document Content**: When the DOCX document is provided, its copy can be dropped straight into `src/data/companyData.ts`.

---

## Verified Contact Details Included

- **Legal Name**: DocuDigital Solutions Private Limited
- **Brand Name**: DocuDigital Solutions
- **Managing Director**: Balaji Beeki
- **WhatsApp**: +91 98417 45201 (direct link: `https://wa.me/919841745201`)
- **Website**: www.docudigitalsolutions.com
