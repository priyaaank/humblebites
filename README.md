# Humble Bites Website

A simple, modern, and responsive website for a Humble Bites. Built with pure HTML, CSS, and JavaScript - no build process required!

## Features

- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Easy Menu Management**: Update menu items via a simple JSON configuration file
- **WhatsApp Integration**: Direct ordering through WhatsApp
- **Modern UI**: Clean and attractive design with your brand colors (#4D5B4B and #F1DEBA)
- **GitHub Pages Ready**: Deploy directly to GitHub Pages
- **Docker Support**: Test locally with Docker

## Website Pages

1. **Home** (`index.html`) - Hero section, features, and today's specials
2. **Menu** (`menu.html`) - Complete menu with categories and products
3. **About** (`about.html`) - Business story and values
4. **Chef** (`chef.html`) - Chef profile and specialties

## Quick Start

### Local Development with Docker

1. Make sure Docker is installed on your system
2. Run the website locally:
   ```bash
   docker-compose up
   ```
3. Open your browser and visit: `http://localhost:8080`

To stop the server, press `Ctrl+C` in the terminal.

### Local Development without Docker

Simply open `index.html` in your web browser. However, the menu won't load due to CORS restrictions. Use a simple local server instead:

```bash
# Using Python 3
python3 -m http.server 8080

# Using Python 2
python -m SimpleHTTPServer 8080

# Using Node.js (if you have npx)
npx serve
```

Then visit `http://localhost:8080`

## Updating the Menu

### Daily Menu Updates

Edit the `menu-config.json` file to update your daily menu:

```json
{
  "lastUpdated": "2025-10-14",
  "whatsappNumber": "1234567890",
  "categories": [
    {
      "id": "cupcakes",
      "name": "Cupcakes",
      "description": "Freshly baked cupcakes",
      "items": [
        {
          "id": "vanilla-cupcake",
          "name": "Classic Vanilla Cupcake",
          "description": "Light and fluffy vanilla cupcake",
          "price": 50,
          "currency": "₹",
          "portionSize": "1 piece",
          "quantityAvailable": 24,
          "image": "images/products/vanilla-cupcake.jpg",
          "available": true
        }
      ]
    }
  ]
}
```

### Configuration Fields

- **lastUpdated**: Date of last menu update (YYYY-MM-DD)
- **whatsappNumber**: Your WhatsApp business number (country code + number, no + or spaces)
  - Example: For +1 234 567 8900, use `12345678900`
  - Example: For +91 98765 43210, use `919876543210`
- **categories**: Array of product categories
  - **id**: Unique identifier (lowercase, no spaces)
  - **name**: Display name
  - **description**: Category description
  - **items**: Array of products in this category

### Product Fields

- **id**: Unique identifier
- **name**: Product name
- **description**: Short description
- **price**: Price (numeric)
- **currency**: Currency symbol (₹, $, €, etc.)
- **portionSize**: Size/quantity per unit ("1 piece", "6 pack", etc.)
- **quantityAvailable**: Number of items available
- **image**: Path to product image
- **available**: true/false (set to false for sold-out items)

## Customization

### Update WhatsApp Number

1. Open `menu-config.json`
2. Update the `whatsappNumber` field
3. Format: country code + number (no spaces or special characters)
   - Example: `919876543210` for +91 98765 43210

### Add Product Images

1. Add your product photos to `images/products/`
2. Update the `image` path in `menu-config.json`
3. Recommended: Square images (800x800px), under 500KB

### Replace Logo

Replace `images/logo.png` with your own logo:
- Recommended size: 200x200 pixels
- Format: PNG with transparent background
- The logo will be displayed as a circle (50x50px)

### Update Brand Colors

Edit `css/style.css` and change the CSS variables at the top:

```css
:root {
    --primary-color: #4D5B4B;    /* Your primary brand color */
    --secondary-color: #F1DEBA;  /* Your secondary brand color */
}
```

### Customize Content

#### About Page
Edit `about.html` to update:
- Your business story
- Values and promises
- Any custom content

#### Chef Page
Edit `chef.html` to update:
- Chef name and bio
- Philosophy and specialties
- Personal story

## Deployment to GitHub Pages

### Prerequisites

1. Create a GitHub account if you don't have one
2. Create a repository named `hb` or any name you prefer

### Deploy Steps

1. **Initialize Git repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Humble Bites website"
   ```

2. **Connect to your GitHub repository**:
   ```bash
   git remote add origin https://github.com/priyaaank/hb.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click on "Settings"
   - Scroll down to "Pages" in the left sidebar
   - Under "Source", select "main" branch
   - Click "Save"
   - Your site will be published at: `https://priyaaank.github.io/hb/`

4. **Update menu daily**:
   ```bash
   # Edit menu-config.json with your daily menu
   git add menu-config.json
   git commit -m "Update menu for [date]"
   git push
   ```

   Your changes will be live in a few minutes!

## File Structure

```
hb/
├── index.html              # Home page
├── menu.html               # Menu page
├── about.html              # About page
├── chef.html               # Chef profile page
├── menu-config.json        # Menu configuration (edit daily)
├── css/
│   └── style.css          # All styles
├── js/
│   └── menu-loader.js     # Menu loading logic
├── images/
│   ├── logo.png           # Your logo
│   ├── products/          # Product images
│   └── README.md          # Image guidelines
├── Dockerfile             # Docker configuration
├── docker-compose.yml     # Docker Compose configuration
├── .gitignore            # Git ignore file
└── README.md             # This file
```

## Tips for Daily Operations

### Morning Routine
1. Update `menu-config.json` with today's available items
2. Update quantities based on what you've baked
3. Commit and push changes to GitHub

### During the Day
- Mark items as unavailable when sold out: `"available": false`
- Update quantities as items sell
- Push updates to keep customers informed

### Common Tasks

**Mark an item as sold out:**
```json
{
  "available": false,
  "quantityAvailable": 0
}
```

**Add a new product:**
Add a new object to the `items` array in the appropriate category.

**Remove a category:**
Delete the entire category object from the `categories` array.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Menu doesn't load
- Make sure you're using a web server (not opening the file directly)
- Check browser console for errors
- Verify `menu-config.json` is valid JSON (use a JSON validator)

### WhatsApp links don't work
- Verify `whatsappNumber` format (country code + number, no spaces)
- Make sure WhatsApp is installed on the device

### Images don't show
- Check image file paths in `menu-config.json`
- Ensure images exist in the `images/products/` folder
- Check image file names (case-sensitive)

### Docker container won't start
- Make sure Docker is running
- Check if port 8080 is available
- Try: `docker-compose down && docker-compose up`

## Support

For questions or issues:
1. Check this README
2. Review the code comments
3. Validate your JSON configuration
4. Check browser console for errors

## License

MIT License

## Credits

Built with love for home bakers everywhere!

---

**Happy Baking!** 🧁
