# 🚀 Vercel Deployment - Quick Guide

## Method 1: GitHub se Deploy (Recommended)

### Step 1: GitHub Repository Banayein
```bash
git init
git add .
git commit -m "Ready for deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/recaptcha-app.git
git push -u origin main
```

### Step 2: Vercel me Deploy
1. **https://vercel.com** par jao
2. **"Sign Up"** karo (GitHub account se easily)
3. **"Add New Project"** button par click karo
4. Apni GitHub repository select karo
5. **Settings** (auto-detect ho jayega):
   - Framework: **Vite**
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. **"Deploy"** button par click karo

### Step 3: Deployment Complete! ✅
- 1-2 minutes me deploy ho jayega
- Apko URL milega: `https://your-project.vercel.app`

---

## Method 2: Vercel CLI se Deploy

```bash
# Vercel CLI install karo
npm i -g vercel

# Deploy karo
vercel

# Production deploy
vercel --prod
```

---

## ⚠️ IMPORTANT: reCAPTCHA Domain Add Karna

Deployment ke **baad zaroor** ye karna hai:

1. **Google reCAPTCHA Admin**: https://www.google.com/recaptcha/admin
2. Apni site select karo
3. **Settings** → **Domains** me jao
4. Apna Vercel domain add karo:
   - `your-project.vercel.app`
   - `your-project-git-main-yourusername.vercel.app` (agar preview URL hai)
5. **Save** karo

**Note**: Domain add nahi kiya to reCAPTCHA work nahi karega!

---

## ✅ Checklist

- [ ] GitHub repository me code push kiya
- [ ] Vercel account banaya
- [ ] Project deploy kiya
- [ ] Deployment successful hai
- [ ] Google reCAPTCHA me Vercel domain add kiya
- [ ] Site properly work kar rahi hai

---

## 🎯 Next Steps

1. **Custom Domain** (optional):
   - Vercel dashboard → Project → Settings → Domains
   - Apna domain add karo
   - DNS configure karo

2. **Environment Variables** (agar chahiye):
   - Vercel dashboard → Project → Settings → Environment Variables

---

## 🐛 Troubleshooting

### Build Fail?
- Locally test karo: `npm run build`
- Vercel logs check karo

### reCAPTCHA Error?
- Google admin panel me domain add kiya hai ya nahi
- Domain exact match hona chahiye

### Routing Issue?
- `vercel.json` file already configured hai
- React Router ke liye rewrites properly set hain

---

**Happy Deploying! 🎉**

