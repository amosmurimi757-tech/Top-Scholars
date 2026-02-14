// ========== PRODUCT DATA ==========
const products = [
    { id: 1, name: '20L Exterior Wall Paint', description: 'Durable exterior wall paint', category: 'Paints' },
    { id: 2, name: '5L Interior Paint', description: 'Quality interior finish paint', category: 'Paints' },
    { id: 3, name: 'Premium Gloss Paint 10L', description: 'High-gloss professional paint', category: 'Paints' },
    { id: 4, name: 'Waterproof Roof Paint 5L', description: 'Weather-resistant roof coating',, category: 'Paints' },
    { id: 5, name: 'Electric Drill 500W', description: 'Powerful handheld electric drill', , category: 'Electronics' },
    { id: 6, name: 'Angle Grinder 750W', description: 'Professional cutting & grinding tool', category: 'Electronics' },
    { id: 7, name: 'LED Floodlight 100W', description: 'Energy-efficient outdoor lighting', category: 'Electronics' },
    { id: 8, name: 'Extension Cable 10M', description: 'Heavy-duty extension cord', category: 'Electronics' },
    { id: 9, name: 'PVC Pipe 2-inch', description: 'Standard plumbing pipe', category: 'Plumbing' },
    { id: 10, name: 'Shower Mixer Set', description: 'Modern shower mixing valve', category: 'Plumbing' },
    { id: 11, name: 'Stainless Steel Sink Tap', description: 'Durable kitchen sink faucet', category: 'Plumbing' },
    { id: 12, name: 'Water Pump 1HP', description: 'Powerful water pump system', category: 'Plumbing' },
    { id: 13, name: 'Plumbing Tool Kit', description: 'Complete plumbing tools set', category: 'Plumbing' },
    { id: 14, name: 'Circuit Breaker 32A', description: 'Safety circuit protection device', category: 'Electronics' },
    { id: 15, name: 'LED Bulb 12W', description: 'Long-lasting LED lighting',, category: 'Electronics' },
    { id: 16, name: 'Industrial Socket Outlet', description: 'Heavy-duty electrical outlet', category: 'Electronics' },
    { id: 17, name: 'Paint Roller Set', description: 'Professional painting tools', category: 'Paints' },
    { id: 18, name: 'Wall Putty 20kg', description: 'Surface preparation compound', category: 'Paints' },
    { id: 19, name: 'Pipe Wrench Heavy Duty', description: 'Industrial pipe wrench tool', category: 'Plumbing' },
    { id: 20, name: 'Digital Multimeter', description: 'Electrical testing instrument', category: 'Electronics' }
];

// ========== INITIALIZE PRODUCTS GRID ==========
function initializeProducts() {
    const productsGrid = document.getElementById('productsGrid');
    
    products.forEach((product) => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// ========== CREATE PRODUCT CARD ==========
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    
    const whatsappMessage = `Hello, I want to order ${product.name} priced at KES ${product.price.toLocaleString()} from Bit Global Technologies.`;
    const whatsappLink = `https://wa.me/254762278583?text=${encodeURIComponent(whatsappMessage)}`;
    
    card.innerHTML = `
        <div class="product-image-container">
            <img src="product${product.id}.jpeg" 
                 alt="${product.name}" 
                 class="product-image"
                 loading="lazy">
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">KES ${product.price.toLocaleString()}</div>
            <a href="${whatsappLink}" 
               target="_blank" 
               class="whatsapp-btn">
               💬 Order via WhatsApp
            </a>
        </div>
    `;
    
    return card;
}

// ========== SCROLL TO PRODUCTS ==========
function scrollToProducts() {
    const productsSection = document.getElementById('products');
    productsSection.scrollIntoView({ behavior: 'smooth' });
}

// ========== MOBILE MENU TOGGLE ==========
function setupMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            const navList = nav.querySelector('.nav-list');
            navList.classList.toggle('active');
            
            // Toggle hamburger animation
            menuToggle.classList.toggle('active');
        });
    }
    
    // Close menu when a link is clicked
    const navLinks = nav.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navList = nav.querySelector('.nav-list');
            navList.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
}

// ========== CONTACT FORM HANDLER ==========
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const name = contactForm.querySelector('input[type="text"]').value;
            const message = contactForm.querySelector('textarea').value;
            
            // Show success message
            alert(`Thank you, ${name}! We received your message and will get back to you soon.`);
            
            // Reset form
            contactForm.reset();
        });
    }
}

// ========== SMOOTH SCROLL ENHANCEMENT ==========
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && document.querySelector(href)) {
                e.preventDefault();
                const target = document.querySelector(href);
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========== LAZY LOAD OBSERVER ==========
function setupLazyLoad() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        imageObserver.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// ========== SCROLL TO TOP BUTTON ==========
function setupScrollToTop() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            // Can add scroll-to-top button functionality here
        }
    });
}

// ========== INITIALIZE ALL SCRIPTS ==========
document.addEventListener('DOMContentLoaded', () => {
    initializeProducts();
    setupMobileMenu();
    setupContactForm();
    setupSmoothScroll();
    setupLazyLoad();
    setupScrollToTop();
});

// ========== PERFORMANCE OPTIMIZATION ==========
// Debounce function for resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle responsive adjustments
window.addEventListener('resize', debounce(() => {
    // Add any responsive handlers here if needed
}, 250));
