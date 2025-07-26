#!/bin/bash

echo "🚀 Deploying khai.games..."

# Build the project
echo "📦 Building project..."
npm run build

# Create deployment package
echo "📁 Creating deployment package..."
tar -czf khai-games.tar.gz -C dist .

echo "✅ Build complete!"
echo ""
echo "📋 Next steps:"
echo "1. Upload khai-games.tar.gz to your VPS"
echo "2. Run these commands on your VPS:"
echo ""
echo "   # Extract files"
echo "   sudo mkdir -p /var/www/khai-games"
echo "   sudo tar -xzf khai-games.tar.gz -C /var/www/khai-games/"
echo "   sudo chown -R www-data:www-data /var/www/khai-games"
echo "   sudo chmod -R 755 /var/www/khai-games"
echo ""
echo "3. Copy nginx-config.conf to /etc/nginx/sites-available/khai-games"
echo "4. Enable site: sudo ln -s /etc/nginx/sites-available/khai-games /etc/nginx/sites-enabled/"
echo "5. Test and reload: sudo nginx -t && sudo systemctl reload nginx"
echo ""
echo "6. Set up Cloudflare DNS for khai.games pointing to your VPS IP"
echo "7. Enable HTTPS in Cloudflare SSL/TLS settings" 