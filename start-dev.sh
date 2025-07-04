#!/bin/bash

echo "🍽️  Starting Humble Bites Development Server"
echo "=========================================="

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "❌ Docker is not running. Please start Docker first."
    exit 1
fi

echo "🐳 Starting Jekyll with Docker Compose..."
echo "📍 Site will be available at: http://localhost:4000"
echo "🔄 LiveReload enabled - changes will refresh automatically"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Start Docker Compose
docker-compose up