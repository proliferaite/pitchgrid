// PitchGrid Shared Footer Component
// This enhances existing footers with consistent developer link

function addDeveloperLinkToFooter() {
    const footer = document.querySelector('footer');
    if (!footer) return;
    
    const container = footer.querySelector('.container');
    if (!container) return;
    
    // Check if developer link already exists
    if (container.querySelector('[href*="proliferaite.com"]')) return;
    
    // Get the current path to determine footer style
    const currentPath = window.location.pathname;
    
    // Find the last paragraph in the footer to add our link
    const paragraphs = container.querySelectorAll('p');
    const lastParagraph = paragraphs[paragraphs.length - 1];
    
    // Create developer link
    const developerLink = '<a href="https://proliferaite.com" target="_blank" style="color: #ccc; text-decoration: none;">Developer: Proliferaite</a>';
    
    // Determine how to add the link based on existing content
    if (lastParagraph && lastParagraph.innerHTML.includes('|')) {
        // If the last paragraph already has separator bars, add to it
        lastParagraph.innerHTML += ' | ' + developerLink;
    } else if (lastParagraph && (lastParagraph.innerHTML.includes('←') || lastParagraph.innerHTML.includes('Back to'))) {
        // If it's a back navigation link, add after it
        lastParagraph.innerHTML += ' | ' + developerLink;
    } else {
        // Create a new paragraph for the developer link
        const newParagraph = document.createElement('p');
        newParagraph.innerHTML = developerLink;
        container.appendChild(newParagraph);
    }
}

// For pages that don't have a footer at all, create a basic one
function createBasicFooterIfMissing() {
    if (!document.querySelector('footer')) {
        const body = document.body;
        const footerHTML = `
            <footer style="background: #333; color: white; text-align: center; padding: 2rem 0; margin-top: 3rem;">
                <div class="container">
                    <p>&copy; 2025 Proliferaite. All rights reserved.</p>
                    <p><a href="https://proliferaite.com" target="_blank" style="color: #ccc; text-decoration: none;">Developer: Proliferaite</a></p>
                </div>
            </footer>
        `;
        body.insertAdjacentHTML('beforeend', footerHTML);
    }
}

// Initialize footer enhancement when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // First ensure there's a footer
    createBasicFooterIfMissing();
    
    // Then add the developer link
    addDeveloperLinkToFooter();
}); 