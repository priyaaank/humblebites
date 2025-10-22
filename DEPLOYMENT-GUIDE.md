# GitHub Pages Deployment Guide for humblebites.in

This guide will help you deploy your Humble Bites website to GitHub Pages with a custom domain (humblebites.in).

## Prerequisites

- GitHub account with repository at `https://github.com/[username]/hb`
- Access to humblebites.in domain DNS settings
- Repository already contains:
  - ✅ `.github/workflows/pages.yml` - GitHub Actions workflow
  - ✅ `CNAME` file with `humblebites.in`

## Step 1: Push Code to GitHub

If you haven't already pushed your code to GitHub:

```bash
# Initialize git repository (if not already done)
cd /Users/priyankg/code/hb
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Humble Bites website"

# Add remote repository (replace with your actual repo URL)
git remote add origin https://github.com/[YOUR_USERNAME]/hb.git

# Push to main branch
git branch -M main
git push -u origin main
```

## Step 2: Enable GitHub Pages

1. Go to your GitHub repository
2. Click on **Settings** tab
3. In the left sidebar, click **Pages**
4. Under **Source**, select:
   - Source: **GitHub Actions**
5. The workflow will automatically deploy when you push to the main branch

## Step 3: Configure Custom Domain

### In GitHub:

1. Still in **Settings > Pages**
2. Under **Custom domain**, enter: `humblebites.in`
3. Click **Save**
4. Wait for DNS check to complete
5. Once verified, check **Enforce HTTPS** (recommended)

### In Your Domain Registrar (DNS Settings):

You need to configure your domain's DNS records. Add the following records:

#### Option A: Using A Records (Recommended)

Add these **A records** pointing to GitHub's IP addresses:

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

#### Option B: Using CNAME Record (Alternative)

If you want to use www.humblebites.in:

```
Type: CNAME
Name: www
Value: [YOUR_GITHUB_USERNAME].github.io
```

Then add a redirect from humblebites.in to www.humblebites.in in your DNS settings.

#### Verify DNS with CNAME Record

Also add this for verification:

```
Type: CNAME
Name: _github-pages-challenge-[YOUR_USERNAME]
Value: (GitHub will provide this during verification)
```

## Step 4: Verify Deployment

1. Wait 5-10 minutes for DNS propagation
2. Visit `https://humblebites.in`
3. Your website should be live!

### Check Deployment Status:

1. Go to your GitHub repository
2. Click the **Actions** tab
3. You should see a workflow run for "Deploy static content to Pages"
4. Green checkmark ✅ means deployment succeeded

## Step 5: Future Updates

Whenever you make changes to your website:

```bash
# Make your changes to files
# Then commit and push:

git add .
git commit -m "Description of your changes"
git push origin main
```

The GitHub Actions workflow will automatically:
1. Detect the push to main branch
2. Build and deploy your site
3. Update humblebites.in within minutes

## Troubleshooting

### DNS Not Resolving

- DNS propagation can take 24-48 hours
- Use `dig humblebites.in` to check DNS records
- Clear your browser cache

### HTTPS Certificate Issues

- Wait up to 24 hours for GitHub to provision SSL certificate
- Ensure "Enforce HTTPS" is checked in Settings > Pages

### 404 Error

- Verify CNAME file exists in repository root
- Check that GitHub Pages source is set to "GitHub Actions"
- Verify workflow ran successfully in Actions tab

### Custom Domain Not Working

- Double-check DNS records at your domain registrar
- Ensure CNAME file contains only `humblebites.in` (no https://, no trailing slash)
- Try both with and without www (configure redirect if needed)

## Testing Locally

To test the website locally before deploying:

```bash
# Option 1: Using Python
python3 -m http.server 8000

# Option 2: Using Node.js
npx serve .

# Then visit http://localhost:8000 in your browser
```

## File Structure

Your repository should have this structure:

```
hb/
├── .github/
│   └── workflows/
│       └── pages.yml          # GitHub Actions workflow
├── images/
│   ├── logo.png
│   └── products/
├── css/
│   └── style.css
├── js/
│   └── menu-loader.js
├── index.html                  # Home page
├── menu.html                   # Menu page
├── about.html                  # About page
├── chef.html                   # Chef page
├── menu-config.json            # Menu configuration
├── CNAME                       # Custom domain file
└── README.md
```

## Important Notes

1. **CNAME File**: Must be in the root directory and contain only the domain name
2. **Branch**: GitHub Pages deploys from the `main` branch
3. **Workflow**: Automatically runs on every push to main
4. **HTTPS**: Free SSL certificate provided by GitHub
5. **Updates**: Changes appear within 1-5 minutes after push

## Need Help?

- GitHub Pages Documentation: https://docs.github.com/pages
- DNS Configuration Help: Contact your domain registrar
- GitHub Actions Logs: Check the Actions tab in your repository

## Current Status

✅ GitHub Actions workflow configured
✅ CNAME file created with humblebites.in
⏳ Waiting for: DNS configuration at domain registrar
⏳ Waiting for: GitHub Pages to be enabled in repository settings

Once you complete Steps 2-3 above, your site will be live at https://humblebites.in!
