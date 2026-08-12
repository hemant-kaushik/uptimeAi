# Quick Start Guide

## 🚀 Deploy to Vercel in 3 Steps

### Step 1: Push to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Ready for deployment"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click "Add New Project"
4. Select your repository
5. Click "Import"

### Step 3: Deploy

Vercel will automatically:
- Detect it's a Create React App
- Set build command to `npm run build`
- Set output directory to `build`
- Deploy your app

**That's it!** Your app will be live in ~2 minutes.

## 📱 Your Live URL

After deployment, you'll get a URL like:
```
https://your-project-name.vercel.app
```

## 🔄 Automatic Updates

Every time you push to GitHub:
- `main` branch → Production deployment
- Other branches → Preview deployment
- Pull requests → Preview deployment

## 🎯 Quick Commands

```bash
# Run locally
npm start

# Build for production
npm run build

# Test production build locally
npm run build && npx serve -s build

# Deploy via CLI (alternative)
npx vercel
```

## ⚙️ Configuration

The project includes:
- ✅ `vercel.json` - Handles React Router routing
- ✅ `.vercelignore` - Excludes unnecessary files
- ✅ Build optimization - Production-ready build

## 🐛 Troubleshooting

**Routes return 404?**
- ✅ Already fixed with `vercel.json` rewrites

**Build fails?**
```bash
# Test build locally first
npm run build
```

**Old version showing?**
- Clear browser cache
- Check Vercel dashboard for deployment status

## 📚 More Info

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment options and configuration.

## 💡 Pro Tips

1. **Custom Domain**: Add in Vercel Settings → Domains
2. **Environment Variables**: Add in Vercel Settings → Environment Variables
3. **Preview Deployments**: Every PR gets a unique URL for testing
4. **Rollback**: Instant rollback to previous deployments in Vercel dashboard

---

Need help? Check the [full README](README.md) or [deployment guide](DEPLOYMENT.md).
