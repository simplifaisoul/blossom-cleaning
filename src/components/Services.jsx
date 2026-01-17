const services = [
    {
        title: 'House Cleaning',
        image: '/house-cleaning.png',
        description: 'Transform your home into a pristine sanctuary with our comprehensive house cleaning services. We handle every detail with care and professionalism.',
        features: [
            'Deep cleaning of all rooms',
            'Kitchen and bathroom sanitization',
            'Dusting and vacuuming',
            'Floor mopping and polishing',
            'Customized cleaning plans',
            'Eco-friendly cleaning products'
        ]
    },
    {
        title: 'Inside Window Cleaning',
        image: '/window-cleaning.png',
        description: 'Let the light shine through with our professional inside window cleaning service. Crystal-clear windows that enhance your home\'s beauty.',
        features: [
            'Streak-free window cleaning',
            'Window sills and frames',
            'Screen cleaning available',
            'Hard-to-reach windows',
            'Attention to detail',
            'Safe cleaning methods'
        ]
    }
]

export default function Services() {
    return (
        <section id="services" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-2">What We Offer</p>
                    <h2 className="text-4xl sm:text-5xl font-heading font-bold text-black mb-4 relative inline-block">
                        Our Premium Services
                        <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 gradient-gold rounded-full"></span>
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group relative overflow-hidden"
                        >
                            {/* Top Gold Bar */}
                            <div className="absolute top-0 left-0 right-0 h-1 gradient-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                            {/* Icon */}
                            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gray-50 flex items-center justify-center group-hover:gradient-gold group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                                <img src={service.image} alt={service.title} className="w-24 h-24 object-contain" />
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-heading font-bold text-black mb-4 text-center">{service.title}</h3>
                            <p className="text-gray-700 mb-6 text-center leading-relaxed">{service.description}</p>

                            {/* Features List */}
                            <ul className="space-y-3">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-gray-700">
                                        <span className="text-gold font-bold mt-1">✓</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
