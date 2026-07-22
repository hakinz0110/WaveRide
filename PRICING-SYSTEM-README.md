# 💰 Universal Pricing System

## 🎯 Overview

Your WaveRide landing pages now use a **centralized pricing system**. Change the price in ONE place, and all currencies across all landing pages update automatically!

---

## ⚡ Quick Start - How to Update Prices

### Step 1: Open the Config File
Open `price-config.js`

### Step 2: Change ONE Number
```javascript
const PRICE_USD = 8.1; // ← CHANGE THIS VALUE ONLY!
```

### Step 3: Save and Deploy
That's it! All prices automatically recalculate:
- ✅ Nigerian Naira (₦)
- ✅ South African Rand (R)
- ✅ British Pound (£)
- ✅ US Dollar ($)

---

## 📊 Current Pricing (as of last update)

| Currency | Price | Exchange Rate |
|----------|-------|---------------|
| 🇳🇬 Nigeria (NGN) | ₦11,189 | 1 USD = 1,381.33 NGN |
| 🇿🇦 South Africa (ZAR) | R132 | 1 USD = 16.35 ZAR |
| 🇬🇧 United Kingdom (GBP) | £6.01 | 1 USD = 0.742156 GBP |
| 🇺🇸 USA/Others (USD) | $8.10 | Base currency |

---

## 🔄 Example: Changing Price from $8.1 to $10

### Before (in price-config.js):
```javascript
const PRICE_USD = 8.1;
```

### After:
```javascript
const PRICE_USD = 10;
```

### Result - All Pages Automatically Show:
- 🇳🇬 **₦13,813** (≈$10 USD)
- 🇿🇦 **R164** (≈$10 USD)  
- 🇬🇧 **£7.42** (≈$10 USD)
- 🇺🇸 **$10.00**

---

## 🌍 What Gets Updated Automatically

When you change `PRICE_USD`, these elements update on ALL pages:

1. ✅ **Hero CTA buttons** - "Get it today for..."
2. ✅ **Ticker messages** - Scrolling price tickers
3. ✅ **Pricing section titles** - "₦11,189 ($8.1) — Everything Included"
4. ✅ **Main price displays** - Large price with "one-time"
5. ✅ **FAQ answers** - "One-time payment of..."
6. ✅ **Final CTA buttons** - Bottom call-to-action

---

## 🛠️ Advanced: Updating Exchange Rates

If exchange rates change significantly, update them in `price-config.js`:

```javascript
const EXCHANGE_RATES = {
  NGN: 1381.33,  // ← Update Nigerian Naira rate
  ZAR: 16.35,    // ← Update South African Rand rate
  GBP: 0.742156, // ← Update British Pound rate
  USD: 1         // ← Don't change this (base currency)
};
```

### Where to Get Current Rates:
- [Google Currency Converter](https://www.google.com/finance/quote/USD-NGN)
- [XE.com](https://www.xe.com/currencyconverter/)
- [OANDA](https://www.oanda.com/currency-converter/)

---

## 📁 File Structure

```
WaveRide/
├── price-config.js          ← CHANGE PRICES HERE!
├── index.html               ← Uses price-config.js
├── index-uk.html            ← Uses price-config.js
├── index-za.html            ← Uses price-config.js
└── PRICING-SYSTEM-README.md ← You are here
```

---

## 🎨 How It Works (Technical)

### 1. **Centralized Config**
`price-config.js` contains:
- One USD price variable
- Exchange rates for all currencies
- Auto-calculated prices for each currency

### 2. **Auto-Detection**
Each HTML page:
- Loads `price-config.js`
- Detects visitor's country via IP
- Shows appropriate currency
- Displays USD equivalent in brackets

### 3. **Smart Updates**
JavaScript automatically finds and updates:
- Button text
- Ticker items
- Section titles
- Price displays
- FAQ answers

---

## ✨ Benefits

### For You:
- ✅ **One-time setup** - Configure once, works forever
- ✅ **Single point of change** - Update price in one file
- ✅ **No manual calculations** - Math done automatically
- ✅ **Consistent pricing** - Same price across all pages
- ✅ **Easy maintenance** - No hunting through HTML

### For Customers:
- ✅ See prices in their local currency
- ✅ Know USD equivalent for transparency
- ✅ Better trust and confidence
- ✅ Professional international experience

---

## 🧪 Testing Your Price Changes

### Method 1: Test Locally
1. Change `PRICE_USD` in `price-config.js`
2. Open any HTML file in browser
3. Check all price elements updated

### Method 2: Test Live
1. Change `PRICE_USD` in `price-config.js`
2. Commit and push to GitHub
3. Wait for Vercel to deploy (~2 minutes)
4. Visit your live site and verify

### Method 3: Test Different Countries
Use VPN to test different locations:
- **VPN to Nigeria** → Should see ₦ prices
- **VPN to UK** → Should see £ prices
- **VPN to South Africa** → Should see R prices
- **VPN to USA** → Should see $ prices

---

## 📝 Common Scenarios

### Scenario 1: Running a Sale (40% off)
```javascript
// Original price: $8.1
// Sale price: $8.1 × 0.6 = $4.86

const PRICE_USD = 4.86;
```

### Scenario 2: Testing Price Points
```javascript
// Test different prices to find sweet spot
const PRICE_USD = 7.99;  // Try $7.99
// or
const PRICE_USD = 9.99;  // Try $9.99
// or
const PRICE_USD = 12.50; // Try $12.50
```

### Scenario 3: Currency Adjustment
```javascript
// If exchange rates changed dramatically
const EXCHANGE_RATES = {
  NGN: 1500,    // Updated from 1381.33
  ZAR: 18.50,   // Updated from 16.35
  GBP: 0.78,    // Updated from 0.742156
  USD: 1
};
```

---

## 🚨 Important Notes

### ⚠️ DON'T:
- ❌ Manually edit prices in HTML files
- ❌ Change exchange rates without research
- ❌ Use different prices in different files
- ❌ Forget to save after changing price

### ✅ DO:
- ✅ Only change `PRICE_USD` in `price-config.js`
- ✅ Use current exchange rates
- ✅ Test after every price change
- ✅ Keep rates updated quarterly

---

## 🐛 Troubleshooting

### Problem: Prices Not Updating
**Solution:** 
1. Check browser console for errors
2. Verify `price-config.js` loads before page script
3. Clear browser cache and reload

### Problem: Wrong Currency Showing
**Solution:**
1. Currency detection is IP-based
2. VPN users see VPN country's currency
3. Ad blockers may block geolocation APIs

### Problem: Decimal Places Wrong
**Solution:**
Edit `price-config.js` formatting:
```javascript
GBP: (PRICE_USD * EXCHANGE_RATES.GBP).toFixed(2), // 2 decimals
ZAR: Math.round(PRICE_USD * EXCHANGE_RATES.ZAR),  // No decimals
```

---

## 📞 Support Checklist

Before asking for help:
- [ ] Checked `price-config.js` has correct `PRICE_USD`
- [ ] Saved the file after making changes
- [ ] Cleared browser cache
- [ ] Tested in incognito/private window
- [ ] Checked browser console for errors
- [ ] Verified file is deployed to server

---

## 🎯 Quick Reference Card

```
╔══════════════════════════════════════════╗
║   TO UPDATE ALL PRICES:                  ║
║                                          ║
║   1. Open: price-config.js               ║
║   2. Find: const PRICE_USD = 8.1;        ║
║   3. Change: to your new price           ║
║   4. Save & Deploy                       ║
║                                          ║
║   That's it! Everything auto-updates ✨  ║
╚══════════════════════════════════════════╝
```

---

## 📚 Related Documentation

- `AUTO-CURRENCY-GUIDE.md` - How currency detection works
- `README.md` - Main project documentation
- `README-ZA.md` - South Africa specific info

---

**Made with ❤️ for WaveRide System**

*Last updated: Current implementation*
