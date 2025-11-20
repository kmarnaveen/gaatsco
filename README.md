# GAATSCO Website

Next.js website for GAATSCO Pvt Ltd with contact form and Google Sheets integration.

## Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/kmarnaveen/gaatsco)

### Automatic Deployment Steps:

1. **Click the "Deploy to Netlify" button above** OR follow manual steps below

2. **Connect your GitHub repository**

   - Go to [Netlify](https://app.netlify.com/)
   - Click "Add new site" → "Import an existing project"
   - Choose GitHub and authorize Netlify
   - Select the `kmarnaveen/gaatsco` repository

3. **Configure build settings** (should auto-detect from netlify.toml):

   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 20

4. **Add environment variables** (Critical!):
   Go to Site settings → Environment variables and add:

   ```
   GOOGLE_SHEET_ID=1CNRtng3LXFUlOi64cQPqvfrzz5P89lj911ZKOAJDv1U
   GOOGLE_SERVICE_ACCOUNT_EMAIL=gaatsco@toby-469506.iam.gserviceaccount.com
   GOOGLE_PRIVATE_KEY=-----BEGIN PRIVATE KEY-----\nYour private key here\n-----END PRIVATE KEY-----\n
   ```

5. **Deploy!**
   - Click "Deploy site"
   - Netlify will automatically build and deploy your site
   - Every push to `main` branch will trigger a new deployment

## Local Development

```bash
# Install dependencies
npm install --legacy-peer-deps

# Run development server
npm run dev

# Build for production
npm run build
```

## Environment Variables

Create a `.env.local` file with:

```
GOOGLE_SHEET_ID=your_sheet_id
GOOGLE_SERVICE_ACCOUNT_EMAIL=your_service_account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

## Features

- ✅ Next.js 16 with Turbopack
- ✅ Contact form with validation
- ✅ Google Sheets integration
- ✅ Local JSON backup
- ✅ Toast notifications
- ✅ Responsive design
- ✅ SEO optimized

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Google Sheets API
