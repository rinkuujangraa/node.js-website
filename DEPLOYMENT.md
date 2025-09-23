# 🚀 MoneyZenGuide Deployment Guide

## Step 1: Push to GitHub

1. Create a new repository on GitHub
2. Push your code:
```bash
git remote add origin https://github.com/yourusername/moneyzen-guide.git
git branch -M main
git push -u origin main
```

## Step 2: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project"
4. Import your repository
5. Configure settings:
   - **Framework Preset**: Next.js
   - **Root Directory**: ./
   - **Build Command**: npm run build
   - **Output Directory**: .next

## Step 3: Environment Variables

Add these in Vercel Dashboard → Settings → Environment Variables:

### Required:
```
DATABASE_URL=postgresql://username:password@host:5432/database_name
NEXTAUTH_URL=https://your-app.vercel.app
NEXTAUTH_SECRET=your-super-secret-key-here
```

### Optional (for full functionality):
```
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
GITHUB_CLIENT_ID=your-github-client-id
GITHUB_CLIENT_SECRET=your-github-client-secret
STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...
SENDGRID_API_KEY=your-sendgrid-api-key
FROM_EMAIL=noreply@yourdomain.com
GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
NODE_ENV=production
```

## Step 4: Database Setup

### Option A: Vercel Postgres (Recommended)
1. In Vercel Dashboard → Storage → Create Database
2. Choose PostgreSQL
3. Copy the connection string to DATABASE_URL

### Option B: External Database
- Supabase (Free tier available)
- Railway Postgres ($5/month)
- PlanetScale (MySQL alternative)

## Step 5: Deploy!

1. Click "Deploy" in Vercel
2. Wait for build to complete
3. Your site will be live at: `https://your-app.vercel.app`

## Step 6: Custom Domain (Optional)

1. In Vercel Dashboard → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

## Post-Deployment

1. Run database migrations:
```bash
npx prisma db push
```

2. Test all features:
   - Homepage loads
   - Calculators work
   - Blog posts display
   - Contact form works

## Troubleshooting

- **Build fails**: Check environment variables
- **Database errors**: Verify DATABASE_URL
- **Auth issues**: Check NEXTAUTH_SECRET
- **Images not loading**: Check image domains in next.config.js

Your MoneyZenGuide website will be live and ready! 🎉
