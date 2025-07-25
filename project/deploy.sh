#!/bin/bash

# Production Deployment Script for Khai Games Landing Page

echo "🚀 Starting production deployment..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build for production
echo "🔨 Building for production..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Production files are in the 'dist' folder"
    echo ""
    echo "🌐 To serve the production build:"
    echo "   npm run serve"
    echo ""
    echo "🔧 For VPS deployment:"
    echo "   1. Upload the 'dist' folder to your VPS"
    echo "   2. Install nginx or apache"
    echo "   3. Configure to serve from the dist folder"
    echo "   4. Set up SSL certificate"
else
    echo "❌ Build failed!"
    exit 1
fi 