const products = [
    {
        id: '1',
        name: 'Aqlli Blender 3000',
        price: 120.00,
        category: 'Oshxona',
        image: 'https://picsum.photos/seed/blender/600/600',
        images: [
            'https://picsum.photos/seed/blender/600/600',
            'https://picsum.photos/seed/blender2/600/600',
            'https://picsum.photos/seed/blender3/600/600'
        ],
        rating: 4.5,
        reviewCount: 128,
        description: 'The Aqlli Blender 3000 combines powerful performance with intelligent technology. Perfect for smoothies, soups, and more. Features 10 speed settings plus pulse for precise blending control.',
        specifications: [
            { label: 'Power', value: '1200W' },
            { label: 'Capacity', value: '2.0L' },
            { label: 'Speed Settings', value: '10 + Pulse' },
            { label: 'Material', value: 'BPA-Free Tritan' },
            { label: 'Warranty', value: '2 Years' }
        ],
        stock: 15
    },
    {
        id: '2',
        name: 'Robot Changyutgich Pro',
        price: 299.99,
        category: 'Tozalash',
        image: 'https://picsum.photos/seed/vacuum/600/600',
        images: [
            'https://picsum.photos/seed/vacuum/600/600',
            'https://picsum.photos/seed/vacuum2/600/600'
        ],
        rating: 4.8,
        reviewCount: 342,
        description: 'Advanced robot vacuum with smart mapping, powerful suction, and app control. Keeps your home spotless effortlessly with LiDAR navigation technology.',
        specifications: [
            { label: 'Suction Power', value: '2500Pa' },
            { label: 'Battery Life', value: '120 minutes' },
            { label: 'Navigation', value: 'LiDAR Mapping' },
            { label: 'Dustbin', value: '600ml' },
            { label: 'Connectivity', value: 'Wi-Fi + App' }
        ],
        stock: 8
    },
    {
        id: '3',
        name: 'Havo Tozalagich Max',
        price: 189.00,
        category: 'Isitish',
        image: 'https://picsum.photos/seed/purifier/600/600',
        images: ['https://picsum.photos/seed/purifier/600/600'],
        rating: 4.6,
        reviewCount: 89,
        description: 'Breathe clean air with our HEPA filtration system. O`chirishs 99.97% of airborne particles including dust, pollen, and smoke.',
        specifications: [
            { label: 'Coverage', value: '500 sq ft' },
            { label: 'Filter Type', value: 'True HEPA' },
            { label: 'Noise Level', value: '24-52 dB' },
            { label: 'CADR', value: '250 m³/h' }
        ],
        stock: 12
    },
    {
        id: '4',
        name: 'Elektr Tish Cho`tkasi Elite',
        price: 79.99,
        category: 'Shaxsiy Parvarish',
        image: 'https://picsum.photos/seed/toothbrush/600/600',
        images: ['https://picsum.photos/seed/toothbrush/600/600'],
        rating: 4.7,
        reviewCount: 156,
        description: 'Superior dental care with sonic technology. 5 Tozalash modes and smart timer for optimal brushing.',
        specifications: [
            { label: 'Technology', value: 'Sonic' },
            { label: 'Modes', value: '5' },
            { label: 'Battery Life', value: '30 days' },
            { label: 'Waterproof', value: 'IPX7' }
        ],
        stock: 20
    },
    {
        id: '5',
        name: 'Aqlli Termostat',
        price: 149.00,
        category: 'Isitish',
        image: 'https://picsum.photos/seed/thermostat/600/600',
        images: ['https://picsum.photos/seed/thermostat/600/600'],
        rating: 4.4,
        reviewCount: 203,
        description: 'Save energy and stay comfortable. AI-powered learning adapts to your schedule automatically.',
        specifications: [
            { label: 'Connectivity', value: 'Wi-Fi, Bluetooth' },
            { label: 'Compatibility', value: 'Works with 95% of systems' },
            { label: 'Display', value: 'Color touchscreen' }
        ],
        stock: 18
    },
    {
        id: '6',
        name: 'Kofe Mashinasi Deluxe',
        price: 159.99,
        category: 'Oshxona',
        image: 'https://picsum.photos/seed/coffee/600/600',
        images: ['https://picsum.photos/seed/coffee/600/600'],
        rating: 4.5,
        reviewCount: 178,
        description: 'Barista-quality coffee at home. Built-in grinder and programmable brewing for the perfect cup every time.',
        specifications: [
            { label: 'Capacity', value: '12 cups' },
            { label: 'Grinder', value: 'Built-in burr' },
            { label: 'Programmable', value: '24-hour' },
            { label: 'Keep Warm', value: '2 hours' }
        ],
        stock: 10
    },
    {
        id: '7',
        name: 'Steam Mop Pro',
        price: 99.00,
        category: 'Tozalash',
        image: 'https://picsum.photos/seed/steammop/600/600',
        images: ['https://picsum.photos/seed/steammop/600/600'],
        rating: 4.3,
        reviewCount: 92,
        description: 'Chemical-free Tozalash with the power of steam. Safe for all sealed hard floors.',
        specifications: [
            { label: 'Heat Time', value: '30 seconds' },
            { label: 'Steam Time', value: '20 minutes' },
            { label: 'Tank Capacity', value: '380ml' }
        ],
        stock: 14
    },
    {
        id: '8',
        name: 'Space Heater Compact',
        price: 69.99,
        category: 'Isitish',
        image: 'https://picsum.photos/seed/heater/600/600',
        images: ['https://picsum.photos/seed/heater/600/600'],
        rating: 4.2,
        reviewCount: 67,
        description: 'Quick and efficient Isitish for small spaces. Safety features include tip-over and overheat protection.',
        specifications: [
            { label: 'Power', value: '1500W' },
            { label: 'Coverage', value: '200 sq ft' },
            { label: 'Thermostat', value: 'Adjustable' }
        ],
        stock: 25
    },
    {
        id: '9',
        name: 'Hair Dryer Professional',
        price: 89.00,
        category: 'Shaxsiy Parvarish',
        image: 'https://picsum.photos/seed/hairdryer/600/600',
        images: ['https://picsum.photos/seed/hairdryer/600/600'],
        rating: 4.6,
        reviewCount: 134,
        description: 'Salon-quality results at home. Ionic technology reduces frizz and enhances shine.',
        specifications: [
            { label: 'Power', value: '1875W' },
            { label: 'Technology', value: 'Ionic' },
            { label: 'Settings', value: '3 heat, 2 speed' }
        ],
        stock: 16
    },
    {
        id: '10',
        name: 'Smart Security Camera',
        price: 129.99,
        category: 'Aqlli Uy',
        image: 'https://picsum.photos/seed/camera/600/600',
        images: ['https://picsum.photos/seed/camera/600/600'],
        rating: 4.7,
        reviewCount: 289,
        description: '1080p HD video with night vision. Two-way Audio and motion detection alerts keep you connected.',
        specifications: [
            { label: 'Resolution', value: '1080p HD' },
            { label: 'Night Vision', value: 'Up to 30ft' },
            { label: 'Storage', value: 'Cloud + SD card' },
            { label: 'Audio', value: 'Two-way' }
        ],
        stock: 11
    },
    {
        id: '11',
        name: 'Wireless Earbuds',
        price: 149.95,
        category: 'Audio',
        image: 'https://picsum.photos/seed/earbuds/600/600',
        images: ['https://picsum.photos/seed/earbuds/600/600'],
        rating: 4.8,
        reviewCount: 412,
        description: 'Premium sound quality with active noise cancellation. 8-hour battery life with 24-hour Jami with case.',
        specifications: [
            { label: 'Driver', value: '11mm' },
            { label: 'ANC', value: 'Yes' },
            { label: 'Battery', value: '8h (32h with case)' },
            { label: 'Bluetooth', value: '5.2' }
        ],
        stock: 30
    },
    {
        id: '12',
        name: 'Smart Speaker',
        price: 89.99,
        category: 'Audio',
        image: 'https://picsum.photos/seed/speaker/600/600',
        images: ['https://picsum.photos/seed/speaker/600/600'],
        rating: 4.5,
        reviewCount: 256,
        description: 'Voice-controlled smart speaker with premium sound. Control your Aqlli Uy and stream music effortlessly.',
        specifications: [
            { label: 'Assistant', value: 'Multi-platform' },
            { label: 'Speakers', value: '2 x 40mm' },
            { label: 'Connectivity', value: 'Wi-Fi, Bluetooth' }
        ],
        stock: 22
    }
];
const categories = [
    { id: 'Oshxona', name: 'Oshxona Appliances', image: 'https://picsum.photos/seed/Oshxona/800/600' },
    { id: 'Tozalash', name: 'Smart Tozalash', image: 'https://picsum.photos/seed/Tozalash/800/600' },
    { id: 'Isitish', name: 'Isitish & Cooling', image: 'https://picsum.photos/seed/Isitish/800/600' }
];
const membershipTiers = [
    {
        id: 'bronze',
        name: 'Bronze',
        price: 'Free',
        period: '',
        features: [
            'Earn 1 point per $1 spent',
            '5% discount on select items',
            'Birthday rewards',
            'Email newsletters'
        ],
        popular: false
    },
    {
        id: 'silver',
        name: 'Silver',
        price: '$49',
        period: '/year',
        features: [
            'Earn 2 points per $1 spent',
            '10% discount on all items',
            'Priority customer support',
            'Early access to sales',
            'Free standard shipping',
            'Extended return window (60 days)'
        ],
        popular: true
    },
    {
        id: 'gold',
        name: 'Gold',
        price: '$99',
        period: '/year',
        features: [
            'Earn 3 points per $1 spent',
            '15% discount on all items',
            'Dedicated account manager',
            'Exclusive product launches',
            'Free express shipping',
            'Lifetime warranty on select products',
            'VIP events and workshops'
        ],
        popular: false
    }
];
function handleImageError(img) {
    if (img.dataset.fallbackApplied) return;
    img.dataset.fallbackApplied = 'true';
    const seed = img.alt ? img.alt.replace(/\s+/g, '') : Math.random().toString(36).substring(7);
    const width = img.width || 400;
    const height = img.height || 400;
    img.src = `https://picsum.photos/seed/${seed}/${width}/${height}`;
}
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('img').forEach(img => {
        img.onerror = function() { handleImageError(this); };
    });
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
                if (node.nodeType === 1) {
                    if (node.tagName === 'IMG') {
                        node.onerror = function() { handleImageError(this); };
                    }
                    node.querySelectorAll?.('img').forEach(img => {
                        img.onerror = function() { handleImageError(this); };
                    });
                }
            });
        });
    });
    observer.observe(document.body, { childList: true, subtree: true });
});
class Cart {
    constructor() {
        this.items = this.loadCart();
        this.updateCartBadge();
    }
    loadCart() {
        const saved = localStorage.getItem('techhouse_cart');
        return saved ? JSON.parse(saved) : [];
    }
    saveCart() {
        localStorage.setItem('techhouse_cart', JSON.stringify(this.items));
        this.updateCartBadge();
    }
    addItem(product, quantity = 1) {
        const existing = this.items.find(item => item.id === product.id);
        if (existing) {
            existing.quantity += quantity;
        } else {
            this.items.push({
                ...product,
                quantity: quantity
            });
        }
        this.saveCart();
        this.showToast(`${product.name} Savatga qo'shildi!`, 'success');
    }
    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
    }
    updateQuantity(productId, quantity) {
        if (quantity < 1) {
            this.removeItem(productId);
            return;
        }
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity = quantity;
            this.saveCart();
        }
    }
    clearCart() {
        this.items = [];
        this.saveCart();
    }
    getCount() {
        return this.items.reduce((sum, item) => sum + item.quantity, 0);
    }
    getTotal() {
        return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    }
    updateCartBadge() {
        const badges = document.querySelectorAll('.cart-badge');
        const count = this.getCount();
        badges.forEach(badge => {
            badge.textContent = count;
            badge.style.display = count > 0 ? 'flex' : 'none';
        });
    }
    showToast(message, type = 'success') {
        const container = document.querySelector('.toast-container') || this.createToastContainer();
        const toast = document.createElement('div');
        toast.className = `toast ${type}`;
        toast.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                ${type === 'success' 
                    ? '<path d="M20 6L9 17l-5-5"/>' 
                    : '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>'}
            </svg>
            <span>${message}</span>
        `;
        container.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
    createToastContainer() {
        const container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
        return container;
    }
}
const cart = new Cart();
const icons = {
    search: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
    cart: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>`,
    menu: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`,
    close: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`,
    arrowRight: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
    arrowLeft: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>`,
    star: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    starFilled: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    plus: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>`,
    minus: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>`,
    trash: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>`,
    chevronRight: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
    sliders: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="4" y1="21" y2="14"/><line x1="4" x2="4" y1="10" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="12" x2="12" y1="8" y2="3"/><line x1="20" x2="20" y1="21" y2="16"/><line x1="20" x2="20" y1="12" y2="3"/><line x1="2" x2="6" y1="14" y2="14"/><line x1="10" x2="14" y1="8" y2="8"/><line x1="18" x2="22" y1="16" y2="16"/></svg>`,
    truck: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>`,
    shield: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>`,
    refresh: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>`,
    lock: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
    check: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>`,
    checkCircle: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="m9 11 3 3L22 4"/></svg>`,
    sparkles: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`,
    shoppingBag: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>`,
    mapPin: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`,
    phone: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    mail: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
    facebook: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>`,
    twitter: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>`,
    instagram: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>`,
    award: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>`,
    gift: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"/></svg>`,
    headphones: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/></svg>`,
    creditCard: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>`,
    package: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`
};
function getProductById(id) {
    return products.find(p => p.id === id);
}
function formatPrice(price) {
    return '$' + price.toFixed(2);
}
function renderStars(rating) {
    let html = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            html += `<span class="filled">${icons.starFilled}</span>`;
        } else {
            html += `<span class="empty">${icons.star}</span>`;
        }
    }
    return html;
}
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
function renderProductCard(product) {
    return `
        <article class="product-card glass-card" data-product-id="${product.id}">
            <div class="product-card-image">
                <a href="product.html?id=${product.id}">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </a>
                <div class="product-card-actions">
                    <button class="btn btn-primary btn-sm btn-block add-to-cart-btn" data-product-id="${product.id}">
                        ${icons.cart} Savatga Qo'shish
                    </button>
                </div>
            </div>
            <div class="product-card-body">
                <span class="product-card-category">${product.category}</span>
                <h3 class="product-card-name">
                    <a href="product.html?id=${product.id}">${product.name}</a>
                </h3>
                <div class="product-card-rating">
                    ${renderStars(product.rating)}
                    <span>(${product.reviewCount})</span>
                </div>
                <div class="product-card-footer">
                    <span class="product-card-price">${formatPrice(product.price)}</span>
                    <button class="product-card-btn add-to-cart-btn" data-product-id="${product.id}">
                        ${icons.plus}
                    </button>
                </div>
            </div>
        </article>
    `;
}
function renderCategoryCard(category) {
    return `
        <a href="products.html?category=${category.id}" class="category-card">
            <img src="${category.image}" alt="${category.name}" loading="lazy">
            <div class="category-card-overlay">
                <h3>${category.name}</h3>
            </div>
        </a>
    `;
}
function renderCartItem(item) {
    return `
        <div class="cart-item" data-item-id="${item.id}">
            <a href="product.html?id=${item.id}" class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </a>
            <div class="cart-item-info">
                <a href="product.html?id=${item.id}">
                    <h3 class="cart-item-name">${item.name}</h3>
                </a>
                <span class="cart-item-category">${item.category}</span>
                <span class="cart-item-price">${formatPrice(item.price)}</span>
            </div>
            <div class="cart-item-actions">
                <div class="quantity-selector">
                    <button class="quantity-btn decrease-qty" data-item-id="${item.id}">−</button>
                    <input type="text" class="quantity-value" value="${item.quantity}" readonly>
                    <button class="quantity-btn increase-qty" data-item-id="${item.id}">+</button>
                </div>
                <button class="cart-item-remove remove-item" data-item-id="${item.id}">
                    ${icons.trash} O'chirish
                </button>
            </div>
            <div class="cart-item-subtotal">
                <label>Oraliq jami</label>
                <span>${formatPrice(item.price * item.quantity)}</span>
            </div>
        </div>
    `;
}
function renderMembershipCard(tier) {
    return `
        <div class="tier-card glass-card ${tier.popular ? 'popular' : ''}">
            ${tier.popular ? '<span class="tier-badge">Most Popular</span>' : ''}
            <h3 class="tier-name">${tier.name}</h3>
            <div class="tier-price">${tier.price}</div>
            <div class="tier-period">${tier.period}</div>
            <ul class="tier-features">
                ${tier.features.map(f => `
                    <li>${icons.check} ${f}</li>
                `).join('')}
            </ul>
            <button class="btn ${tier.popular ? 'btn-primary' : 'btn-secondary'} btn-block">
                ${tier.price === 'Free' ? 'Join Free' : 'Get Started'}
            </button>
        </div>
    `;
}
function initMobileMenu() {
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const mobileNav = document.querySelector('.mobile-nav');
    if (menuBtn && mobileNav) {
        menuBtn.addEventListener('click', () => {
            const isOpen = mobileNav.classList.toggle('active');
            menuBtn.innerHTML = isOpen ? icons.close : icons.menu;
        });
    }
}
function initAddToCartButtons() {
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.add-to-cart-btn');
        if (btn) {
            e.preventDefault();
            const productId = btn.dataset.productId;
            const product = getProductById(productId);
            if (product) {
                cart.addItem(product);
            }
        }
    });
}
function initHomePage() {
    const categoriesGrid = document.querySelector('.categories-grid');
    if (categoriesGrid) {
        categoriesGrid.innerHTML = categories.map(renderCategoryCard).join('');
    }
    const productsGrid = document.querySelector('.featured-products .products-grid');
    if (productsGrid) {
        const featured = products.slice(0, 4);
        productsGrid.innerHTML = featured.map(renderProductCard).join('');
    }
}

// Search functionality
function initSearch() {
    const searchInputs = document.querySelectorAll('.search-input');
    const searchBtns = document.querySelectorAll('.search-btn');
    
    function performSearch(query) {
        if (!query || query.trim().length < 2) {
            return;
        }
        // Navigate to products page with search query
        window.location.href = `products.html?search=${encodeURIComponent(query.trim())}`;
    }
    
    searchInputs.forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch(input.value);
            }
        });
    });
    
    searchBtns.forEach((btn, index) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const input = searchInputs[index] || document.querySelector('.search-input');
            if (input) {
                performSearch(input.value);
            }
        });
    });
}

function initProductsPage() {
    const productsGrid = document.querySelector('.products-main .products-grid');
    const productsCount = document.querySelector('.products-count');
    const categoryFilters = document.querySelectorAll('input[name="category"]');
    const priceFilters = document.querySelectorAll('input[name="price"]');
    const sortSelect = document.querySelector('#sort-select');
    let currentCategory = getUrlParam('category') || 'all';
    let currentSort = 'featured';
    let currentSearch = getUrlParam('search') || '';
    let currentPriceRanges = [];
    
    // Set search input value if search query exists
    if (currentSearch) {
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.value = currentSearch;
        }
    }
    
    function filterAndRender() {
        let filtered = [...products];
        
        // Search filter
        if (currentSearch) {
            const searchLower = currentSearch.toLowerCase();
            filtered = filtered.filter(p => 
                p.name.toLowerCase().includes(searchLower) ||
                p.description.toLowerCase().includes(searchLower) ||
                p.category.toLowerCase().includes(searchLower)
            );
        }
        
        // Category filter
        if (currentCategory !== 'all') {
            const categoryMap = {
                'kitchen': 'Oshxona',
                'cleaning': 'Tozalash',
                'heating': 'Isitish',
                'personal-care': 'Shaxsiy Parvarish',
                'smart-home': 'Aqlli Uy',
                'audio': 'Audio'
            };
            const categoryName = categoryMap[currentCategory] || currentCategory;
            filtered = filtered.filter(p => p.category.toLowerCase() === categoryName.toLowerCase());
        }
        
        // Price filter
        if (currentPriceRanges.length > 0) {
            filtered = filtered.filter(p => {
                return currentPriceRanges.some(range => {
                    switch(range) {
                        case 'under-50': return p.price < 50;
                        case '50-100': return p.price >= 50 && p.price <= 100;
                        case '100-200': return p.price >= 100 && p.price <= 200;
                        case 'over-200': return p.price > 200;
                        default: return true;
                    }
                });
            });
        }
        
        // Sorting
        switch (currentSort) {
            case 'price-low':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filtered.sort((a, b) => b.price - a.price);
                break;
            case 'rating':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
        }
        if (productsGrid) {
            if (filtered.length === 0) {
                productsGrid.innerHTML = `
                    <div style="grid-column: 1/-1; text-align: center; padding: 3rem;">
                        <h3 style="color: var(--gray-600); margin-bottom: 1rem;">Mahsulot topilmadi</h3>
                        <p style="color: var(--gray-500);">Boshqa qidiruv so'zini sinab ko'ring</p>
                    </div>
                `;
            } else {
                productsGrid.innerHTML = filtered.map(renderProductCard).join('');
            }
        }
        if (productsCount) {
            productsCount.textContent = `${filtered.length} ta mahsulot topildi`;
        }
    }
    if (currentCategory !== 'all') {
        const radio = document.querySelector(`input[name="category"][value="${currentCategory}"]`);
        if (radio) radio.checked = true;
    }
    categoryFilters.forEach(filter => {
        filter.addEventListener('change', () => {
            currentCategory = filter.value;
            filterAndRender();
        });
    });
    
    // Price filter listeners
    priceFilters.forEach(filter => {
        filter.addEventListener('change', () => {
            if (filter.checked) {
                if (!currentPriceRanges.includes(filter.value)) {
                    currentPriceRanges.push(filter.value);
                }
            } else {
                currentPriceRanges = currentPriceRanges.filter(r => r !== filter.value);
            }
            filterAndRender();
        });
    });
    
    if (sortSelect) {
        sortSelect.addEventListener('change', () => {
            currentSort = sortSelect.value;
            filterAndRender();
        });
    }
    filterAndRender();
}
function initProductDetailsPage() {
    const productId = getUrlParam('id');
    const product = getProductById(productId);
    if (!product) {
        document.querySelector('.product-details .container').innerHTML = `
            <div class="cart-empty glass-card">
                <h2>Product Not Found</h2>
                <p>The product you're looking for doesn't exist.</p>
                <a href="products.html" class="btn btn-primary">Browse Products</a>
            </div>
        `;
        return;
    }
    document.title = `${product.name} - Tech House`;
    document.querySelector('.breadcrumb span').textContent = product.name;
    const mainImage = document.querySelector('.product-main-image img');
    mainImage.src = product.image;
    mainImage.alt = product.name;
    const thumbnailsContainer = document.querySelector('.product-thumbnails');
    if (product.images && product.images.length > 1) {
        thumbnailsContainer.innerHTML = product.images.map((img, i) => `
            <button class="product-thumbnail ${i === 0 ? 'active' : ''}" data-image="${img}">
                <img src="${img}" alt="${product.name}">
            </button>
        `).join('');
        thumbnailsContainer.addEventListener('click', (e) => {
            const thumb = e.target.closest('.product-thumbnail');
            if (thumb) {
                mainImage.src = thumb.dataset.image;
                document.querySelectorAll('.product-thumbnail').forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');
            }
        });
    } else {
        thumbnailsContainer.style.display = 'none';
    }
    const categoryEl = document.querySelector('.product-category');
    if (categoryEl) categoryEl.textContent = product.category;
    document.querySelector('.product-title').textContent = product.name;
    
    const ratingStars = document.querySelector('.product-rating .stars');
    if (ratingStars) ratingStars.innerHTML = renderStars(product.rating);
    
    const ratingSpan = document.querySelector('.product-rating span');
    if (ratingSpan) ratingSpan.textContent = `${product.rating} (${product.reviewCount} reviews)`;
    
    // Update all price elements (desktop and mobile)
    const priceValue = formatPrice(product.price);
    const installmentValue = `oyiga ${formatPrice(Math.round(product.price / 10))} dan`;
    
    document.querySelectorAll('.product-price, #productPrice').forEach(el => {
        el.textContent = priceValue;
    });
    document.querySelectorAll('.mobile-price, #mobilePrice').forEach(el => {
        el.textContent = priceValue;
    });
    document.querySelectorAll('.product-installment, .mobile-installment').forEach(el => {
        el.textContent = installmentValue;
    });
    
    const stockEl = document.querySelector('.product-stock');
    if (product.stock < 10) {
        stockEl.textContent = `Only ${product.stock} left Mavjud`;
        stockEl.style.display = 'inline';
    } else {
        stockEl.style.display = 'none';
    }
    document.querySelector('.product-description').textContent = product.description;
    const specsTable = document.querySelector('.specs-table tbody');
    if (specsTable && product.specifications) {
        specsTable.innerHTML = product.specifications.map(spec => `
            <tr>
                <td>${spec.label}</td>
                <td>${spec.value}</td>
            </tr>
        `).join('');
    }
    let quantity = 1;
    const qtyValue = document.querySelector('.quantity-value');
    const decreaseBtn = document.querySelector('.quantity-btn.decrease');
    const increaseBtn = document.querySelector('.quantity-btn.increase');
    function updateQty() {
        qtyValue.value = quantity;
        decreaseBtn.disabled = quantity <= 1;
        increaseBtn.disabled = quantity >= product.stock;
    }
    decreaseBtn?.addEventListener('click', () => {
        if (quantity > 1) {
            quantity--;
            updateQty();
        }
    });
    increaseBtn?.addEventListener('click', () => {
        if (quantity < product.stock) {
            quantity++;
            updateQty();
        }
    });
    const addToCartBtn = document.querySelector('.add-to-cart-detail');
    addToCartBtn?.addEventListener('click', () => {
        cart.addItem(product, quantity);
    });
    const buyNowBtn = document.querySelector('.buy-now-btn');
    buyNowBtn?.addEventListener('click', () => {
        cart.addItem(product, quantity);
        window.location.href = 'cart.html';
    });
    
    // Mobile buy button
    const mobileBuyBtn = document.querySelector('.mobile-buy-btn');
    mobileBuyBtn?.addEventListener('click', () => {
        cart.addItem(product, quantity);
        window.location.href = 'cart.html';
    });
    
    // Mobile favorite button
    const mobileFavoriteBtn = document.querySelector('.mobile-favorite-btn');
    mobileFavoriteBtn?.addEventListener('click', function() {
        this.classList.toggle('active');
        const svg = this.querySelector('svg');
        if (this.classList.contains('active')) {
            svg.setAttribute('fill', 'var(--accent)');
            svg.setAttribute('stroke', 'var(--accent)');
        } else {
            svg.setAttribute('fill', 'none');
            svg.setAttribute('stroke', 'currentColor');
        }
    });
    
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.dataset.tab;
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.querySelector(`.tab-content[data-tab="${tab}"]`)?.classList.add('active');
        });
    });
    const relatedGrid = document.querySelector('.related-products .products-grid');
    if (relatedGrid) {
        const related = products.filter(p => p.id !== productId).slice(0, 4);
        relatedGrid.innerHTML = related.map(renderProductCard).join('');
    }
}
function initCartPage() {
    const cartItemsContainer = document.querySelector('.cart-items-list');
    const cartEmptyEl = document.querySelector('.cart-empty');
    const cartContentEl = document.querySelector('.cart-content');
    const summarySubtotal = document.querySelector('.summary-subtotal');
    const summaryTax = document.querySelector('.summary-tax');
    const summaryTotal = document.querySelector('.summary-total-value');
    const itemsCountEl = document.querySelector('.items-count');
    function renderCart() {
        if (cart.items.length === 0) {
            if (cartEmptyEl) cartEmptyEl.style.display = 'block';
            if (cartContentEl) cartContentEl.style.display = 'none';
            return;
        }
        if (cartEmptyEl) cartEmptyEl.style.display = 'none';
        if (cartContentEl) cartContentEl.style.display = 'flex';
        if (cartItemsContainer) {
            cartItemsContainer.innerHTML = cart.items.map(renderCartItem).join('');
        }
        const subtotal = cart.getTotal();
        const tax = subtotal * 0.08;
        const total = subtotal + tax;
        if (summarySubtotal) summarySubtotal.textContent = formatPrice(subtotal);
        if (summaryTax) summaryTax.textContent = formatPrice(tax);
        if (summaryTotal) summaryTotal.textContent = formatPrice(total);
        if (itemsCountEl) itemsCountEl.textContent = cart.items.length;
    }
    document.addEventListener('click', (e) => {
        const increaseBtn = e.target.closest('.increase-qty');
        const decreaseBtn = e.target.closest('.decrease-qty');
        const removeBtn = e.target.closest('.remove-item');
        if (increaseBtn) {
            const itemId = increaseBtn.dataset.itemId;
            const item = cart.items.find(i => i.id === itemId);
            if (item) {
                cart.updateQuantity(itemId, item.quantity + 1);
                renderCart();
            }
        }
        if (decreaseBtn) {
            const itemId = decreaseBtn.dataset.itemId;
            const item = cart.items.find(i => i.id === itemId);
            if (item) {
                cart.updateQuantity(itemId, item.quantity - 1);
                renderCart();
            }
        }
        if (removeBtn) {
            const itemId = removeBtn.dataset.itemId;
            cart.removeItem(itemId);
            renderCart();
        }
    });
    renderCart();
}
function initCheckoutPage() {
    const form = document.querySelector('.checkout-form');
    const orderSummary = document.querySelector('.checkout-summary');
    const orderItemsEl = document.querySelector('.order-items');
    const storeSelection = document.getElementById('storeSelection');
    const addressSection = document.getElementById('addressSection');
    const deliveryOptions = document.querySelectorAll('input[name="delivery"]');

    // Handle delivery option changes
    deliveryOptions.forEach(option => {
        option.addEventListener('change', () => {
            const isPickup = option.value === 'pickup';
            
            // Show/hide store selection
            if (storeSelection) {
                storeSelection.style.display = isPickup ? 'block' : 'none';
            }
            
            // Show/hide address section
            if (addressSection) {
                addressSection.style.display = isPickup ? 'none' : 'block';
                // Remove required from address fields when pickup is selected
                const addressInputs = addressSection.querySelectorAll('input');
                addressInputs.forEach(input => {
                    input.required = !isPickup;
                });
            }
            
            // Make store selection required when pickup is selected
            const storeRadios = document.querySelectorAll('input[name="store"]');
            storeRadios.forEach((radio, index) => {
                radio.required = isPickup && index === 0;
            });
        });
    });

    // Handle store option selection styling
    const storeOptions = document.querySelectorAll('.store-option');
    storeOptions.forEach(option => {
        option.addEventListener('click', () => {
            storeOptions.forEach(o => o.classList.remove('selected'));
            option.classList.add('selected');
        });
    });

    if (orderItemsEl) {
        orderItemsEl.innerHTML = cart.items.map(item => `
            <div class="order-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="order-item-info">
                    <span class="order-item-name">${item.name}</span>
                    <span class="order-item-qty">Qty: ${item.quantity}</span>
                </div>
                <span class="order-item-price">${formatPrice(item.price * item.quantity)}</span>
            </div>
        `).join('');
    }
    const subtotal = cart.getTotal();
    const tax = subtotal * 0.08;
    const total = subtotal + tax;
    const summarySubtotal = document.querySelector('.checkout-subtotal');
    const summaryTax = document.querySelector('.checkout-tax');
    const summaryTotal = document.querySelector('.checkout-total-value');
    if (summarySubtotal) summarySubtotal.textContent = formatPrice(subtotal);
    if (summaryTax) summaryTax.textContent = formatPrice(tax);
    if (summaryTotal) summaryTotal.textContent = formatPrice(total);
    const deliveryOptionLabels = document.querySelectorAll('.delivery-option');
    deliveryOptionLabels.forEach(option => {
        option.addEventListener('click', () => {
            deliveryOptionLabels.forEach(o => o.classList.remove('selected'));
            option.classList.add('selected');
            option.querySelector('input').checked = true;
            
            // Trigger change event to handle store selection visibility
            const input = option.querySelector('input');
            input.dispatchEvent(new Event('change'));
        });
    });
    form?.addEventListener('submit', (e) => {
        e.preventDefault();
        cart.clearCart();
        const mainContent = document.querySelector('.checkout-page .container');
        mainContent.innerHTML = `
            <div class="order-success">
                <div class="success-card glass-card">
                    <div class="success-icon">
                        ${icons.checkCircle}
                    </div>
                    <h1>Buyurtma muvaffaqiyatli qabul qilindi!</h1>
                    <p>Xaridingiz uchun rahmat. Buyurtma tafsilotlari bilan elektron pochta xabari yubordik.</p>
                    <a href="index.html" class="btn btn-primary btn-lg">Bosh sahifaga qaytish</a>
                </div>
            </div>
        `;
    });
}

function initMembershipPage() {
    const tiersGrid = document.querySelector('.tiers-grid');
    if (tiersGrid) {
        tiersGrid.innerHTML = membershipTiers.map(renderMembershipCard).join('');
    }
}

// Newsletter form handler
function initNewsletter() {
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    
    newsletterForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = form.querySelector('input[type="email"]');
            const email = emailInput?.value;
            
            if (!email || !email.includes('@')) {
                cart.showToast('Iltimos, to\'g\'ri email kiriting', 'error');
                return;
            }
            
            // Simulate subscription
            cart.showToast('Obunangiz muvaffaqiyatli qabul qilindi!', 'success');
            emailInput.value = '';
        });
    });
}

// Form validation for checkout
function initFormValidation() {
    const cardNumberInput = document.getElementById('cardNumber');
    const expiryInput = document.getElementById('expiry');
    const cvvInput = document.getElementById('cvv');
    const zipInput = document.getElementById('zip');
    
    // Card number formatting (16 digits with spaces)
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            value = value.substring(0, 16);
            value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
            e.target.value = value;
        });
    }
    
    // Expiry date formatting (MM/YY)
    if (expiryInput) {
        expiryInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');
            value = value.substring(0, 4);
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2);
            }
            e.target.value = value;
        });
    }
    
    // CVV - only numbers, max 4 digits
    if (cvvInput) {
        cvvInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '').substring(0, 4);
        });
    }
    
    // Zip code - only numbers
    if (zipInput) {
        zipInput.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D/g, '').substring(0, 6);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initAddToCartButtons();
    initSearch();
    initNewsletter();
    initFormValidation();
    initMobileFilters();
    
    const page = document.body.dataset.page;
    switch (page) {
        case 'home':
            initHomePage();
            break;
        case 'products':
            initProductsPage();
            break;
        case 'product':
            initProductDetailsPage();
            break;
        case 'cart':
            initCartPage();
            break;
        case 'checkout':
            initCheckoutPage();
            break;
        case 'membership':
            initMembershipPage();
            break;
    }
});

// Mobile Filters
function initMobileFilters() {
    const openBtn = document.getElementById('openFilters');
    const closeBtn = document.getElementById('closeFilters');
    const applyBtn = document.getElementById('applyFilters');
    const overlay = document.getElementById('filterOverlay');
    const sidebar = document.getElementById('filtersSidebar');
    
    if (!openBtn || !sidebar) return;
    
    function openFilters() {
        sidebar.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeFilters() {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    openBtn.addEventListener('click', openFilters);
    closeBtn?.addEventListener('click', closeFilters);
    overlay?.addEventListener('click', closeFilters);
    applyBtn?.addEventListener('click', closeFilters);
    
    // Category chips
    const chips = document.querySelectorAll('.category-chip');
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            // Trigger category filter
            const category = chip.dataset.category;
            const radioInput = document.querySelector(`input[name="category"][value="${category}"]`);
            if (radioInput) {
                radioInput.checked = true;
                radioInput.dispatchEvent(new Event('change', { bubbles: true }));
            }
        });
    });
}



