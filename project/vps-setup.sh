#!/bin/bash

echo "🔧 Setting up khai.games on VPS..."

# Install Nginx if not installed
if ! command -v nginx &> /dev/null; then
    echo "📦 Installing Nginx..."
    sudo apt update
    sudo apt install nginx -y
fi

# Create directory
echo "📁 Creating web directory..."
sudo mkdir -p /var/www/khai-games

# Extract files (assuming khai-games.tar.gz is uploaded)
if [ -f khai-games.tar.gz ]; then
    echo "📦 Extracting files..."
    sudo tar -xzf khai-games.tar.gz -C /var/www/khai-games/
    sudo chown -R www-data:www-data /var/www/khai-games
    sudo chmod -R 755 /var/www/khai-games
else
    echo "⚠️  khai-games.tar.gz not found. Please upload it first."
    exit 1
fi

# Setup Nginx config
echo "⚙️  Configuring Nginx..."
sudo cp nginx-config.conf /etc/nginx/sites-available/khai-games
sudo ln -sf /etc/nginx/sites-available/khai-games /etc/nginx/sites-enabled/

# Remove default site
sudo rm -f /etc/nginx/sites-enabled/default

# Test and reload
echo "🧪 Testing Nginx configuration..."
sudo nginx -t

if [ $? -eq 0 ]; then
    echo "🔄 Reloading Nginx..."
    sudo systemctl reload nginx
    echo "✅ khai.games is now live!"
    echo "🌐 Visit: http://khai.games"
    echo ""
    echo "📋 Next: Set up Cloudflare DNS pointing to this VPS IP"
else
    echo "❌ Nginx configuration test failed!"
    exit 1
fi 