const areas = [
    'Downtown Ottawa', 'Kanata', 'Barrhaven', 'Orleans',
    'Nepean', 'Gloucester', 'Stittsville', 'Manotick',
    'And surrounding areas'
]

export default function ServiceArea() {
    return (
        <section id="service-area" className="py-24 bg-black text-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-2">Where We Serve</p>
                    <h2 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-4 relative inline-block">
                        Ottawa & Surrounding Areas
                        <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gold rounded-full"></span>
                    </h2>
                </div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text */}
                    <div>
                        <h3 className="text-3xl font-heading font-bold text-gold mb-6">
                            Proudly Serving the Ottawa Region
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            Blossom Cleaning and Services is your trusted local cleaning partner throughout
                            Ottawa and the surrounding communities. We're committed to bringing premium cleaning
                            services to homes across the region.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Our team travels to ensure that every home, no matter where you are in the Ottawa area,
                            receives the same exceptional service and attention to detail.
                        </p>
                    </div>

                    {/* Coverage List */}
                    <div>
                        <ul className="space-y-4">
                            {areas.map((area, index) => (
                                <li key={index} className="flex items-center gap-3 text-white text-lg">
                                    <span className="text-2xl">📍</span>
                                    <span>{area}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
