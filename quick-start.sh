#!/bin/bash

# Humble Bites Website - Quick Start Script
# This script helps you get started quickly

echo "========================================="
echo "  Humble Bites Website - Quick Start"
echo "========================================="
echo ""

# Check if Docker is installed
if command -v docker &> /dev/null; then
    echo "✅ Docker is installed"
    HAS_DOCKER=true
else
    echo "⚠️  Docker is not installed"
    HAS_DOCKER=false
fi

echo ""
echo "What would you like to do?"
echo ""
echo "1. Test website locally with Docker"
echo "2. Test website locally with Python"
echo "3. Initialize Git repository"
echo "4. Validate menu configuration"
echo "5. View setup instructions"
echo ""
read -p "Enter your choice (1-5): " choice

case $choice in
    1)
        if [ "$HAS_DOCKER" = true ]; then
            echo ""
            echo "Starting Docker container..."
            echo "Your website will be available at: http://localhost:8080"
            echo "Press Ctrl+C to stop the server"
            echo ""
            docker-compose up
        else
            echo "Docker is not installed. Please install Docker first."
            echo "Visit: https://www.docker.com/get-started"
        fi
        ;;
    2)
        echo ""
        echo "Starting Python web server..."
        echo "Your website will be available at: http://localhost:8080"
        echo "Press Ctrl+C to stop the server"
        echo ""
        if command -v python3 &> /dev/null; then
            python3 -m http.server 8080
        elif command -v python &> /dev/null; then
            python -m SimpleHTTPServer 8080
        else
            echo "Python is not installed. Please install Python first."
        fi
        ;;
    3)
        echo ""
        echo "Initializing Git repository..."

        if [ -d .git ]; then
            echo "⚠️  Git repository already exists!"
        else
            git init
            git add .
            git commit -m "Initial commit: Humble Bites website"
            echo "✅ Git repository initialized!"
            echo ""
            echo "Next steps:"
            echo "1. Create a repository on GitHub"
            echo "2. Run these commands:"
            echo "   git remote add origin https://github.com/priyaaank/hb.git"
            echo "   git branch -M main"
            echo "   git push -u origin main"
        fi
        ;;
    4)
        echo ""
        echo "Validating menu-config.json..."
        if command -v python3 &> /dev/null; then
            python3 -c "import json; json.load(open('menu-config.json')); print('✅ Menu configuration is valid!')"
        elif command -v python &> /dev/null; then
            python -c "import json; json.load(open('menu-config.json')); print('✅ Menu configuration is valid!')"
        else
            echo "Python is not installed. Skipping validation."
            echo "You can validate at: https://jsonlint.com"
        fi
        ;;
    5)
        echo ""
        echo "Opening setup instructions..."
        if [ -f "SETUP-CHECKLIST.md" ]; then
            cat SETUP-CHECKLIST.md
        else
            echo "SETUP-CHECKLIST.md not found"
        fi
        ;;
    *)
        echo "Invalid choice. Please run the script again."
        ;;
esac

echo ""
echo "========================================="
echo "For more help, read:"
echo "  - README.md for comprehensive guide"
echo "  - SETUP-CHECKLIST.md for step-by-step setup"
echo "  - DEPLOYMENT.md for deployment instructions"
echo "========================================="
