export default function Hero() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative bg-cover bg-center bg-fixed overflow-hidden"
            style={{ backgroundImage: 'url(/hero-background.png)' }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 gradient-hero z-10"></div>

            {/* Content */}
            <div className="relative z-20 text-center max-w-4xl px-4 sm:px-6 lg:px-8 animate-fadeInUp">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-white mb-4 drop-shadow-lg">
                    Premium Cleaning Services in Ottawa
                </h1>
                <p className="text-2xl sm:text-3xl text-gold-light mb-6 font-light">
                    Where Excellence Meets Elegance
                </p>
                <p className="text-lg sm:text-xl text-white mb-12 opacity-90 max-w-2xl mx-auto">
                    Experience the difference of professional cleaning with Blossom Cleaning and Services.
                    We bring sparkle and freshness to your home.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => scrollToSection('contact')}
                        className="px-8 py-4 text-lg font-semibold rounded-full gradient-gold text-black shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                    >
                        Get a Free Quote
                    </button>
                    <button
                        onClick={() => scrollToSection('services')}
                        className="px-8 py-4 text-lg font-semibold rounded-full bg-transparent text-white border-2 border-white hover:bg-white hover:text-black hover:-translate-y-1 transition-all duration-300"
                    >
                        Our Services
                    </button>
                </div>
            </div>
        </section>
    )
}
