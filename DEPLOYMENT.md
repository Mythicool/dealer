# Deployment Guide - Thunder Auto Website

## 🚀 Cloudflare Pages Deployment

### Prerequisites

1. **Cloudflare Account**: Sign up at [cloudflare.com](https://cloudflare.com)
2. **GitHub Repository**: Code pushed to `github.com/Mythicool/dealer`
3. **Domain** (optional): Custom domain for production

### Automatic Deployment Setup

1. **Connect GitHub Repository**:
   - Go to Cloudflare Dashboard → Pages
   - Click "Create a project" → "Connect to Git"
   - Select `Mythicool/dealer` repository
   - Authorize Cloudflare access

2. **Configure Build Settings**:
   ```
   Framework preset: Next.js
   Build command: npm run build
   Build output directory: out
   Root directory: /
   ```

3. **Environment Variables** (if needed):
   ```
   NODE_VERSION=18
   NPM_VERSION=latest
   ```

### Manual Deployment

```bash
# Install Wrangler CLI
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
npm run build
wrangler pages publish out --project-name=thunder-auto-dealer
```

## 🔧 Build Optimization

### Performance Optimizations Applied

1. **Static Export**: Configured for edge deployment
2. **Image Optimization**: Unoptimized for static hosting
3. **Bundle Splitting**: Automatic with Next.js
4. **Asset Optimization**: Minified CSS/JS

### Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Test before deploy
npm run test

# Local preview
npm run start
```

## 🌐 Custom Domain Setup

1. **Add Domain in Cloudflare**:
   - Pages → Custom domains
   - Add `thunderauto.com`
   - Configure DNS records

2. **SSL Certificate**:
   - Automatic with Cloudflare
   - Full (strict) SSL mode recommended

## 📊 Performance Monitoring

### Cloudflare Analytics
- Page views and unique visitors
- Performance metrics
- Geographic distribution
- Bot traffic filtering

### Core Web Vitals
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1

## 🔒 Security Features

### Cloudflare Security
- DDoS protection
- Web Application Firewall (WAF)
- Bot management
- SSL/TLS encryption

### Content Security Policy
```html
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               img-src 'self' https://images.unsplash.com; 
               style-src 'self' 'unsafe-inline';">
```

## 🚦 Deployment Checklist

### Pre-Deployment
- [ ] All tests passing (25/25)
- [ ] Build successful locally
- [ ] Images optimized
- [ ] Meta tags configured
- [ ] Contact information updated
- [ ] Analytics tracking added

### Post-Deployment
- [ ] Site accessible at domain
- [ ] All pages loading correctly
- [ ] Forms submitting properly
- [ ] Mobile responsiveness verified
- [ ] Performance metrics acceptable
- [ ] SEO meta tags working

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow
```yaml
Trigger: Push to main branch
Steps:
1. Checkout code
2. Setup Node.js 18
3. Install dependencies
4. Run tests
5. Build application
6. Deploy to Cloudflare Pages
```

### Branch Strategy
- `main`: Production deployments
- `develop`: Staging environment
- `feature/*`: Feature branches

## 📈 Monitoring & Maintenance

### Regular Tasks
- Monitor site performance
- Update dependencies monthly
- Review analytics data
- Test contact forms
- Update vehicle inventory

### Backup Strategy
- Code: GitHub repository
- Configuration: Version controlled
- Analytics: Cloudflare dashboard exports

## 🆘 Troubleshooting

### Common Issues

1. **Build Failures**:
   ```bash
   # Clear cache and rebuild
   rm -rf .next node_modules
   npm install
   npm run build
   ```

2. **Image Loading Issues**:
   - Check `next.config.js` image domains
   - Verify image URLs are accessible
   - Use `unoptimized: true` for static export

3. **Routing Issues**:
   - Ensure `trailingSlash: true` in config
   - Check for client-side routing conflicts

### Support Resources
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Actions](https://docs.github.com/en/actions)

---

**Deployment Status**: ✅ Ready for production