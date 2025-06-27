// Canonical URL Fix - Enforce canonical domain for SEO
// Always point to the preferred canonical domain

(function() {
    // Set your preferred canonical domain (change this to your preference)
    const canonicalDomain = 'https://proliferaite.com';
    const currentPath = window.location.pathname;
    
    // Construct the canonical URL using preferred domain
    const canonicalUrl = canonicalDomain + currentPath;
    
    // Find existing canonical tag or create one
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    
    if (canonicalTag) {
        // Update existing canonical tag
        canonicalTag.href = canonicalUrl;
    } else {
        // Create new canonical tag
        canonicalTag = document.createElement('link');
        canonicalTag.rel = 'canonical';
        canonicalTag.href = canonicalUrl;
        document.head.appendChild(canonicalTag);
    }
    
    // Also update Open Graph URL if it exists
    const ogUrlTag = document.querySelector('meta[property="og:url"]');
    if (ogUrlTag) {
        ogUrlTag.content = canonicalUrl;
    }
    
    // Update Twitter card URL if it exists
    const twitterUrlTag = document.querySelector('meta[name="twitter:url"]');
    if (twitterUrlTag) {
        twitterUrlTag.content = canonicalUrl;
    }
    
    console.log('Canonical URL set to:', canonicalUrl);
})(); 