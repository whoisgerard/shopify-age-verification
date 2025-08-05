# Shopify Age Verification Modal

A simple **age verification modal** for Shopify (or any website). Features:
- Fullscreen modal
- LocalStorage to remember user choice
- Confetti animation on "Yes"
- Mobile-friendly
- Easy integration into Shopify themes

---

## Demo
Open `index.html` in your browser to preview.

---

## Installation on Shopify
1. Upload `age-verification.css` and `age-verification.js` to **Assets** in your Shopify theme.
2. Add the modal HTML snippet to `theme.liquid` (at the bottom of `<body>`):
```liquid
{% include 'age-verification' %}
