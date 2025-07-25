// PitchGrid Shared Navigation Component
// This creates consistent navigation across all pages

function createNavigation() {
    return `
        <nav>
            <div class="container">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about.html">About</a></li>
                    <li><a href="/blog.html">Blog</a></li>
                    <li><a href="/use-cases.html">Use Cases</a></li>
                    <li><a href="/sports-analysis.html">Sports Analysis</a></li>
                    <li><a href="/contact.html">Contact</a></li>
                    <li><a href="/privacy-policy.html">Privacy</a></li>
                    <li><a href="/terms.html">Terms</a></li>
                </ul>
            </div>
        </nav>
    `;
}

function createNavigationStyles() {
    return `
        <style>
            nav {
                background: white;
                padding: 1rem 0;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            
            nav ul {
                list-style: none;
                display: flex;
                justify-content: center;
                gap: 1.5rem;
                flex-wrap: wrap;
                margin: 0;
                padding: 0;
            }
            
            nav a {
                text-decoration: none;
                color: #667eea;
                font-weight: 500;
                padding: 0.5rem 0.8rem;
                border-radius: 4px;
                transition: background 0.3s;
                white-space: nowrap;
            }
            
            nav a:hover {
                background: #f8f9fa;
            }
            
            /* Highlight current page */
            nav a.current {
                background: #667eea;
                color: white;
            }
            
            @media (max-width: 900px) {
                nav ul {
                    gap: 1rem;
                }
                
                nav a {
                    padding: 0.4rem 0.6rem;
                    font-size: 0.95rem;
                }
            }
            
            @media (max-width: 600px) {
                nav ul {
                    gap: 0.5rem;
                }
                
                nav a {
                    padding: 0.3rem 0.5rem;
                    font-size: 0.9rem;
                }
            }
        </style>
    `;
}

function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('nav a');
    
    links.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        
        // Handle homepage
        if (currentPath === '/' || currentPath === '/index.html') {
            if (linkPath === '/') {
                link.classList.add('current');
            }
        }
        // Handle other pages
        else if (currentPath === linkPath) {
            link.classList.add('current');
        }
    });
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add navigation styles to head
    const head = document.head;
    head.insertAdjacentHTML('beforeend', createNavigationStyles());
    
    // Insert navigation after header
    const header = document.querySelector('header');
    if (header) {
        header.insertAdjacentHTML('afterend', createNavigation());
        
        // Highlight current page after navigation is inserted
        setTimeout(highlightCurrentPage, 0);
    }
}); 