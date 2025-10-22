# Setup Checklist

Follow this checklist to get your bakery website up and running!

## ✅ Pre-Launch Checklist

### 1. Customize Content

- [ ] **Update WhatsApp Number** in `menu-config.json`
  - Replace `"whatsappNumber": "1234567890"` with your actual number
  - Format: Country code + number (no spaces, no +)
  - Example: `919876543210` for India

- [ ] **Update About Page** (`about.html`)
  - [ ] Replace placeholder text with your story
  - [ ] Update business values and promises
  - [ ] Add your unique selling points

- [ ] **Update Chef Page** (`chef.html`)
  - [ ] Replace `[Your Name]` with actual name
  - [ ] Add your baking story
  - [ ] Update specialties and philosophy

- [ ] **Update Menu** (`menu-config.json`)
  - [ ] Add your actual products
  - [ ] Set correct prices
  - [ ] Update quantities available
  - [ ] Change currency if needed

### 2. Add Images

- [ ] **Logo** (`images/logo.png`)
  - [ ] Create or upload your bakery logo
  - [ ] Recommended: 200x200 pixels, PNG format
  - [ ] Will display as a circle

- [ ] **Product Images** (`images/products/`)
  - [ ] Add photos of your cupcakes
  - [ ] Add photos of your muffins
  - [ ] Add photos of your cookies
  - [ ] Add photos of your biscottis
  - [ ] Recommended: 800x800 pixels, JPG format

### 3. Brand Customization

- [ ] **Colors** (Optional - already set)
  - Primary: #4D5B4B (dark sage green)
  - Secondary: #F1DEBA (warm cream)
  - To change: Edit `css/style.css` lines 6-7


### 4. Test Locally

- [ ] **Test with Docker**
  ```bash
  docker-compose up
  ```
  Visit: http://localhost:8080

- [ ] **Test All Pages**
  - [ ] Home page loads correctly
  - [ ] Menu displays all items
  - [ ] About page content is correct
  - [ ] Chef page content is correct
  - [ ] Navigation works on all pages
  - [ ] Mobile view works (resize browser)

- [ ] **Test WhatsApp Links**
  - [ ] Click "Order on WhatsApp" button
  - [ ] Verify correct number opens
  - [ ] Check pre-filled message

### 5. Prepare for Deployment

- [ ] **Create GitHub Account**
  - Go to github.com
  - Sign up if you don't have an account

- [ ] **Create Repository**
  - Repository name: `hb` (or your choice)
  - Set to Public
  - Don't initialize with README

- [ ] **Validate Menu JSON**
  - Go to jsonlint.com
  - Paste menu-config.json content
  - Ensure no errors

## 🚀 Launch Checklist

### 1. Deploy to GitHub

- [ ] **Initialize Git**
  ```bash
  git init
  git add .
  git commit -m "Initial commit: Humble Bites"
  ```

- [ ] **Push to GitHub**
  ```bash
  git remote add origin https://github.com/priyaaank/hb.git
  git branch -M main
  git push -u origin main
  ```

### 2. Enable GitHub Pages

- [ ] Go to repository Settings
- [ ] Click "Pages" in sidebar
- [ ] Select branch: `main`
- [ ] Click "Save"
- [ ] Note your website URL: `https://priyaaank.github.io/hb/`

### 3. Verify Deployment

- [ ] Wait 2-3 minutes for deployment
- [ ] Visit your GitHub Pages URL
- [ ] Test all pages work
- [ ] Test on mobile device
- [ ] Test WhatsApp links work

## 📱 Post-Launch Checklist

### Share Your Website

- [ ] **Add to WhatsApp Status**
  - Share your website link
  - Add a nice message

- [ ] **Update WhatsApp Profile**
  - Add website link to business description

- [ ] **Share on Social Media**
  - Facebook
  - Instagram
  - Twitter

- [ ] **Send to Existing Customers**
  - WhatsApp broadcast
  - Email if you have a list

### Daily Operations

- [ ] **Create Daily Routine**
  - [ ] Update menu-config.json each morning
  - [ ] Set correct quantities
  - [ ] Update sold-out items during day
  - [ ] Push changes to GitHub

- [ ] **Test Workflow**
  ```bash
  # Edit menu-config.json
  git add menu-config.json
  git commit -m "Update menu for Oct 14"
  git push
  ```

## 🔧 Optional Enhancements

### Custom Domain
- [ ] Purchase a domain name
- [ ] Configure DNS settings
- [ ] Add custom domain to GitHub Pages
- [ ] Enable HTTPS

### Analytics
- [ ] Sign up for Google Analytics
- [ ] Add tracking code to all pages
- [ ] Monitor visitor traffic

### SEO
- [ ] Add meta descriptions to all pages
- [ ] Add relevant keywords
- [ ] Submit to Google Search Console

### Marketing
- [ ] Create QR code for your website
- [ ] Print on business cards
- [ ] Add to packaging labels

## 📋 File Locations Quick Reference

| What to Update | File Location |
|----------------|---------------|
| Daily Menu | `menu-config.json` |
| WhatsApp Number | `menu-config.json` |
| About Content | `about.html` |
| Chef Bio | `chef.html` |
| Logo | `images/logo.png` |
| Product Photos | `images/products/` |
| Colors | `css/style.css` |

## ✅ Final Check

Before going live, verify:

- [ ] All content is spelled correctly
- [ ] WhatsApp number is correct
- [ ] Prices are accurate
- [ ] Images load properly
- [ ] Mobile view works
- [ ] All links work
- [ ] Business information is accurate

## 🎉 You're Ready!

Once all checkboxes are complete, your bakery website is ready to take orders!

## Need Help?

- [ ] Read README.md for detailed instructions
- [ ] Check DEPLOYMENT.md for deployment help
- [ ] Review MENU-UPDATE-GUIDE.md for daily updates
- [ ] Visit GitHub Docs for GitHub Pages help

---

**Good luck with your bakery website!** 🧁
