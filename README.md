# Appscrip – Product Listing Page

A responsive product listing page built with Next.js. It has a filter sidebar, sorting, a wishlist toggle and a mobile filter drawer.

**Live demo:** https://appscrip-mu.vercel.app/

## Features

- Product grid with images, badges and "Out of stock" labels
- Filters: Ideal For, Occasion, Work, Fabric, Segment, Suitable For, Raw Materials, Pattern, plus a Customizable toggle
- Sort by Recommended, Newest, Popular, or Price (high to low / low to high)
- Show or hide the filter sidebar on desktop
- Filter drawer on mobile
- Wishlist heart on each product card
- Item count that updates with the active filters
- Responsive header and footer (footer links collapse into accordions on mobile)

## Tech Stack

- Next.js (App Router)
- React
- CSS Modules

## Getting Started

```bash
git clone <your-repo-url>
cd appscrip
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

To create a production build:

```bash
npm run build
npm start
```

## Project Structure

```
app/
  layout.js        Page metadata and root layout
  page.js          Header, catalog and footer
  globals.css      Global styles
components/
  header.module.css
  footer.module.css
  catalog.module.css
public/
  products/        Product images
  appscrip-logo.svg
```

## Data

Product details are stored locally in `page.js`. On load the page also requests prices from [Fake Store API](https://fakestoreapi.com/products); if the request fails, the local prices are used.

## Notes

- Prices are hidden on the cards ("Sign in or Create an account to see pricing"), but they are still used for price sorting.
- Header text and the page description use placeholder Lorem ipsum copy.
