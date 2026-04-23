# Netflix Clone - Case Study

This is a simple Netflix clone built as a case study project using Next.js 14 (App Router), Tailwind CSS, and the TMDB (The Movie Database) API.

## Project Overview

This project demonstrates:
- Modern React development with Next.js 14
- Server-side rendering and client-side interactivity
- API integration with TMDB
- Responsive design with Tailwind CSS
- TypeScript for type safety

## Author

**Gorga Simatupang**  
NPM: 2406487020

## Features

- Responsive Netflix-style UI
- Movie data from TMDB API
- Hero section with featured movie
- Horizontal scrolling movie rows
- Navbar with scroll effects

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **API:** TMDB (The Movie Database)
- **Deployment:** Vercel

---

# Tutorial: Deploy Netflix Clone to GitHub and Vercel

## Prerequisites

- Node.js installed (v18 or higher)
- Git installed
- TMDB API key (get from https://www.themoviedb.org/)
- GitHub account
- Vercel account

## Step 1: Prepare Your Project

1. Make sure your project is working locally:
   ```bash
   npm install
   npm run dev
   ```

2. Create a `.env.local` file in your project root with your TMDB API key:
   ```
   TMDB_API_KEY=your_api_key_here
   TMDB_IMAGE_BASE_URL=https://image.tmdb.org/t/p/
   ```

## Step 2: Create GitHub Repository

1. Go to GitHub and create a new repository: https://github.com/Gorga-code/Netflix-Clone-for-CS-SBD9.git

2. Initialize git in your project (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Netflix Clone with TMDB API"
   ```

3. Add the remote repository:
   ```bash
   git remote add origin https://github.com/Gorga-code/Netflix-Clone-for-CS-SBD9.git
   ```

4. Push your code to GitHub:
   ```bash
   git push -u origin main
   ```

## Step 3: Deploy to Vercel

1. Go to [Vercel](https://vercel.com) and sign in with your GitHub account

2. Click "New Project"

3. Import your GitHub repository: `Gorga-code/Netflix-Clone-for-CS-SBD9`

4. Configure the project:
   - **Framework Preset:** Next.js
   - **Root Directory:** `./` (leave as default)
   - **Build Command:** `npm run build` (leave as default)
   - **Output Directory:** `.next` (leave as default)

5. Add Environment Variables:
   - Click "Environment Variables"
   - Add:
     - `TMDB_API_KEY`: your TMDB API key
     - `TMDB_IMAGE_BASE_URL`: `https://image.tmdb.org/t/p/`

6. Click "Deploy"

7. Wait for deployment to complete (usually takes 2-3 minutes)

8. Once deployed, you'll get a URL like: `https://netflix-clone-for-cs-sbd9.vercel.app`

## Step 4: Verify Deployment

1. Visit your deployed URL
2. Check that:
   - The Netflix-style UI loads
   - Movie data appears (if API key is set)
   - Images load properly
   - Navigation works

## Troubleshooting

### If movies don't load:
- Check that your TMDB API key is correct
- Make sure environment variables are set in Vercel
- Check Vercel deployment logs for errors

### If images don't load:
- Verify `TMDB_IMAGE_BASE_URL` is set correctly
- Check that `next.config.ts` has the correct image domains configured

### If build fails:
- Make sure all dependencies are in `package.json`
- Check that TypeScript compiles without errors
- Verify Next.js configuration is correct

## Project Structure

```
netflix-clone/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   └── MovieRow.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── src/
│   ├── lib/
│   │   └── tmdb.ts
│   └── types/
│       └── movie.d.ts
├── public/
├── .env.local
├── next.config.ts
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## API Configuration

This project uses the TMDB API. To get your API key:
1. Go to https://www.themoviedb.org/
2. Create an account
3. Go to Settings > API
4. Request an API key
5. Add it to your `.env.local` file

## License

This project is for educational purposes as a case study.This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
