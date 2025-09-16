## Mintflow

Modern personal finance app built with Next.js, Clerk, Tailwind, and Prisma.

### What’s new in this fork

- Brand and copy: App renamed to Mintflow with unique headings, labels, and CTAs.
- Theme redesign: Teal/indigo palette, refined spacing, OKLCH tokens in `app/globals.css`.
- Component restyle: Updated `Button` and `Card` interactions and radius.
- Navigation polish: Backdrop-blur header, theme toggle, consistent labels.
- Landing rewrite: New hero and sections (`app/page.jsx`, `components/Hero.jsx`).
- Features added:
  - Export CSV on transactions table (respects current filters and sort).
  - Dark mode toggle with persistence (`components/theme-toggle.jsx`).
  - Stronger form validation (positive amount, description length) in `app/lib/schema.js`.

### Changed files

- `app/layout.js`: Metadata, favicon, footer content/style.
- `components/Header.jsx`: New labels, theme toggle, alt text, styles.
- `app/globals.css`: Brand palette and gradients.
- `components/ui/button.jsx`: Radius and state styles.
- `components/ui/card.jsx`: Used with subtle hover shadows on landing.
- `app/page.jsx`, `components/Hero.jsx`: Original copy and visuals.
- `app/(main)/account/_components/transaction-table.jsx`: Export CSV.
- `app/lib/schema.js`: Enhanced validation.

### Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

### Notes

- Theming uses OKLCH tokens under `:root` and `.dark` in `app/globals.css`.
