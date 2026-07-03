# ✅ WaveRide Meta Ads Setup Checklist

## 🎯 Your Research Was Correct!

Your findings about CAPI being essential in 2026 are **100% accurate**. Here's what the data shows:
- ❌ Pixel-only tracking: **30-40% data loss**
- ✅ Hybrid (Pixel + CAPI): **95%+ accuracy**
- 📊 Recovery rate: **15-40% more conversions tracked**

---

## 📋 Setup Checklist

### 1. Meta Business Manager Setup
- [ ] Create Meta Business account
- [ ] Set up Meta Pixel in Events Manager
- [ ] Copy Pixel ID: `________________`
- [ ] Generate Conversions API Access Token
- [ ] Copy Access Token: `________________`
- [ ] Enable Advanced Matching (all fields)

### 2. Website Setup
- [ ] Replace `YOUR_PIXEL_ID` in index.html (line ~11)
- [ ] Replace `YOUR_PIXEL_ID` in index.html (line ~17)
- [ ] Push updated code to GitHub
- [ ] Verify pixel loads on live site

### 3. Selar Integration (MOST IMPORTANT!)
- [ ] Log into Selar dashboard
- [ ] Navigate to Settings → Integrations → Meta CAPI
- [ ] Paste Pixel ID
- [ ] Paste Access Token
- [ ] Enable "Send Purchase Events via CAPI"
- [ ] Save settings
- [ ] Verify connection status shows "Active"

### 4. Testing
- [ ] Install Meta Pixel Helper extension
- [ ] Visit your page → Verify PageView fires
- [ ] Make test purchase
- [ ] Check Events Manager for Purchase event
- [ ] Verify Purchase event has "Server" badge (CAPI)
- [ ] Check EMQ Score (target: 6.0+)

### 5. Campaign Setup
- [ ] Create new campaign in Meta Ads Manager
- [ ] Select "Sales" objective
- [ ] Choose "Purchase" conversion event
- [ ] Set budget (minimum ₦5,000/day to start)
- [ ] Select broad audience initially
- [ ] Launch campaign
- [ ] Wait 7 days for learning phase

---

## 🚨 Critical Success Factors

### ✅ DO:
- Use Selar's native CAPI integration
- Enable all Advanced Matching fields
- Let campaigns learn for 7 days minimum
- Track EMQ score (need 6.0+)
- Use broad audiences initially

### ❌ DON'T:
- Rely on pixel-only tracking
- Use manual redirect-based tracking
- Touch campaigns during learning phase
- Use narrow audiences before 50 purchases/week
- Skip CAPI setup

---

## 📊 Expected Results

### Week 1 (Learning Phase):
- Higher cost per purchase
- Unstable delivery
- Small audience reach
- **Action:** Don't change anything

### Week 2-3 (Optimization):
- Cost per purchase decreases
- Stable delivery
- Audience expands
- **Action:** Test new ad creatives

### Week 4+ (Scaled):
- Consistent ROAS
- Predictable conversions
- Ready to scale budget
- **Action:** Increase budget 20% weekly

---

## 🎯 Key Metrics to Track

- **EMQ Score:** 6.0+ (required)
- **Purchase Events:** Server + Browser both firing
- **Cost Per Purchase:** Target ≤ ₦15,000
- **ROAS:** Target 2.0+ (₦2 revenue per ₦1 spent)
- **Attribution:** 7-day click, 1-day view

---

## 📚 Quick Links

- [Selar CAPI Setup](https://help.selar.com/portal/en/kb/articles/meta-conversions-api-capi-setup-on-selar)
- [Meta Events Manager](https://business.facebook.com/events_manager)
- [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper/)
- [Your GitHub Repo](https://github.com/hakinz0110/WaveRide)

---

## 🆘 Troubleshooting

**Pixel not firing?**
- Check browser console for errors
- Verify Pixel Helper shows your pixel ID
- Clear cache and test again

**CAPI not working?**
- Check Selar integration status
- Verify Access Token is correct
- Check Events Manager connection quality

**Low EMQ Score?**
- Enable more Advanced Matching fields
- Verify Selar is passing customer data
- Check email/phone capture on checkout

**High cost per purchase?**
- Wait for learning phase (7 days)
- Check audience isn't too narrow
- Review ad creative quality

---

## ✨ Next Steps

1. Complete setup checklist above
2. Read full guide in META_ADS_SETUP.md
3. Launch test campaign with small budget
4. Monitor for 7 days without changes
5. Scale budget after successful learning phase

Good luck! 🚀
