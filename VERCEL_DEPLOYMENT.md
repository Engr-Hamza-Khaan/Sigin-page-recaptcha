# Vercel Deployment Guide

## Step 1: GitHub/GitLab me Push Karo

1. **GitHub repository banayein** (agar nahi hai):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/recaptcha-app.git
   git push -u origin main
   ```

## Step 2: Vercel Account Setup

1. **Vercel par jao**: https://vercel.com
2. **Sign up/Login** karo (GitHub account se easily sign up kar sakte hain)
3. **"New Project"** button par click karo

## Step 3: Project Import Karo

1. **GitHub repository select karo** (ya GitLab/Bitbucket)
2. **Project settings:**
   - **Framework Preset**: Vite (auto-detect ho jayega)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (auto-detect)
   - **Output Directory**: `dist` (auto-detect)
   - **Install Command**: `npm install` (auto-detect)

3. **Environment Variables** (agar chahiye to):
   - Abhi koi environment variable nahi chahiye

4. **"Deploy"** button par click karo

## Step 4: Deployment Complete! 🎉

- Vercel automatically build karega
- Deployment complete hone ke baad apko **deployment URL** milega
- Example: `https://recaptcha-app.vercel.app`

## Step 5: reCAPTCHA Domain Add Karo (Important!)

Deployment ke baad **zaroor** ye karna hai:

1. **Google reCAPTCHA Admin Panel** me jao:
   - https://www.google.com/recaptcha/admin
   - Apni site select karo

2. **Settings** me jao aur **Domains** section me:
   - Apna Vercel domain add karo:
     - `your-project.vercel.app`
     - `your-custom-domain.com` (agar custom domain use kar rahe ho)

3. **Save** karo

## Step 6: Custom Domain (Optional)

Agar custom domain chahiye:

1. Vercel dashboard me project settings me jao
2. **Domains** section me jao
3. Apna domain add karo
4. DNS settings configure karo (Vercel instructions dega)
5. Google reCAPTCHA me bhi ye domain add karo

## Important Notes:

✅ **Build automatically** - Vercel har push par automatically deploy karega  
✅ **HTTPS** - Vercel automatically HTTPS provide karta hai  
✅ **Fast CDN** - Global CDN se fast loading  
✅ **Free tier** - Personal projects ke liye free hai

## Troubleshooting:

### Agar build fail ho:
- Check karo ki `npm run build` locally work kar raha hai
- Vercel logs check karo

### Agar routing issue ho:
- `vercel.json` file check karo (already created)
- React Router ke liye rewrites properly configured hain

### reCAPTCHA error:
- Google admin panel me domain add kiya hai ya nahi check karo
- Domain exact match hona chahiye (subdomain bhi add karna hoga)

## Quick Deploy Commands:

```bash
# Local build test
npm run build

# Preview build locally
npm run preview

# Deploy via Vercel CLI (optional)
npm i -g vercel
vercel
```

