import { useState, useEffect } from 'react'

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
            setIsMobileMenuOpen(false)
        }
    }

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/98 shadow-md' : 'bg-white/95 shadow-sm'
            } backdrop-blur-md`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <button
                        onClick={() => scrollToSection('home')}
                        className="flex items-center gap-2 group"
                    >
                        <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                            🌸
                        </div>
                        <span className="text-2xl font-heading font-bold text-black">Blossom Cleaning</span>
                    </button>

                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex items-center gap-8">
                        {['home', 'services', 'gallery', 'service-area', 'contact'].map((item) => (
                            <li key={item}>
                                <button
                                    onClick={() => scrollToSection(item)}
                                    className="text-black font-medium relative group py-2"
                                >
                                    {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 gradient-gold group-hover:w-full transition-all duration-300"></span>
                                </button>
                            </li>
                        ))}
                    </ul>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden text-2xl text-black"
                    >
                        {isMobileMenuOpen ? '✕' : '☰'}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-gray-200">
                        <ul className="flex flex-col gap-4">
                            {['home', 'services', 'gallery', 'service-area', 'contact'].map((item) => (
                                <li key={item}>
                                    <button
                                        onClick={() => scrollToSection(item)}
                                        className="text-black font-medium w-full text-left py-2 hover:text-gold transition-colors"
                                    >
                                        {item.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}
