# Vercel API App

Minimal API-only app for Vercel.

## Endpoint

- `GET /api/roles?process_id=...&user_id=...`
  - `400` if query params are missing
  - `200` with `[
    "Sales Analyst"
  ]` when valid

## Local development

```bash
npm install
npm run dev
```

## Deploy

```bash
vercel --prod
```
