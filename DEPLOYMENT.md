# GitHub Pages Deployment

This repository is configured to automatically deploy to GitHub Pages using GitHub Actions.

## Setup Instructions

1. **Push to GitHub Repository**
   ```bash
   git add .
   git commit -m "Add GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click on **Settings** tab
   - Scroll down to **Pages** section
   - Under **Source**, select **GitHub Actions**

3. **Custom Domain Configuration**
   - The site is configured to deploy at: `https://humblebites.in`
   - Current configuration in `_config.yml`:
     ```yaml
     url: "https://humblebites.in"
     baseurl: ""
     ```
   - For custom domain setup:
     - Add a `CNAME` file in the repository root with `humblebites.in`
     - Configure DNS to point to GitHub Pages
     - Enable custom domain in GitHub Pages settings

## Automatic Deployment

The site will automatically deploy when you:
- Push changes to the `main` or `master` branch
- The workflow can also be triggered manually from the Actions tab

## Workflow Details

The GitHub Actions workflow (`/.github/workflows/jekyll.yml`) will:
1. Checkout the code
2. Setup Ruby and install dependencies
3. Build the Jekyll site
4. Deploy to GitHub Pages

## Local Development

To run the site locally:
```bash
bundle install
bundle exec jekyll serve
```

The site will be available at `http://localhost:4000`

## Troubleshooting

- Check the **Actions** tab in your GitHub repository for build logs
- Ensure GitHub Pages is enabled in repository settings
- Verify the `_config.yml` URL settings match your deployment URL