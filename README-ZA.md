# WaveRide - Supply & Demand Zone Indicator (South Africa Version)

A professional landing page for the WaveRide trading indicator - **South African Market Version** with localized pricing, content, and Meta Ads tracking.

## 🇿🇦 South Africa Specific Features

- **ZAR Pricing:** R135 (instead of ₦10,800)
- **Local Content:** South African cities and testimonials
- **Separate Tracking:** Dedicated Meta Pixel for SA campaigns
- **Market-Specific:** Optimized for South African traders

## 📦 What's Included

- ✅ Professional landing page design
- ✅ Meta Pixel tracking (needs YOUR SA-specific Pixel ID)
- ✅ Selar payment integration (needs YOUR ZAR payment link)
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Testimonial showcases
- ✅ FAQ section
- ✅ Video integration ready

## 💰 Product Details

- **Price:** R135 ($7.5 USD)
- **Payment:** One-time purchase via Selar
- **Includes:**
  - Supply & Demand Zone Indicator
  - Complete Setup Guide
  - Telegram Support
  - Works on All Markets (Forex, Crypto, Synthetics, Indices, Commodities)
  - Inner Circle Community

## 🚀 Setup Instructions

### Step 1: Create New Meta Pixel for South Africa
1. Go to [Meta Events Manager](https://business.facebook.com/events_manager)
2. Click "Connect Data Sources" → "Web" → "Meta Pixel"
3. Name it: "WaveRide - South Africa"
4. Copy the new Pixel ID

### Step 2: Update Pixel ID in Landing Page
Open `index-za.html` and replace:
```javascript
fbq('init', 'YOUR_ZA_PIXEL_ID_HERE');
```
With your actual South Africa Pixel ID.

### Step 3: Create Selar Product for ZAR Pricing
1. Login to [Selar](https://selar.co)
2. Create a new product
3. Set price to **R135** or **$7.5 USD**
4. Copy the new Selar payment link

### Step 4: Update Payment Links
In `index-za.html`, replace all instances of:
```
YOUR_SELAR_ZA_LINK_HERE
```
With your actual Selar product link (e.g., `https://selar.com/xxxxx`)

### Step 5: Deploy South Africa Version
Deploy to a separate URL:
- **Option A:** Use subdomain (e.g., `za.waveride.com`)
- **Option B:** Use path (e.g., `waveride.com/za`)
- **Option C:** Separate domain (e.g., `waveride.co.za`)

## 🎯 Why Separate Landing Pages?

### 1. **Isolated Tracking**
- Track South African conversions separately
- Better attribution and ROI analysis
- Clearer audience insights per country

### 2. **Localized Content**
- Currency in Rands (R) not Naira (₦)
- South African city names (Johannesburg, Cape Town, etc.)
- Market-appropriate messaging

### 3. **Independent Optimization**
- A/B test different approaches per market
- Adjust pricing independently
- Optimize for local audience behavior

### 4. **Better Ad Performance**
- Higher relevance scores
- Lower cost per conversion
- Improved user experience

## 📊 Meta Ads Campaign Setup (South Africa)

### Campaign Settings:
- **Objective:** Sales (Conversions)
- **Conversion Event:** Purchase
- **Budget:** Start with R500-1000/day
- **Locations:** South Africa only

### Audience Targeting:
- **Location:** South Africa (or specific cities)
- **Age:** 25-55
- **Interests:** Trading, Forex, Cryptocurrency, Stock Market
- **Behavior:** Interested in online purchases

### Ad Creative Tips:
- Use R135 pricing in all creative
- Mention South African success stories
- Show local payment methods
- Use "South African Rand" language

## 📁 File Structure

```
WaveRide/
├── index.html            # Original (Nigeria) version
├── index-za.html         # South Africa version (NEW)
├── README.md             # Original documentation
├── README-ZA.md          # South Africa documentation (this file)
└── img/                  # Shared images folder
```

## ✅ Pre-Launch Checklist

- [ ] Create separate Meta Pixel for SA
- [ ] Update Pixel ID in index-za.html
- [ ] Create Selar product with R135 pricing
- [ ] Update all payment links in index-za.html
- [ ] Deploy to separate URL
- [ ] Test purchase flow end-to-end
- [ ] Verify Pixel tracking with Meta Pixel Helper
- [ ] Create Meta Ads campaign targeting South Africa
- [ ] Set up CAPI in Selar dashboard

## 🔧 Quick Find & Replace Guide

To ensure all changes are made:

1. **Pixel ID:** Search for `YOUR_ZA_PIXEL_ID_HERE` (2 instances)
2. **Payment Link:** Search for `YOUR_SELAR_ZA_LINK_HERE` (2 instances)
3. **WhatsApp Number:** Update phone number if needed (search for `2348102792289`)

## 🌍 Deployment Options

### Option 1: Vercel (Recommended)
```bash
# Deploy both versions
vercel --prod
```
- Main site: `waveride.vercel.app`
- SA version: `waveride.vercel.app/za` or separate project

### Option 2: GitHub Pages
- Deploy to `username.github.io/WaveRide-ZA/`

### Option 3: Custom Domain
- Setup DNS for `za.yourdomain.com`
- Point to your hosting

## 📊 Tracking Both Versions

### In Meta Events Manager:
1. Original Pixel (1888089975192177) → Nigeria traffic
2. New SA Pixel → South Africa traffic

### Benefits:
- Separate conversion data
- Independent optimization
- Clear ROI per market
- Better budget allocation

## 💡 Pro Tips

1. **Different Creatives:** Create SA-specific ad images/videos
2. **Local Testimonials:** Get reviews from SA traders
3. **Payment Methods:** Highlight SA-friendly payment options
4. **Time Zones:** Schedule ads for SA peak hours (SAST)
5. **Language:** Use South African English spelling/terms

## 🆘 Support

- **Selar Support:** support@selar.co
- **Meta Business Help:** https://www.facebook.com/business/help

## 📞 Contact Updates

Remember to update the WhatsApp number in `index-za.html` if you want a South Africa-specific contact number:

```html
<a href="https://wa.me/YOUR_SA_NUMBER?text=Hi,%20I'm%20interested%20in%20the%20WaveRide%20indicator">
```

---

## 🎯 Next Steps

1. ✅ Landing page cloned and localized
2. ⏳ Create Meta Pixel for SA
3. ⏳ Create Selar product with R135 pricing
4. ⏳ Update Pixel ID and payment links
5. ⏳ Deploy to separate URL
6. ⏳ Launch Meta Ads campaign

**Your South Africa landing page is ready to be configured and deployed!** 🚀

