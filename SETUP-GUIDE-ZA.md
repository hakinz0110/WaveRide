# Quick Setup Guide: South Africa Version

## 🎯 What Was Done

I've created a complete clone of your WaveRide landing page specifically for South Africa market:

### New Files Created:
- **index-za.html** - South Africa landing page
- **README-ZA.md** - Complete documentation
- **SETUP-GUIDE-ZA.md** - This quick guide

### Changes Made:
✅ Currency changed from ₦10,800 to **R135**
✅ Cities updated to South African locations (Johannesburg, Cape Town, Durban, etc.)
✅ Names updated to South African names (Thabo, Lerato, Sipho, etc.)
✅ Separate Meta Pixel placeholder for independent tracking
✅ Separate Selar payment link placeholder

---

## 🚀 3-Step Quick Start

### Step 1: Create South Africa Meta Pixel (5 minutes)

1. Go to https://business.facebook.com/events_manager
2. Click **"Connect Data Sources"** → **"Web"** → **"Meta Pixel"**
3. Name it: `WaveRide - South Africa`
4. Copy the Pixel ID (looks like: 1234567890123456)
5. Open `index-za.html` and replace **both** instances of:
   ```
   YOUR_ZA_PIXEL_ID_HERE
   ```
   With your new Pixel ID

### Step 2: Create Selar Product for ZAR (5 minutes)

1. Login to https://selar.co
2. Click **"Create Product"**
3. Fill in:
   - Name: WaveRide System - South Africa
   - Price: **R135** or **$7.5 USD**
   - Upload the product files
4. Save and copy the product link (e.g., `https://selar.com/abc123`)
5. In `index-za.html`, replace **both** instances of:
   ```
   YOUR_SELAR_ZA_LINK_HERE
   ```
   With your Selar link

### Step 3: Deploy (10 minutes)

**Option A: Vercel (Easiest)**
```bash
# If not installed
npm i -g vercel

# In your WaveRide folder
vercel --prod
```

**Option B: GitHub Pages**
1. Create new repo: `WaveRide-ZA`
2. Upload `index-za.html` renamed to `index.html`
3. Upload `img` folder
4. Enable GitHub Pages in settings

**Option C: Use existing hosting**
- Upload `index-za.html` to subdirectory `/za/`
- Access via: `yourdomain.com/za/`

---

## 📋 Checklist

Copy this to track your progress:

```
□ Create Meta Pixel for South Africa
□ Update Pixel ID in index-za.html (2 places)
□ Create Selar product with R135 pricing
□ Update payment links in index-za.html (2 places)
□ Deploy index-za.html to web hosting
□ Test the page loads correctly
□ Test purchase flow works
□ Install Meta Pixel Helper extension
□ Verify Pixel is firing on page
□ Create Meta Ads campaign
□ Set campaign location to South Africa
□ Launch ads!
```

---

## 🔍 Find & Replace Guide

Use your code editor's Find & Replace (Ctrl+H):

| Find This | Replace With | Count |
|-----------|--------------|-------|
| `YOUR_ZA_PIXEL_ID_HERE` | Your actual Pixel ID | 2 |
| `YOUR_SELAR_ZA_LINK_HERE` | Your Selar link | 2 |

---

## 🎯 Running Ads for Both Markets

### Nigeria Campaign:
- **Landing Page:** `index.html` (original)
- **Pixel ID:** 1888089975192177
- **Pricing:** ₦10,800
- **Location Targeting:** Nigeria

### South Africa Campaign:
- **Landing Page:** `index-za.html` (new)
- **Pixel ID:** Your new SA Pixel
- **Pricing:** R135
- **Location Targeting:** South Africa

### Benefits:
✅ Separate conversion tracking
✅ Independent budget optimization
✅ Clear ROI per country
✅ Market-specific messaging

---

## ⚠️ Common Mistakes to Avoid

1. **Using same Pixel for both:** Creates messy data
2. **Wrong currency in ads:** Confuses buyers
3. **Mixing audiences:** Wastes ad spend
4. **Same payment link:** Can't track which country buys

---

## 🆘 Need Help?

### Quick Checks:
- **Page not loading?** Check file path and hosting
- **Pixel not firing?** Use Meta Pixel Helper extension
- **Payment not working?** Verify Selar link is correct
- **Wrong price showing?** Clear browser cache

### Resources:
- Meta Events Manager: https://business.facebook.com/events_manager
- Selar Dashboard: https://selar.co/dashboard
- Meta Pixel Helper: https://chrome.google.com/webstore (search "Meta Pixel Helper")

---

## 📞 Update WhatsApp (Optional)

If you want a South Africa-specific WhatsApp number, update line ~1091 in `index-za.html`:

```html
<!-- Current (Nigeria number) -->
<a href="https://wa.me/2348102792289?text=...">

<!-- Change to SA number -->
<a href="https://wa.me/27XXXXXXXXX?text=...">
```

SA country code is **+27**

---

## ✅ You're Ready!

Your South Africa landing page is configured and ready to deploy. Once you complete the 3 steps above, you can:

1. Launch Meta Ads campaign targeting South Africa
2. Track conversions independently
3. Optimize based on SA market data
4. Scale profitable campaigns

**Good luck with your South African market launch!** 🚀🇿🇦

