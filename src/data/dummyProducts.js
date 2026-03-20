export const dummyProducts = [
    {
        id: 1,
        name: "High-Performance Gaming Laptop",
        category: "Laptops",
        price: 1299.99,
        description: "Experience ultimate gaming with this powerhouse laptop featuring an RTX 4070, 32GB RAM, and a 1TB NVMe SSD.",
        images: ["https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=800", "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=800"],
        features: ["Intel Core i9 13th Gen", "NVIDIA RTX 4070 8GB", "32GB DDR5 RAM", "1TB Gen4 NVMe SSD", "16-inch QHD 240Hz Display"]
    },
    {
        id: 2,
        name: "Professional Business Ultrabook",
        category: "Laptops",
        price: 999.99,
        description: "Sleek, lightweight, and powerful enough for all your business needs with an all-day battery life.",
        images: ["https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=800"],
        features: ["Intel Core i7 13th Gen", "Iris Xe Graphics", "16GB RAM", "512GB SSD", "14-inch FHD+ Touch Display", "Weighs only 1.2kg"]
    },
    {
        id: 3,
        name: "Custom Build Desktop - Creator Edition",
        category: "Desktops",
        price: 1599.99,
        description: "A custom-built desktop optimized for video editing, 3D rendering, and heavy multitasking.",
        images: ["https://images.unsplash.com/photo-1587202372634-32705e3bf49c?auto=format&fit=crop&q=80&w=800"],
        features: ["AMD Ryzen 9 7900X", "32GB DDR5 Memory", "RTX 4060 Ti 16GB", "2TB NVMe SSD + 4TB HDD", "Liquid Cooling"]
    },
    {
        id: 4,
        name: "27-inch 4K Monitor",
        category: "Accessories",
        price: 349.99,
        description: "Crisp and vibrant 4K UHD display perfect for creators and office use.",
        images: ["https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=800"],
        features: ["27-inch IPS Panel", "3840 x 2160 Resolution", "HDR400 Support", "99% sRGB color gamut", "Adjustable Stand"]
    },
    {
        id: 5,
        name: "Mechanical Keyboard & Mouse Combo",
        category: "Accessories",
        price: 129.99,
        description: "RGB Mechanical keyboard with tactile switches and a high-precision wireless gaming mouse.",
        images: ["https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&q=80&w=800"],
        features: ["Cherry MX Brown Switches", "Per-key RGB Lighting", "12,000 DPI Optical Sensor", "Wireless/Wired modes support"]
    },
    {
        id: 6,
        name: "Budget Student Laptop",
        category: "Laptops",
        price: 499.99,
        description: "Reliable and affordable laptop perfect for students and everyday tasks.",
        images: ["https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80&w=800"],
        features: ["Intel Core i5 12th Gen", "8GB RAM", "256GB NVMe SSD", "15.6-inch FHD Display", "Windows 11 Home"]
    }
];

export const getCategories = () => {
    const categories = new Set(dummyProducts.map(p => p.category));
    return ["All", ...categories];
};
