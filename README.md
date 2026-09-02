# Rêve Marocain

A restaurant website frontend built with Next.js, React and TypeScript. It includes menu, events, about, contact and reservation pages.

[View website](https://reve-marocain.vercel.app)

## Scope

This is a frontend prototype. The reservation form currently displays a simulated success state; it does not create a real booking. The contact form also has no implemented delivery service. Do not use either form to make an actual reservation or send a message to the restaurant.

## Frontend work

- Multi-page restaurant presentation and navigation.
- Menu and event content.
- Reservation form layout and client-side state.
- Responsive page styles and reusable UI components.

## Local setup

Use Node.js 22 and pnpm.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

## Structure

- `app/` — pages, layout and restaurant content.
- `components/` — navigation and reusable UI.
- `public/` — site assets.

## Next steps

Replace simulated form submission with a real, validated booking workflow or clearly label the forms as demonstrations in the interface. Add form and navigation tests, enable TypeScript build failures, and review image optimization and keyboard accessibility. There is no automated test suite yet; the current configuration bypasses TypeScript build errors.
