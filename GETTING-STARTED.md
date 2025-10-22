# Getting Started - First 30 Minutes

Welcome! This guide will get your bakery website up and running in 30 minutes.

## ⏱️ Quick Timeline

- **0-10 min**: Customize content
- **10-15 min**: Test locally
- **15-25 min**: Deploy to GitHub
- **25-30 min**: Share with customers

---

## Step 1: Customize Your Content (10 minutes)

### A. Update WhatsApp Number

1. Open `menu-config.json` in any text editor
2. Find line 3: `"whatsappNumber": "1234567890"`
3. Replace with your WhatsApp number (no spaces, no +)
   - Example: `"whatsappNumber": "919876543210"` for +91 98765 43210

### B. Update Your Menu

Still in `menu-config.json`:

1. Update the date:
   ```json
   "lastUpdated": "2025-10-14"
   ```

2. Edit product names, descriptions, and prices:
   ```json
   {
     "name": "Your Cupcake Name",
     "description": "Your description",
     "price": 50,
     "quantityAvailable": 24
   }
   ```

3. Save the file

### C. Update About Page

1. Open `about.html` in text editor
2. Search for "Baking from the Heart" section
3. Replace placeholder text with your story
4. Save the file

### D. Update Chef Page

1. Open `chef.html` in text editor
2. Replace `[Your Name]` with your actual name
3. Update your bio and story
4. Save the file

✅ **Customization Complete!**

---

## Step 2: Test Locally (5 minutes)

### Option A: Using Docker (Recommended)

1. Open Terminal/Command Prompt
2. Navigate to your project folder:
   ```bash
   cd /Users/priyankg/code/hb
   ```

3. Start the server:
   ```bash
   docker-compose up
   ```

4. Open browser: http://localhost:8080

5. Test:
   - ✓ Home page loads
   - ✓ Click "Menu" - all items show
   - ✓ Click "About" - your story appears
   - ✓ Click "Chef" - your bio appears
   - ✓ Click "Order on WhatsApp" - opens WhatsApp with your number

6. Stop server: Press `Ctrl+C`

### Option B: Using Python

```bash
cd /Users/priyankg/code/hb
python3 -m http.server 8080
```

Visit: http://localhost:8080

### Option C: Using Quick Start Script

```bash
cd /Users/priyankg/code/hb
./quick-start.sh
```

Choose option 1 or 2

✅ **Testing Complete!**

---

## Step 3: Deploy to GitHub (10 minutes)

### A. Create GitHub Account (if needed)

1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Follow the instructions
4. Verify your email

### B. Create New Repository

1. Click "+" icon (top right) → "New repository"
2. Repository name: `hb`
3. Description: "Humble Bites"
4. Select: Public
5. Don't check any boxes
6. Click "Create repository"

### C. Push Your Website to GitHub

1. Open Terminal in your project folder:
   ```bash
   cd /Users/priyankg/code/hb
   ```

2. Initialize Git:
   ```bash
   git init
   ```

3. Add all files:
   ```bash
   git add .
   ```

4. Create first commit:
   ```bash
   git commit -m "Initial commit: Humble Bites website"
   ```

5. Connect to GitHub (replace `priyaaank` with your username):
   ```bash
   git remote add origin https://github.com/priyaaank/hb.git
   ```

6. Push to GitHub:
   ```bash
   git branch -M main
   git push -u origin main
   ```

   (You may need to enter your GitHub username and password/token)

### D. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" (top menu)
3. Click "Pages" (left sidebar)
4. Under "Source":
   - Branch: `main`
   - Folder: `/ (root)`
5. Click "Save"

6. Wait 2-3 minutes

7. Your website is live at:
   ```
   https://priyaaank.github.io/hb/
   ```
   (Replace `priyaaank` with your GitHub username)

✅ **Deployment Complete!**

---

## Step 4: Share Your Website (5 minutes)

### A. Get Your Website URL

Your website URL is:
```
https://YOUR-USERNAME.github.io/hb/
```

Example: `https://priyaaank.github.io/hb/`

### B. Share It

**WhatsApp Status:**
```
🧁 Exciting news! My bakery now has a website!
Check out today's menu: https://priyaaank.github.io/hb/
Order directly through the website! 🍪
```

**WhatsApp Groups:**
```
Hi everyone! 👋

I'm thrilled to announce my new bakery website!
🧁 Browse the menu
💰 See prices
📦 Order directly via WhatsApp

Visit: https://priyaaank.github.io/hb/

Fresh items available today! 🍪
```

**Instagram/Facebook:**
```
🎉 Big News! 🎉

Home Bites now has a website! 🧁

Visit to:
✓ See today's menu
✓ Check prices & availability
✓ Order via WhatsApp

Link in bio (or): https://priyaaank.github.io/hb/

#homebakery #freshbaked #cupcakes #cookies
```

✅ **All Done!**

---

## Daily Routine (5 minutes each morning)

### Update Your Menu

1. Open `menu-config.json`

2. Update date:
   ```json
   "lastUpdated": "2025-10-15"
   ```

3. Update quantities for each item:
   ```json
   "quantityAvailable": 24
   ```

4. Mark sold-out items:
   ```json
   "available": false
   ```

5. Save the file

6. Push to GitHub:
   ```bash
   git add menu-config.json
   git commit -m "Update menu for Oct 15"
   git push
   ```

7. Wait 2 minutes - your website is updated!

---

## Troubleshooting

### "git: command not found"

Install Git:
- Mac: `brew install git` or download from [git-scm.com](https://git-scm.com)
- Windows: Download from [git-scm.com](https://git-scm.com)

### "docker: command not found"

Install Docker:
- Visit [docker.com/get-started](https://www.docker.com/get-started)
- Or use Python method instead

### Website not loading after deployment

- Wait 3-5 minutes for GitHub Pages to build
- Check Settings → Pages to see if it's enabled
- Try hard refresh (Ctrl+Shift+R)

### Menu not showing

- Check `menu-config.json` at [jsonlint.com](https://jsonlint.com)
- Fix any JSON errors
- Push again

### WhatsApp link not working

- Check phone number format: no spaces, no +, include country code
- Example: `919876543210` not `+91 98765 43210`

---

## What's Next?

### Immediate (Today)
- [ ] Share website link with existing customers
- [ ] Post on social media
- [ ] Add to WhatsApp status

### This Week
- [ ] Replace logo.png with your actual logo
- [ ] Add product photos to images/products/
- [ ] Create a daily routine for menu updates
- [ ] Print QR code for your website

### This Month
- [ ] Collect customer feedback
- [ ] Add new products to menu
- [ ] Consider custom domain (optional)
- [ ] Track popular items

---

## Quick Commands Reference

```bash
# Test locally
docker-compose up

# Update menu
git add menu-config.json
git commit -m "Update menu"
git push

# Check status
git status

# See what changed
git diff menu-config.json
```

---

## Files You'll Edit Most

| File | How Often | Purpose |
|------|-----------|---------|
| `menu-config.json` | Daily | Update menu items |
| `about.html` | Once | Your business story |
| `chef.html` | Once | Your bio |
| `images/logo.png` | Once | Your logo |
| `images/products/` | When adding items | Product photos |

---

## Need Help?

1. **JSON Errors**: Use [jsonlint.com](https://jsonlint.com) to validate
2. **GitHub Issues**: Check [GitHub Docs](https://docs.github.com/en/pages)
3. **General Help**: Read [README.md](README.md)
4. **Setup Help**: Check [SETUP-CHECKLIST.md](SETUP-CHECKLIST.md)
5. **Deployment Help**: Read [DEPLOYMENT.md](DEPLOYMENT.md)

---

## Congratulations!

Your bakery website is now live! 🎉

- ✅ Professional online presence
- ✅ Easy WhatsApp ordering
- ✅ Daily menu updates in minutes
- ✅ Mobile-friendly design
- ✅ Free hosting forever

**Happy baking and happy selling!** 🧁🍪

---

**Pro Tip**: Bookmark your GitHub repository and your live website for quick access!
