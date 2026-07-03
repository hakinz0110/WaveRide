# Meta Ads Setup Guide - 2026 Standard (CAPI + Pixel Hybrid)

## 🎯 Goal
Pay only for actual purchases (conversions), not just clicks - with bulletproof tracking that bypasses ad blockers and browser limitations.

## ⚠️ Why Your Tracking Must Use CAPI in 2026

**The Problem with Pixel-Only Tracking:**
- 30-40% of conversions are lost due to ad blockers
- iOS privacy settings block frontend pixels
- Users closing browser before redirect = lost conversions
- Safari Intelligent Tracking Prevention kills cookies

**The Solution: Conversions API (CAPI)**
- Server-to-server tracking bypasses browsers entirely
- Recovers 15-40% of missed conversion data
- Works even when users block cookies or close pages
- Required for Meta's algorithm to optimize properly

---

## 📋 Step-by-Step Setup (Selar Native Integration)

### Step 1: Get Your Meta Pixel ID

1. Go to [Meta Events Manager](https://business.facebook.com/events_manager)
2. Click "Connect Data Sources" → "Web" → "Meta Pixel"
3. Create a pixel and copy your **Pixel ID** (looks like: 1234567890123456)

### Step 2: Get Your Conversions API Access Token

1. In Meta Events Manager, click **"Settings"** for your pixel
2. Go to **"Conversions API"** tab
3. Click **"Generate Access Token"**
4. Copy the token (keep it secure!)

### Step 3: Enable CAPI in Selar (CRITICAL!)

**This is the game-changer - Selar handles CAPI automatically:**

1. Log into your [Selar Dashboard](https://selar.co)
2. Go to **Settings** → **Integrations** → **Meta Conversions API**
3. Paste your **Pixel ID**
4. Paste your **Access Token**
5. Enable **"Send Purchase Events via CAPI"**
6. Save settings

✅ **Done!** Selar now sends purchase data directly from their servers to Meta, bypassing all browser limitations.

### Step 4: Add Meta Pixel to Your Website (Frontend Layer)

Update **index.html** - Replace `YOUR_PIXEL_ID` with your actual Pixel ID in line ~11:

```javascript
fbq('init', 'YOUR_PIXEL_ID');
```

And line ~17:
```html
src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
```

### Step 5: Enable Advanced Matching (Boost EMQ Score)

In your Meta Events Manager:
1. Go to **"Settings"** → **"Advanced Matching"**
2. Turn ON all available fields:
   - Email
   - Phone
   - First Name
   - Last Name
   - City
   - State
   - Country
   - ZIP Code

**Target EMQ Score:** 6.0/10 or higher (required for efficient learning)

### Step 6: Verify Event Deduplication

Selar automatically handles event deduplication by sending the same `event_id` from both:
- Frontend (Pixel)
- Backend (CAPI)

Meta merges these events to prevent double-counting while ensuring no data is lost.

---

## 🧪 Testing Your Setup

### Test the Pixel:
1. Install [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper/) Chrome extension
2. Visit your page → Verify **PageView** event fires
3. Make a test purchase → Verify **Purchase** event fires

### Test CAPI:
1. Go to Meta Events Manager → **"Test Events"**
2. Make a test purchase on Selar
3. Check if Purchase event shows up with "Server" badge
4. Verify EMQ score is 6.0+ 

---

## 🎯 Create Meta Ad Campaign (Conversion-Optimized)

### Campaign Setup:
1. Go to Meta Ads Manager
2. **Objective:** Sales (Conversions)
3. **Conversion Event:** Purchase
4. **Optimization:** Conversions
5. **Bidding Strategy:** Lowest cost per purchase OR Cost cap (₦10,800)

### Campaign Settings:
- **Attribution Setting:** 7-day click, 1-day view
- **Conversion Window:** Purchase
- **Budget:** Start with minimum ₦5,000/day
- **Audience:** Broad to start (let Meta's algorithm find buyers)

---

## 📊 2026 Tracking Architecture

```
User Journey:
1. Sees your ad → Clicks
2. Lands on your page → Pixel fires "PageView"
3. Clicks "Buy Now" → Redirects to Selar
4. Completes payment on Selar

Backend (CAPI - Primary):
✅ Selar server → Meta server (Purchase event)
✅ Includes: email, phone, IP, user agent
✅ Works even if user closes browser

Frontend (Pixel - Backup):
✅ Browser → Meta (Purchase event)
✅ Same event_id as CAPI
✅ Meta deduplicates automatically

Result: 95%+ conversion tracking accuracy
```

---

## ✅ Benefits of This Setup:

✅ **40% more conversions tracked** vs pixel-only  
✅ **Pay only for purchases** (₦10,800 each)  
✅ **Works with ad blockers** and iOS privacy  
✅ **Better ROAS reporting** - no more drift  
✅ **Faster algorithm learning** - exits learning phase in 3-7 days  
✅ **Higher EMQ scores** - better audience targeting  

---

## 🚨 Critical Notes:

- **Don't skip CAPI setup** - Pixel alone loses 30-40% of data
- **Use Selar's native integration** - Don't try manual webhooks
- **Enable Advanced Matching** - Required for EMQ 6.0+
- **Let it learn** - Don't touch campaigns for 7 days
- **Need 50 purchases/week minimum** for full optimization

---

## 📚 Resources:

- [Selar CAPI Setup Guide](https://help.selar.com/portal/en/kb/articles/meta-conversions-api-capi-setup-on-selar)
- [Meta CAPI Documentation](https://developers.facebook.com/docs/marketing-api/conversions-api/)
- [Meta Events Manager](https://business.facebook.com/events_manager)

---

## 🆘 Need Help?

- **Selar Support:** support@selar.co
- **Meta Business Help:** https://www.facebook.com/business/help
- **Verify CAPI Status:** Check "Connection Quality" in Events Manager (should show "Good" or "Great")

