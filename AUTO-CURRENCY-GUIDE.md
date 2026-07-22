# Auto Currency Detection Guide

## 🌍 How It Works

All three WaveRide landing pages now automatically detect the visitor's location and display prices in their local currency, similar to how Selar works.

## 💱 Supported Currencies

| Country | Currency | Price (≈$8.1 USD) | Display Format |
|---------|----------|-------------------|----------------|
| 🇳🇬 Nigeria | Naira (₦) | ₦11,189 | ₦11,189 (≈$8.1 USD) |
| 🇿🇦 South Africa | Rand (R) | R132 | R132 (≈$8.1 USD) |
| 🇬🇧 United Kingdom | Pound (£) | £6.01 | £6.01 (≈$8.1 USD) |
| 🌐 Others | USD ($) | $8.1 | $8.1 |

## 📍 Detection Method

The system uses two free geolocation APIs in sequence:

1. **Primary:** `ipapi.co` - Fast and reliable
2. **Fallback:** `ip-api.com` - Backup if primary fails
3. **Default:** If both fail, shows the currency already set in the HTML

## ✨ Features

### 1. **Automatic Detection**
- Detects visitor's country from their IP address
- No user input required
- Works instantly on page load

### 2. **Smart Formatting**
- Local currency shown prominently
- USD equivalent in brackets: `(≈$8.1 USD)`
- If visitor is from USA or undetected country, shows only `$8.1`

### 3. **Updates Multiple Elements**
- All "Get it today" buttons
- FAQ pricing answers
- Consistent across the entire page

## 🎯 Benefits

### For You:
- ✅ **One deployment** - All countries served from same URLs
- ✅ **No maintenance** - Currency updates automatically
- ✅ **Better conversions** - Visitors see familiar currency
- ✅ **Professional** - Like major international platforms

### For Visitors:
- ✅ See prices in their local currency immediately
- ✅ Understand exact cost without conversion
- ✅ More trust and confidence to buy

## 🔧 Technical Details

### Exchange Rates Used:
Based on mid-market rates as of July 2026:
- 1 USD = 1,381.33 NGN
- 1 USD = 16.35 ZAR
- 1 USD = 0.742156 GBP

### Implementation:
```javascript
// Currency configuration
const currencyConfig = {
  'NG': { symbol: '₦', price: '11,189', code: 'NGN' },
  'ZA': { symbol: 'R', price: '132', code: 'ZAR' },
  'GB': { symbol: '£', price: '6.01', code: 'GBP' },
  'default': { symbol: '$', price: '8.1', code: 'USD' }
};
```

## 📱 Testing

### Test Different Countries:
1. Use a VPN to change your location
2. Visit your landing page
3. Check that price updates automatically

### Expected Results:
- **From Nigeria:** See ₦11,189 (≈$8.1 USD)
- **From South Africa:** See R132 (≈$8.1 USD)
- **From UK:** See £6.01 (≈$8.1 USD)
- **From USA/Other:** See $8.1

## 🚀 Live URLs

All three pages have this feature:
- **Nigeria:** https://hakinz0110-waveride.vercel.app/
- **UK:** https://hakinz0110-waveride.vercel.app/index-uk.html
- **South Africa:** https://hakinz0110-waveride.vercel.app/index-za.html

## 💡 Pro Tips

### For Meta Ads:
1. **Geo-targeting still recommended:**
   - Target Nigeria → Use main URL
   - Target UK → Use `/index-uk.html`
   - Target SA → Use `/index-za.html`

2. **Why separate URLs?**
   - Different Meta Pixels per country
   - Better campaign tracking
   - Localized content (testimonials, cities)

### For Selar:
- Set up different products per currency
- Update payment links in each HTML file:
  - `index.html` → Nigeria Selar link
  - `index-uk.html` → UK Selar link  
  - `index-za.html` → SA Selar link

## 🔄 Updating Prices

To update prices (e.g., from $8.1 to $10):

1. Calculate new equivalents:
   ```
   NGN: 1,381.33 × 10 = ₦13,813
   ZAR: 16.35 × 10 = R164
   GBP: 0.742156 × 10 = £7.42
   ```

2. Update in all three HTML files:
   ```javascript
   const currencyConfig = {
     'NG': { symbol: '₦', price: '13,813', code: 'NGN' },
     'ZA': { symbol: 'R', price: '164', code: 'ZAR' },
     'GB': { symbol: '£', price: '7.42', code: 'GBP' },
     'default': { symbol: '$', price: '10', code: 'USD' }
   };
   ```

3. Update the USD amount in priceText format:
   ```javascript
   : `${currency.symbol}${currency.price} (≈$10 USD)`;
   ```

## 📊 Analytics

Track which currencies convert best:
- Monitor Meta Pixel events per country
- Compare conversion rates
- Adjust pricing strategy per market

## ⚠️ Limitations

1. **Requires internet:** APIs need to be accessible
2. **IP-based only:** Can't detect VPN users' actual location
3. **No real-time rates:** Uses fixed exchange rates
4. **Privacy:** Some ad blockers may block geolocation APIs

## 🆘 Troubleshooting

### Prices not updating?
- Check browser console for errors
- Verify APIs are accessible: https://ipapi.co/json/
- Check if ad blocker is interfering

### Wrong currency showing?
- Visitor might be using VPN
- Clear browser cache and reload
- Check IP detection: https://ip-api.com/json/

## 📞 Support

For currency detection issues:
- Test APIs directly in browser
- Check browser console logs
- Verify script is loading properly

---

**Your landing pages now provide a localized experience for global visitors!** 🌍
