# Deployment Guide

## GitHub Pages Deployment (Recommended)

GitHub Pages is the easiest and free way to host your bakery website.

### Step-by-Step Instructions

#### 1. Create a GitHub Account
- Go to [github.com](https://github.com)
- Sign up for a free account if you don't have one

#### 2. Create a New Repository
- Click the "+" icon in the top right
- Select "New repository"
- Name it `hb` (or any name you like)
- Make it Public
- Don't initialize with README (we already have one)
- Click "Create repository"

#### 3. Upload Your Website

**Option A: Using Git Command Line (Recommended)**

Open Terminal/Command Prompt in your website folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Humble Bites website"

# Add GitHub repository as remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/priyaaank/hb.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Option B: Using GitHub Desktop**
1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Open GitHub Desktop
3. Click "Add" → "Add Existing Repository"
4. Select your website folder
5. Click "Publish repository"

**Option C: Using Web Interface**
1. In your GitHub repository, click "uploading an existing file"
2. Drag and drop all your website files
3. Click "Commit changes"

#### 4. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" (top menu)
3. Click "Pages" in the left sidebar
4. Under "Source":
   - Select branch: `main`
   - Select folder: `/ (root)`
5. Click "Save"

#### 5. Access Your Website

After a few minutes, your site will be live at:
```
https://priyaaank.github.io/hb/
```

(Replace `priyaaank` with your GitHub username and `hb` with your repository name)

### Updating Your Menu Daily

Every time you want to update your menu:

```bash
# 1. Edit menu-config.json with your text editor

# 2. Commit the changes
git add menu-config.json
git commit -m "Update menu for October 14, 2025"

# 3. Push to GitHub
git push
```

Your website will automatically update in 1-2 minutes!

### Quick Update Script

Create a file named `update-menu.sh` for quick updates:

```bash
#!/bin/bash
echo "Updating menu..."
git add menu-config.json
git commit -m "Update menu for $(date +%Y-%m-%d)"
git push
echo "Menu updated! Changes will be live in 1-2 minutes."
```

Make it executable:
```bash
chmod +x update-menu.sh
```

Then just run:
```bash
./update-menu.sh
```

## Custom Domain (Optional)

Want to use your own domain like `www.yourbakery.com`?

### 1. Buy a Domain
Purchase a domain from:
- GoDaddy
- Namecheap
- Google Domains
- Any domain registrar

### 2. Configure DNS
Add these DNS records at your domain registrar:

**For www subdomain:**
```
Type: CNAME
Name: www
Value: priyaaank.github.io
```

**For root domain (optional):**
```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153
```

### 3. Configure GitHub Pages
1. Go to Settings → Pages
2. Enter your custom domain (e.g., `www.yourbakery.com`)
3. Click "Save"
4. Wait for DNS check to complete
5. Enable "Enforce HTTPS"

## Alternative Hosting Options

### Netlify (Free)

1. Go to [netlify.com](https://netlify.com)
2. Sign up for free
3. Drag and drop your website folder
4. Get instant deployment with custom domain support

### Vercel (Free)

1. Go to [vercel.com](https://vercel.com)
2. Sign up for free
3. Import your GitHub repository
4. Automatic deployments on every push

### Traditional Web Hosting

Upload all files to your web hosting via FTP:
- Upload all files to the `public_html` or `www` directory
- Make sure `index.html` is in the root
- Ensure file permissions are correct (644 for files, 755 for directories)

## Testing Before Deployment

Always test locally before deploying:

```bash
# Using Docker
docker-compose up

# Or using Python
python3 -m http.server 8080
```

Visit `http://localhost:8080` to test.

## Troubleshooting Deployment

### Changes not showing up
- Wait 2-5 minutes for GitHub Pages to rebuild
- Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
- Clear browser cache

### 404 Page Not Found
- Ensure `index.html` is in the root directory
- Check that GitHub Pages is enabled
- Verify the correct branch is selected

### Menu not loading
- Check `menu-config.json` is valid JSON
- Open browser console (F12) to see errors
- Ensure file paths are correct (case-sensitive)

### Images not showing
- Verify image paths in `menu-config.json`
- Check that images are uploaded to GitHub
- Ensure file names match exactly (case-sensitive)

## Security Notes

### WhatsApp Number
- Your WhatsApp number will be visible in the source code
- This is normal for business websites
- Use a business WhatsApp number, not personal

### Menu Configuration
- Don't put sensitive information in `menu-config.json`
- It's publicly accessible
- Only include product information and pricing

## Backup

Always keep a backup:

```bash
# Clone your repository to another location
git clone https://github.com/priyaaank/hb.git hb-backup
```

Or simply download a ZIP from GitHub:
- Go to your repository
- Click "Code" → "Download ZIP"

## Getting Help

If you run into issues:
1. Check this guide
2. Read the main README.md
3. Check GitHub Pages documentation
4. Search for error messages online
5. Ask for help in GitHub Issues

---

**Your bakery website is ready to go live!** 🎉
