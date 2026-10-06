# rare infra — React + Tailwind Showcase Website

A production-style showcase/marketing website for **rare infra**, built from the supplied company profile and the supplied website design reference.

## Stack

- React.js
- Vite
- Tailwind CSS
- React Router
- Lucide React icons
- Static/local data
- Local image assets extracted from the supplied company PDF

## Run locally

```bash
npm install
npm run dev
```

Then open the URL printed by Vite.

Production build:

```bash
npm run build
npm run preview
```

## Easy editing guide

### 1. Company details

Edit:

`src/data/siteData.js`

The `company` object contains the name, description, vision, mission, phone, email and office details.

### 2. Projects

Edit the `projects` array in:

`src/data/siteData.js`

Each project has:

- `slug`
- `title`
- `category`
- `location`
- `image`
- `summary`
- `details`

Add a new project by adding another object to that array.

### 3. Services

Edit the `services` array in `src/data/siteData.js`.

### 4. Gallery

Add images to:

`public/assets/gallery/`

Then add their paths to the `gallery` array in `src/data/siteData.js`.

### 5. Client / partner logos

Put logo files in:

`public/assets/logos/`

Then edit `partnerLogos` in `src/data/siteData.js`.

### 6. Main images

Hero/about/service images are currently mapped in:

`public/assets/images/`

You can replace the files while keeping the same filenames, or update the paths in `src/data/siteData.js`.

## Folder structure

```text
src/
├── components/
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Layout.jsx
│   ├── ProjectCard.jsx
│   ├── ScrollToTop.jsx
│   └── SectionHeading.jsx
├── data/
│   └── siteData.js        # Edit content here first
├── pages/
│   ├── About.jsx
│   ├── Clients.jsx
│   ├── Contact.jsx
│   ├── Gallery.jsx
│   ├── Home.jsx
│   ├── ProjectDetails.jsx
│   └── Projects.jsx
├── App.jsx
├── index.css
└── main.jsx

public/
└── assets/
    ├── gallery/
    ├── images/
    └── logos/
```

## Design direction

The supplied website reference uses a clean editorial/corporate presentation with dark sections, light content sections, card-based project presentation and a warm red/coral accent. This implementation follows that direction while keeping the code modular.

## Important

The Contact form is intentionally a frontend-only demo. Connect it to an email provider, Formspree/Resend, or your own API when the client is ready.

The website uses only static data and local assets, so there is no database or backend dependency.
