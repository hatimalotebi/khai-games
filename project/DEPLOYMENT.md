# Khai Games Landing Page - Production Deployment Guide

## 🚀 Quick Start

### Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 VPS Deployment Options

### Option 1: Simple Static Hosting (Recommended)

1. **Build the project locally:**
   ```bash
   npm run build
   ```

2. **Upload the `dist` folder to your VPS:**
   ```bash
   scp -r dist/ user@your-vps-ip:/var/www/khai-games/
   ```

3. **Install and configure nginx:**
   ```bash
   sudo apt update
   sudo apt install nginx
   ```

4. **Copy the nginx configuration:**
   ```bash
   sudo cp nginx.conf /etc/nginx/sites-available/khai-games
   sudo ln -s /etc/nginx/sites-available/khai-games /etc/nginx/sites-enabled/
   ```

5. **Update the nginx config with your domain:**
   - Replace `your-domain.com` with your actual domain
   - Update SSL certificate paths
   - Update the root path if needed

6. **Test and restart nginx:**
   ```bash
   sudo nginx -t
   sudo systemctl restart nginx
   ```

### Option 2: PM2 Process Manager

1. **Install PM2 globally:**
   ```bash
   npm install -g pm2
   ```

2. **Build and deploy:**
   ```bash
   npm run build
   pm2 start ecosystem.config.js
   ```

3. **Set up PM2 to start on boot:**
   ```bash
   pm2 startup
   pm2 save
   ```

## 🔧 SSL Certificate Setup

### Using Let's Encrypt (Free):
```bash
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d your-domain.com
```

## 📊 Performance Optimization

### Built-in Optimizations:
- ✅ Code splitting and lazy loading
- ✅ Minified and compressed assets
- ✅ Optimized images
- ✅ Gzip compression
- ✅ Browser caching
- ✅ Security headers

## 🔒 Security Checklist

- [ ] SSL certificate installed
- [ ] Security headers configured
- [ ] Hidden files access denied
- [ ] Error pages configured
- [ ] Regular security updates
- [ ] Firewall configured

## 📝 Monitoring

### PM2 Monitoring:
```bash
pm2 monit
pm2 logs khai-games-landing
```

### Nginx Logs:
```bash
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

## 🚨 Troubleshooting

### Common Issues:

1. **Port 80/443 already in use:**
   ```bash
   sudo netstat -tulpn | grep :80
   sudo systemctl stop apache2  # if using Apache
   ```

2. **Permission denied:**
   ```bash
   sudo chown -R www-data:www-data /var/www/khai-games/
   sudo chmod -R 755 /var/www/khai-games/
   ```

3. **SSL certificate issues:**
   ```bash
   sudo nginx -t
   sudo certbot certificates
   ```

---

**Version:** 1.0.0
