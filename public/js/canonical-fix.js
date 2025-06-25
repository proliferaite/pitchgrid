// Canonical URL Fix - Dynamically set canonical URLs based on current domain
// This ensures canonical URLs always match the actual hosting domain

(function() {
    // Get the current domain and protocol
    const currentDomain = window.location.origin;
    const currentPath = window.location.pathname;
    
    // Construct the canonical URL based on current location
    const canonicalUrl = currentDomain + currentPath;
    
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