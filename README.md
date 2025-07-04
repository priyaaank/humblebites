# Humble Bites - Chef Menu Website

A beautiful, responsive Jekyll website for displaying a restaurant menu with a split-screen design. Built for GitHub Pages deployment.

## Features

- **Split-screen design**: Fixed sidebar with navigation, scrollable main content
- **Responsive layout**: Works on desktop, tablet, and mobile devices
- **Synchronized scrolling**: Navigation updates as you scroll through menu sections
- **Configurable content**: All menu items, categories, and site information stored in `_data/menu.yml`
- **Custom color palette**: Earthy tones (#4D5B4B, #F1DEBA, #A4AC8D, #A4A494)
- **Smooth animations**: Hover effects and smooth scrolling
- **SEO optimized**: Includes meta tags and structured data

## Quick Start

1. **Fork this repository** or clone it to your local machine
2. **Update the configuration** in `_config.yml`:
   - Change `url` to your GitHub Pages URL
   - Update site title, description, and chef information
3. **Customize the menu** by editing `_data/menu.yml`
4. **Replace placeholder images** in `assets/images/` with actual food photos
5. **Deploy to GitHub Pages**:
   - Go to repository Settings > Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Save and wait for deployment

## Customization

### Menu Content
Edit `_data/menu.yml` to customize:
- Menu categories
- Food items with descriptions and prices
- Image paths

### Site Information
Edit `_config.yml` to update:
- Site title and description
- Chef name and location
- SEO settings

### Styling
Modify the color palette in `_sass/_variables.scss`:
```scss
$primary-green: #4D5B4B;
$cream: #F1DEBA;
$sage-green: #A4AC8D;
$muted-gray: #A4A494;
```

### Images
Replace placeholder images in `assets/images/` with high-quality food photography (recommended size: 300x300px).

## Demo Preview

🎭 **View the site design**: Open `demo.html` in your browser to see a static preview of how the Jekyll site will look with your color palette and layout.

## Local Development

### Option 1: Docker (Recommended)

1. **Prerequisites**: Install [Docker](https://docker.com) and Docker Compose

2. **Run with Docker Compose**:
   ```bash
   # Start the development server
   docker-compose up
   
   # Or run in background
   docker-compose up -d
   ```

3. **Access the site**:
   - Jekyll site: http://localhost:4000
   - LiveReload enabled for automatic refresh on changes

4. **Alternative Jekyll image**:
   ```bash
   # Use official Jekyll image instead
   docker-compose --profile alternative up jekyll-official
   # Available on http://localhost:4001
   ```

5. **Stop the containers**:
   ```bash
   docker-compose down
   ```

### Option 2: Local Ruby Installation

1. Install Jekyll and dependencies:
   ```bash
   bundle install
   ```

2. Run the development server:
   ```bash
   bundle exec jekyll serve
   ```

3. Open http://localhost:4000 in your browser

### Development Notes

- **LiveReload**: Both Docker and local development support automatic browser refresh
- **File watching**: Changes to `_config.yml` require server restart
- **Image optimization**: Placeholder images are 300x300px - replace with high-quality food photos

## File Structure

```
├── _config.yml           # Site configuration
├── _data/
│   └── menu.yml         # Menu content and categories
├── _layouts/
│   └── default.html     # Main layout template
├── _sass/
│   ├── _variables.scss  # Color palette and variables
│   └── _layout.scss     # Main styling
├── assets/
│   ├── css/
│   │   └── main.scss    # CSS compilation
│   ├── js/
│   │   └── menu.js      # Navigation and scrolling
│   └── images/          # Food photos
├── index.html           # Homepage template
└── README.md            # This file
```

## Deployment

This site is designed for GitHub Pages deployment:

1. Push your code to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Your site will be available at `https://username.github.io/repository-name`

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for mobile devices
- Graceful degradation for older browsers

## License

MIT License - feel free to use this template for your restaurant or modify it as needed.