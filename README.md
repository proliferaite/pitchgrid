# PitchGrid Website

Static website for PitchGrid - Professional Video Analysis for Sports.

## Deployment

This website is deployed on Cloudflare Pages with automatic deployment from the `main` branch.

### File Structure

- `public/` - Static website files
  - `index.html` - Main landing page
  - `privacy-policy.html` - Privacy policy
  - `*.mp4` - Demo videos (optimized for bandwidth)
  - `manifest.json` - PWA manifest
  - Various SEO and metadata files

### Features

- Optimized MP4 videos (90% smaller than original GIFs)
- SEO-optimized with structured data
- PWA-ready with manifest
- Mobile-responsive design

### Build

No build process required - deploy the `public/` directory directly.

## Migration from Firebase

This site was migrated from Firebase Hosting to Cloudflare Pages for:
- Predictable costs (no pay-per-request)
- Better global CDN performance
- Automatic deployments from Git 