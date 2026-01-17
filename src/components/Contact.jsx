import { useState } from 'react'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    })
    const [notification, setNotification] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()

        // Validation
        if (!formData.name || !formData.email || !formData.phone || !formData.service) {
            showNotification('Please fill in all required fields.', 'error')
            return
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(formData.email)) {
            showNotification('Please enter a valid email address.', 'error')
            return
        }

        // Success
        showNotification('Thank you! We\'ll contact you soon with your free quote.', 'success')
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    }

    const showNotification = (message, type) => {
        setNotification({ message, type })
        setTimeout(() => setNotification(null), 5000)
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-gold text-sm font-semibold uppercase tracking-wider mb-2">Get In Touch</p>
                    <h2 className="text-4xl sm:text-5xl font-heading font-bold text-black mb-4 relative inline-block">
                        Request Your Free Quote
                        <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 h-1 gradient-gold rounded-full"></span>
                    </h2>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-heading font-bold text-black mb-6">Contact Information</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <span className="text-gold font-bold min-w-[100px]">Phone:</span>
                                    <span className="text-gray-700 text-lg">(613) XXX-XXXX</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-gold font-bold min-w-[100px]">Email:</span>
                                    <span className="text-gray-700 text-lg">info@blossomcleaning.ca</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-gold font-bold min-w-[100px]">Hours:</span>
                                    <span className="text-gray-700 text-lg">Mon-Sat: 8:00 AM - 6:00 PM</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-gold font-bold min-w-[100px]">Service:</span>
                                    <span className="text-gray-700 text-lg">Ottawa & Surrounding Areas</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-2xl font-heading font-bold text-black mb-6">Why Choose Blossom?</h3>
                            <ul className="space-y-3">
                                {[
                                    'Experienced & Professional Team',
                                    'Eco-Friendly Cleaning Products',
                                    'Flexible Scheduling',
                                    '100% Satisfaction Guaranteed',
                                    'Fully Insured & Bonded',
                                    'Competitive Pricing'
                                ].map((item, index) => (
                                    <li key={index} className="flex items-start gap-3 text-gray-700">
                                        <span className="text-gold font-bold mt-1">✓</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-50 rounded-3xl p-8 shadow-md">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-black mb-2">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Smith"
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-gold focus:ring-4 focus:ring-gold/10 transition-all outline-none"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-black mb-2">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-gold focus:ring-4 focus:ring-gold/10 transition-all outline-none"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-semibold text-black mb-2">
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="(613) 555-0123"
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-gold focus:ring-4 focus:ring-gold/10 transition-all outline-none"
                                />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-semibold text-black mb-2">
                                    Service Needed *
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-gold focus:ring-4 focus:ring-gold/10 transition-all outline-none"
                                >
                                    <option value="">Select a service</option>
                                    <option value="house-cleaning">House Cleaning</option>
                                    <option value="window-cleaning">Inside Window Cleaning</option>
                                    <option value="both">Both Services</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-black mb-2">
                                    Additional Details
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Tell us about your cleaning needs, preferred schedule, or any special requirements..."
                                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-gold focus:ring-4 focus:ring-gold/10 transition-all outline-none resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full px-8 py-4 text-lg font-semibold rounded-full gradient-gold text-black shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                Request Free Quote
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Notification */}
            {notification && (
                <div className={`fixed top-24 right-4 px-6 py-4 rounded-xl shadow-lg z-50 animate-slideInRight ${notification.type === 'success' ? 'gradient-gold text-black' : 'bg-red-500 text-white'
                    }`}>
                    {notification.message}
                </div>
            )}
        </section>
    )
}
