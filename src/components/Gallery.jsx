export default function Gallery() {
    return (
        <section id="gallery" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-2">Our Work</p>
                    <h2 className="text-4xl sm:text-5xl font-heading font-bold text-black mb-4 relative inline-block">
                        Before & After Gallery
                        <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 gradient-gold rounded-full"></span>
                    </h2>
                    <p className="text-gray-700 text-lg mt-6 max-w-2xl mx-auto">
                        See the transformation! Our professional cleaning services deliver exceptional results.
                    </p>
                </div>

                {/* Placeholder */}
                <div className="max-w-3xl mx-auto">
                    <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-3xl p-16 text-center">
                        <div className="text-6xl mb-6 opacity-50">📸</div>
                        <h3 className="text-2xl font-heading font-bold text-black mb-4">Gallery Coming Soon</h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            We're building our portfolio of stunning before and after transformations.
                            Check back soon to see the amazing results we deliver for our clients!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
