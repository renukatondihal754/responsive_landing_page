# Responsive Landing Page with Hero Section

This project is a fully responsive landing page with a clean, animated hero section and modern UI. The layout adapts perfectly across devices including mobile phones, tablets (iPad, Surface, Zenbook Fold), and desktops.

## 🔧 Features
- Responsive layout using CSS Flexbox
- Mobile menu toggle
- Scroll reveal animation for features
- Smooth color gradients and hover effects
- Clean and minimal design for optimal readability

---

## 📱 Responsiveness Breakdown

### ✅ Mobile (≤ 768px)
- **Hero section** switches to `column` layout
- Navigation menu becomes a hamburger icon (`.menu-toggle`)
- Font sizes and padding are reduced for smaller screens
- Image width becomes 100% and centered

### ✅ Tablet (768px – 1100px)
- Previously, the layout stayed in a `row` flex mode, leading to extra white space
- This has been fixed by updating the media query to target **all tablet ranges**
- Now the `.hero-section` also stacks **vertically on tablets**
