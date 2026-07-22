/**
 * WaveRide Pricing Configuration
 * 
 * CHANGE ONLY THE USD PRICE BELOW - All other currencies auto-calculate!
 * 
 * To update pricing:
 * 1. Change PRICE_USD value (e.g., from 8.1 to 10)
 * 2. Save this file
 * 3. All landing pages will automatically show updated prices
 */

const PRICE_USD = 8.1; // ← CHANGE THIS VALUE TO UPDATE ALL PRICES

// Exchange rates (update these periodically if needed)
const EXCHANGE_RATES = {
  NGN: 1381.33,  // Nigerian Naira
  ZAR: 16.35,    // South African Rand
  GBP: 0.742156, // British Pound
  USD: 1         // US Dollar (base)
};

// Auto-calculate all prices based on USD price
const PRICES = {
  NGN: Math.round(PRICE_USD * EXCHANGE_RATES.NGN).toLocaleString('en-US'),
  ZAR: Math.round(PRICE_USD * EXCHANGE_RATES.ZAR),
  GBP: (PRICE_USD * EXCHANGE_RATES.GBP).toFixed(2),
  USD: PRICE_USD.toFixed(2)
};

// Currency configuration for auto-detection
const CURRENCY_CONFIG = {
  'NG': { 
    symbol: '₦', 
    price: PRICES.NGN, 
    code: 'NGN',
    usdPrice: PRICES.USD
  },
  'ZA': { 
    symbol: 'R', 
    price: PRICES.ZAR.toString(), 
    code: 'ZAR',
    usdPrice: PRICES.USD
  },
  'GB': { 
    symbol: '£', 
    price: PRICES.GBP, 
    code: 'GBP',
    usdPrice: PRICES.USD
  },
  'default': { 
    symbol: '$', 
    price: PRICES.USD, 
    code: 'USD',
    usdPrice: PRICES.USD
  }
};

// Export for use in HTML files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PRICE_USD, EXCHANGE_RATES, PRICES, CURRENCY_CONFIG };
}
