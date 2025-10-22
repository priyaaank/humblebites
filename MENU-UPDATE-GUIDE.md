# Quick Menu Update Guide

This guide helps you quickly update your daily menu without technical knowledge.

## Daily Menu Update (3 Simple Steps)

### Step 1: Open the Menu File
Open `menu-config.json` in any text editor:
- Windows: Notepad, Notepad++
- Mac: TextEdit, Visual Studio Code
- Linux: gedit, nano, vim

### Step 2: Update the Information

#### Update Date
```json
"lastUpdated": "2025-10-14"
```
Change to today's date (YYYY-MM-DD format)

#### Update Quantities
Find the item and change the number:
```json
"quantityAvailable": 24
```
Change `24` to how many you have available today.

#### Mark Item as Sold Out
```json
"available": true
```
Change `true` to `false` when sold out:
```json
"available": false
```

#### Change Price
```json
"price": 50
```
Change the number to your new price (don't add currency symbol here)

### Step 3: Save and Upload
- Save the file
- Upload to GitHub (see commands below)

## Common Tasks

### 1. Change WhatsApp Number

Find this line near the top:
```json
"whatsappNumber": "1234567890"
```

Replace with your number (no spaces, no +):
- India: `919876543210` for +91 98765 43210
- US: `12025551234` for +1 202 555 1234

### 2. Add a New Product

Copy an existing product block and modify:

```json
{
  "id": "red-velvet-cupcake",
  "name": "Red Velvet Cupcake",
  "description": "Classic red velvet with cream cheese frosting",
  "price": 65,
  "currency": "₹",
  "portionSize": "1 piece",
  "quantityAvailable": 12,
  "image": "images/products/red-velvet-cupcake.jpg",
  "available": true
}
```

**Important:** Add a comma after the previous item!

### 3. Remove a Product

Simply delete the entire product block (from `{` to `}`), including the comma if it's not the last item.

### 4. Change Product Description

Find the item and update the text:
```json
"description": "Light and fluffy vanilla cupcake with buttercream frosting"
```

## Upload Changes to Website

After editing `menu-config.json`, upload changes:

### Option 1: Using Terminal/Command Prompt
```bash
git add menu-config.json
git commit -m "Update menu for today"
git push
```

### Option 2: Using GitHub Desktop
1. Open GitHub Desktop
2. You'll see "menu-config.json" changed
3. Write a summary: "Update menu for Oct 14"
4. Click "Commit to main"
5. Click "Push origin"

### Option 3: Using GitHub Website
1. Go to your repository on GitHub
2. Click on `menu-config.json`
3. Click the pencil icon (Edit)
4. Paste your updated content
5. Click "Commit changes"

## Sample Menu Structure

```json
{
  "lastUpdated": "2025-10-14",
  "whatsappNumber": "919876543210",
  "categories": [
    {
      "id": "cupcakes",
      "name": "Cupcakes",
      "description": "Freshly baked cupcakes",
      "items": [
        {
          "id": "vanilla-cupcake",
          "name": "Vanilla Cupcake",
          "description": "Classic vanilla flavor",
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

## Important Rules

### JSON Syntax Rules
1. **Commas**: Add comma after each item except the last one
2. **Quotes**: Always use double quotes `"`, never single `'`
3. **Numbers**: No quotes around numbers (price, quantity)
4. **True/False**: No quotes around `true` or `false`

### Common Mistakes

❌ **Wrong:**
```json
"price": "50"          // Don't quote numbers
"available": "true"     // Don't quote true/false
'name': 'Cupcake'      // Don't use single quotes
"quantityAvailable": 24  // Missing comma before next item
```

✅ **Correct:**
```json
"price": 50,
"available": true,
"name": "Cupcake",
"quantityAvailable": 24,
```

## Validation

Before uploading, validate your JSON:
1. Go to [jsonlint.com](https://jsonlint.com)
2. Paste your menu configuration
3. Click "Validate JSON"
4. Fix any errors shown

## Quick Reference: Currency Symbols

Copy and paste these if needed:
- Rupee: ₹
- Dollar: $
- Euro: €
- Pound: £

## Example: Daily Morning Update

Let's say you baked:
- 24 Vanilla Cupcakes
- 18 Chocolate Cupcakes
- 20 Blueberry Muffins
- Banana Muffins are sold out

Update each item:
```json
{
  "id": "vanilla-cupcake",
  "quantityAvailable": 24,
  "available": true
},
{
  "id": "chocolate-cupcake",
  "quantityAvailable": 18,
  "available": true
},
{
  "id": "blueberry-muffin",
  "quantityAvailable": 20,
  "available": true
},
{
  "id": "banana-muffin",
  "quantityAvailable": 0,
  "available": false
}
```

## Troubleshooting

### Menu doesn't update on website
- Wait 2-3 minutes after pushing to GitHub
- Refresh browser (Ctrl+F5 or Cmd+Shift+R)
- Clear browser cache

### Website shows blank menu
- Check if you saved the file
- Validate JSON at jsonlint.com
- Look for missing commas or quotes

### Syntax error
- Check for missing commas
- Ensure all quotes are double quotes `"`
- Make sure every `{` has a matching `}`

## Need Help?

1. Check if your JSON is valid: [jsonlint.com](https://jsonlint.com)
2. Compare with the original `menu-config.json`
3. Review the syntax rules above
4. Check the main README.md for more details

---

**Keep this guide handy for daily updates!** 📝
