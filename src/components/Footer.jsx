export default function Footer() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <footer className="bg-black text-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div>
                        <h4 className="text-gold font-heading font-bold text-xl mb-4">Blossom Cleaning & Services</h4>
                        <p className="text-gray-300 leading-relaxed">
                            Premium cleaning services for homes in Ottawa and surrounding areas.
                            Experience the difference of professional care.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-gold font-heading font-bold text-xl mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {['home', 'services', 'gallery', 'service-area', 'contact'].map((item) => (
                                <li key={item}>
                                    <button
                                        onClick={() => scrollToSection(item)}
                                        className="text-gray-300 hover:text-gold transition-colors"
                                    >
                                        {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-gold font-heading font-bold text-xl mb-4">Our Services</h4>
                        <ul className="space-y-2">
                            <li>
                                <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-gold transition-colors">
                                    House Cleaning
                                </button>
                            </li>
                            <li>
                                <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-gold transition-colors">
                                    Inside Window Cleaning
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Service Area */}
                    <div>
                        <h4 className="text-gold font-heading font-bold text-xl mb-4">Service Area</h4>
                        <p className="text-gray-300 leading-relaxed">
                            Ottawa, ON<br />
                            Kanata • Barrhaven • Orleans<br />
                            Nepean • Gloucester<br />
                            & Surrounding Areas
                        </p>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-white/10 pt-8 text-center">
                    <p className="text-gray-400">
                        © 2026 Blossom Cleaning and Services. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
