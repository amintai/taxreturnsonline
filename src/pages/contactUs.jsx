import { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: '',
        termsAccepted: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Your message has been sent!');
        setFormData({
            name: '',
            email: '',
            mobile: '',
            message: '',
            termsAccepted: false
        });
    };

    return (
        <section className="max-w-3xl mx-auto py-10 px-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Contact Us</h1>
            <p className="text-gray-600 mb-8 text-center">Have a question or need help? Fill out the form below and we'll get back to you shortly.</p>

            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-md p-6 border border-gray-200">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 mb-2">Name <span className="text-red-500">*</span></label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-600"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-600"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="mobile" className="block text-gray-700 mb-2">Mobile</label>
                    <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-600"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-600"
                    />
                </div>

                <div className="mb-4">
                    <label className="flex items-start text-sm text-gray-600">
                        <input
                            type="checkbox"
                            name="termsAccepted"
                            checked={formData.termsAccepted}
                            onChange={handleChange}
                            required
                            className="mt-1 mr-2"
                        />
                        I agree to the privacy policy and terms of service.
                    </label>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 bg-blue-800 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default ContactUs;
