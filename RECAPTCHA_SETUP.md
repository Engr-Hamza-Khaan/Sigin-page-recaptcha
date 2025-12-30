# reCAPTCHA Key Setup Guide

## Step 1: Get Your reCAPTCHA Key

1. Visit: https://www.google.com/recaptcha/admin/create
2. Sign in with your Google account
3. Fill the form:
   - **Label**: Your site name (e.g., "My App")
   - **reCAPTCHA type**: Select "reCAPTCHA v2" → "I'm not a robot" Checkbox
   - **Domains**: Add `localhost` for development (add your production domain later)
4. Accept terms and submit
5. Copy your **Site Key** (not the Secret Key)

## Step 2: Replace Key in Code

Open `src/pages/SignIn.jsx` and replace line 85:

**Current (Demo Key):**
```jsx
sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
```

**Replace with your Site Key:**
```jsx
sitekey="YOUR_SITE_KEY_HERE"
```

## Step 3: For Production - Same Key Use Kar Sakte Hain! ✅

**Haan, same Site Key production me bhi use kar sakte hain!** Bas production domain add karna hoga.

### Production Setup:

1. **Google reCAPTCHA Admin Panel me jao:**
   - https://www.google.com/recaptcha/admin par jao
   - Apni reCAPTCHA site select karo

2. **Settings me jao:**
   - Settings icon par click karo
   - "Domains" section me jao

3. **Production Domain Add Karo:**
   - Apna production domain add karo (e.g., `yourdomain.com`, `www.yourdomain.com`)
   - Multiple domains add kar sakte hain:
     - `localhost` (development)
     - `yourdomain.com` (production)
     - `www.yourdomain.com` (production with www)
     - `app.yourdomain.com` (subdomain)

4. **Save Karo:**
   - Save button par click karo
   - Changes apply ho jayengi (usually instant, sometimes 1-2 minutes lag sakta hai)

### Important Points:

✅ **Same Site Key** - Code me koi change nahi karna, same key rahegi  
✅ **Multiple Domains** - Ek hi key se multiple domains use kar sakte hain  
✅ **No Code Changes** - Production me code change ki zarurat nahi  
✅ **Security** - Sirf whi domains se reCAPTCHA work karega jo admin panel me add ki hain

### Example Domains List:
```
localhost
yourdomain.com
www.yourdomain.com
app.yourdomain.com
```

### Code Example (Same for Dev & Production):
```jsx
<ReCAPTCHA
  sitekey="6LfW1DosAAAAAM97lH6CfrI1tCQGRbSwMtjPmbfu" // Same key everywhere
  onChange={handleRecaptchaChange}
  theme="light"
/>
```

**Note:** Agar domain add nahi kiya to reCAPTCHA production me work nahi karega. Error aayega: "Error for site owner: Invalid domain for site key"

