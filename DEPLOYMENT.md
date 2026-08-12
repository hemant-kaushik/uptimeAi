
# Deployment Guide

## Deploy to Vercel

This project is configured for easy deployment to Vercel.

### Prerequisites

1. A GitHub account
2. A Vercel account (sign up at [vercel.com](https://vercel.com))

### Deployment Steps

#### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a Vite App
   - Click "Deploy"

#### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Configuration

The `vercel.json` file is already configured to handle client-side routing with React Router.

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This ensures all routes are handled by React Router instead of returning 404 errors.

### Build Settings

Vercel will automatically use these settings:
- **Build Command**: `npm run build`
- **Output Directory**: `build`
- **Install Command**: `npm install`

### Environment Variables

If you need to add environment variables:
1. Go to your project on Vercel
2. Navigate to Settings → Environment Variables
3. Add your variables (e.g., API keys)

### Custom Domain

To add a custom domain:
1. Go to your project on Vercel
2. Navigate to Settings → Domains
3. Add your domain and follow DNS configuration instructions

### Automatic Deployments

Once connected to GitHub:
- Every push to `main` branch automatically deploys to production
- Pull requests get preview deployments
- Commits to other branches get development deployments

### Troubleshooting

**Issue**: Routes return 404
- **Solution**: Ensure `vercel.json` is in the root directory

**Issue**: Build fails
- **Solution**: Run `npm run build` locally to check for errors
- Check build logs in Vercel dashboard

**Issue**: Old version showing
- **Solution**: Clear browser cache or open in incognito mode
- Check Vercel dashboard to ensure deployment succeeded

### Local Testing

Before deploying, test the production build locally:

```bash
npm run build
npx serve -s build
```

Visit `http://localhost:5173` to test the production build.
