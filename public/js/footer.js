// PitchGrid Shared Footer Component
// This enhances existing footers with consistent developer link

function addDeveloperLinkToFooter() {
    const footer = document.querySelector('footer');
    if (!footer) return;
    
    const container = footer.querySelector('.container') || footer.querySelector('div') || footer;
    if (!container) return;
    
    // Check if developer link already exists
    if (container.querySelector('[href*="proliferaite.com"]')) return;
    
    // Find the last paragraph in the footer
    const paragraphs = container.querySelectorAll('p');
    const lastParagraph = paragraphs[paragraphs.length - 1];
    
    // Create a new paragraph specifically for the developer link
    const developerParagraph = document.createElement('p');
    developerParagraph.style.marginTop = '1rem';
    developerParagraph.style.fontSize = '0.9rem';
    developerParagraph.style.opacity = '0.8';
    developerParagraph.innerHTML = 'Part of the <a href="https://proliferaite.com" target="_blank" style="color: #4285f4; text-decoration: none;">Proliferaite</a> developer ecosystem';
    
    // Add the developer link paragraph after the last paragraph
    if (lastParagraph) {
        lastParagraph.parentNode.insertBefore(developerParagraph, lastParagraph.nextSibling);
    } else {
        container.appendChild(developerParagraph);
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
                    <p>PitchGrid - Sports Video Analysis Made Simple</p>
                    <p>
                        <a href="/about.html" style="color: #4285f4;">About</a> | 
                        <a href="/contact.html" style="color: #4285f4;">Contact</a> | 
                        <a href="/privacy-policy.html" style="color: #4285f4;">Privacy Policy</a> | 
                        <a href="/terms.html" style="color: #4285f4;">Terms</a> | 
                        <a href="mailto:support@proliferaite.com" style="color: #4285f4;">Support</a>
                    </p>
                    <p style="margin-top: 1rem; font-size: 0.9rem; opacity: 0.8;">
                        Part of the <a href="https://proliferaite.com" target="_blank" style="color: #4285f4; text-decoration: none;">Proliferaite</a> developer ecosystem
                    </p>
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
    setTimeout(addDeveloperLinkToFooter, 100); // Small delay to ensure DOM is ready
}); 