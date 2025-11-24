# Deployment Guide: Bistro Boudoir Website

## Overview
This guide will help you deploy your Bistro Boudoir website to replace your existing Canva website at `bistroboudoir.be`.

---

## Step-by-Step: Replace Canva Website with Your New Site

### Step 1: Remove Domain from Canva

1. Log in to your Canva account
2. Go to your website project
3. Navigate to **Site Settings** or **Domain Settings**
4. Find the custom domain section
5. **Remove or disconnect** `bistroboudoir.be` from Canva
   - Look for "Remove domain" or "Disconnect domain" button
   - This releases the domain so you can use it elsewhere

**Note:** If you can't find this option, Canva may automatically release the domain when DNS changes are detected.

---

### Step 2: Check Current DNS Records on one.com

Before making changes, document what's currently set:

1. Log in to **one.com**
2. Go to **Domain Settings** → **DNS Settings**
3. **Document the current records** for `bistroboudoir.be`:
   - A records
   - CNAME records (especially for www)
   - Any other records

This helps you avoid conflicts and know what to remove.

---

### Step 3: Deploy Your New Site First

**Deploy to Vercel (Recommended):**

#### Option A: Via Vercel Website
1. Go to https://vercel.com
2. Sign up/Log in with **GitHub**
3. Click **"Add New Project"**
4. Import your GitHub repository: `ricojr84/bistro-boudoir2`
5. Configure:
   - **Framework Preset:** Vite
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Click **"Deploy"**
7. Wait for deployment to complete (you'll get a URL like `bistro-boudoir2.vercel.app`)

#### Option B: Via Vercel CLI
```bash
npm install -g vercel
cd /Users/rico/Desktop/bistro-boudoir2
vercel
```

---

### Step 4: Add Custom Domain in Vercel

1. In your Vercel project dashboard, go to **Settings** → **Domains**
2. Enter your domain: `bistroboudoir.be` (and `www.bistroboudoir.be`)
3. Click **"Add"**
4. Vercel will show you the DNS records you need to configure (you'll need these in Step 5)

---

### Step 5: Update DNS Records on one.com

**After deploying and adding domain in Vercel:**

1. Log in to **one.com**
2. Go to **DNS Settings**
3. **Remove old Canva records:**
   - Delete any A records pointing to Canva
   - Delete any CNAME records pointing to Canva
   - Remove any Canva-specific records

4. **Add new records for Vercel:**

   **For root domain (`bistroboudoir.be`):**
   - **Type:** A
   - **Name:** @ (or leave blank)
   - **Value:** `76.76.21.21` (Vercel's IP - verify in Vercel dashboard)
   - **TTL:** 3600 (or default)

   **For www subdomain (`www.bistroboudoir.be`):**
   - **Type:** CNAME
   - **Name:** www
   - **Value:** `cname.vercel-dns.com` (or the exact CNAME Vercel provides)
   - **TTL:** 3600 (or default)

**Important:** Vercel will show you the exact values in the Domains section. Use those exact values!

---

### Step 6: Wait for DNS Propagation

- DNS changes can take **5 minutes to 48 hours** to propagate globally
- Usually takes **15-30 minutes**
- Check status at: https://dnschecker.org
- Enter `bistroboudoir.be` and check A record propagation

---

### Step 7: Verify SSL Certificate

- Vercel automatically provisions SSL certificates
- After DNS propagates, HTTPS will be active
- This may take a few minutes after DNS is live

---

## Alternative: Deploy to Netlify

If you prefer Netlify:

1. **Deploy to Netlify:**
   - Go to https://www.netlify.com
   - Import your GitHub repo
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Add domain in Netlify:**
   - Site settings → Domain management
   - Add custom domain

3. **Configure DNS on one.com:**
   - For root domain: A record → `75.2.60.5` (Netlify's IP)
   - For www: CNAME → `bistroboudoir.netlify.app`

---

## Important: Avoid Conflicts

1. ✅ **Remove domain from Canva FIRST** (Step 1)
2. ✅ **Deploy new site BEFORE changing DNS** (Step 3)
3. ✅ **Remove old Canva DNS records BEFORE adding new ones** (Step 5)
4. ✅ **Wait for DNS propagation** (Step 6)

---

## Timeline Example

1. **Day 1:** Remove domain from Canva
2. **Day 1:** Deploy to Vercel
3. **Day 1:** Update DNS on one.com
4. **Day 1-2:** Wait for DNS propagation (15-30 minutes to 24 hours)
5. **Day 2:** Test your new site at `bistroboudoir.be`

---

## Troubleshooting

### Domain Still Shows Canva Site
- **Cause:** DNS hasn't propagated yet
- **Solution:** Wait longer, check DNS propagation status

### 404 Error
- **Cause:** DNS propagated but domain not added in Vercel
- **Solution:** Make sure you added the domain in Vercel settings

### SSL Certificate Error
- **Cause:** SSL certificate is still being provisioned
- **Solution:** Wait a few minutes after DNS propagates

---

## Quick Checklist

- [ ] Remove domain from Canva
- [ ] Deploy new site to Vercel/Netlify
- [ ] Add custom domain in Vercel/Netlify
- [ ] Remove old Canva DNS records on one.com
- [ ] Add new Vercel/Netlify DNS records on one.com
- [ ] Wait for DNS propagation
- [ ] Test new site

---

## Local Build Test

Before deploying, test the build locally:

```bash
cd /Users/rico/Desktop/bistro-boudoir2
npm run build
npm run preview
```

This builds your site and lets you preview it locally at `http://localhost:4173`

---

## Useful Links

- **Vercel:** https://vercel.com
- **Netlify:** https://www.netlify.com
- **DNS Checker:** https://dnschecker.org
- **GitHub Repo:** https://github.com/ricojr84/bistro-boudoir2

---

## Notes

- Your domain: `bistroboudoir.be`
- Your hosting: one.com
- Current site: Canva website (to be replaced)
- New site: React/Vite website (this project)

---

*Last updated: [Current Date]*

