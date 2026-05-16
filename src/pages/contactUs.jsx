import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ArrowLeft, Phone, Mail, MapPin, MessageCircle, User, Smartphone, FileText, CheckSquare } from "lucide-react";

const WHATSAPP_NUMBER = "919512397377";

const SERVICES = [
  "ITR Filing",
  "GST Registration / Filing",
  "Company Registration",
  "Accounting Services",
  "Tax Planning & Consultancy",
  "Annual Compliance Filing",
  "Bookkeeping",
  "IEC Registration",
  "Trademark Registration",
  "Other",
];

const validate = (data) => {
  const errors = {};
  if (!data.name.trim()) errors.name = "Name is required.";
  else if (data.name.trim().length < 2) errors.name = "Name must be at least 2 characters.";

  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Enter a valid email address.";

  if (!data.mobile.trim()) errors.mobile = "Mobile number is required.";
  else if (!/^[6-9]\d{9}$/.test(data.mobile.trim()))
    errors.mobile = "Enter a valid 10-digit Indian mobile number.";

  if (!data.termsAccepted) errors.termsAccepted = "You must accept the terms to continue.";

  return errors;
};

const ContactUs = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
    message: "",
    termsAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    // Clear error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const lines = [
      `👋 *New Enquiry  TaxReturnsOnline*`,
      ``,
      `*Name:* ${formData.name}`,
      formData.email ? `*Email:* ${formData.email}` : null,
      `*Mobile:* ${formData.mobile}`,
      formData.service ? `*Service:* ${formData.service}` : null,
      formData.message ? `*Message:* ${formData.message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`;
    window.open(url, "_blank");
    setSubmitted(true);
    setFormData({ name: "", email: "", mobile: "", service: "", message: "", termsAccepted: false });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us  TaxReturnsOnline</title>
        <meta name="description" content="Get in touch with our CA experts for tax filing, GST, company registration and more." />
        <link rel="canonical" href="https://www.taxreturnsonline.in/contact-us" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
        {/* Hero banner */}
        <div className="bg-gradient-to-r from-[#005C9D] to-blue-700 text-white py-12 px-4">
          <div className="container mx-auto">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-blue-200 hover:text-white transition mb-6 text-sm"
            >
              <ArrowLeft size={16} />
              Go Back
            </button>
            <h1 className="text-3xl md:text-4xl font-bold mb-2">Get in Touch</h1>
            <p className="text-blue-100 text-base md:text-lg max-w-xl">
              Our CA experts are ready to help. Fill in the form and we'll reach out on WhatsApp within a few hours.
            </p>
          </div>
        </div>

        <div className="container mx-auto py-12 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Left  contact info cards */}
            <div className="space-y-5">
              <h2 className="text-lg font-semibold text-gray-800 mb-1">Contact Information</h2>

              <ContactCard
                icon={<Phone size={20} className="text-[#005C9D]" />}
                label="Phone / WhatsApp"
                value="+91 9512397377"
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
              />
              <ContactCard
                icon={<Mail size={20} className="text-[#005C9D]" />}
                label="Email"
                value="taxreturnsonline.in@gmail.com"
                href="mailto:taxreturnsonline.in@gmail.com"
              />
              <ContactCard
                icon={<MapPin size={20} className="text-[#005C9D]" />}
                label="Office"
                value="Vadodara, Gujarat, India"
              />

              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                <p className="text-sm text-green-800 font-medium mb-1">Prefer WhatsApp?</p>
                <p className="text-xs text-green-700 mb-3">Chat directly with a CA  fastest response.</p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=Hi, I need help with tax filing!`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition"
                >
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Right  form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <SuccessBanner onReset={() => setSubmitted(false)} />
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-5"
                >
                  <h2 className="text-xl font-semibold text-gray-800">Send us a message</h2>

                  {/* Name + Mobile row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <Field
                      label="Full Name"
                      required
                      icon={<User size={16} className="text-gray-400" />}
                      error={errors.name}
                    >
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Rahul Sharma"
                        className={inputClass(errors.name)}
                      />
                    </Field>

                    <Field
                      label="Mobile Number"
                      required
                      icon={<Smartphone size={16} className="text-gray-400" />}
                      error={errors.mobile}
                    >
                      <input
                        type="tel"
                        name="mobile"
                        id="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="98765 43210"
                        maxLength={10}
                        className={inputClass(errors.mobile)}
                      />
                    </Field>
                  </div>

                  {/* Email */}
                  <Field
                    label="Email Address"
                    hint="Optional"
                    icon={<Mail size={16} className="text-gray-400" />}
                    error={errors.email}
                  >
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputClass(errors.email)}
                    />
                  </Field>

                  {/* Service */}
                  <Field
                    label="Service You Need"
                    hint="Optional"
                    icon={<FileText size={16} className="text-gray-400" />}
                  >
                    <select
                      name="service"
                      id="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={inputClass(false) + " bg-white"}
                    >
                      <option value="">Select a service...</option>
                      {SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </Field>

                  {/* Message */}
                  <Field label="Message" hint="Optional">
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us a bit about what you need help with..."
                      className={inputClass(false) + " resize-none"}
                    />
                  </Field>

                  {/* Terms */}
                  <div>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleChange}
                        className="mt-0.5 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                      />
                      <span className="text-sm text-gray-600">
                        I agree to the{" "}
                        <Link to="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>
                        {" "}and{" "}
                        <Link to="/terms-of-use" className="text-blue-600 hover:underline">Terms of Use</Link>.
                      </span>
                    </label>
                    {errors.termsAccepted && (
                      <p className="mt-1 text-xs text-red-500">{errors.termsAccepted}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 active:scale-95 text-white font-semibold py-3 rounded-xl transition-all duration-200"
                  >
                    <MessageCircle size={18} />
                    Send via WhatsApp
                  </button>

                  <p className="text-xs text-center text-gray-400">
                    Tapping the button will open WhatsApp with your details pre-filled.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

/* ── helpers ── */

const inputClass = (hasError) =>
  `w-full px-3 py-2.5 text-sm border rounded-lg outline-none transition focus:ring-2 ${
    hasError
      ? "border-red-400 focus:ring-red-200 bg-red-50"
      : "border-gray-200 focus:ring-blue-100 focus:border-blue-400 bg-white"
  }`;

const Field = ({ label, required, hint, icon, error, children }) => (
  <div className="space-y-1">
    <label className="flex items-center gap-1.5 text-sm font-medium text-gray-700">
      {icon}
      {label}
      {required && <span className="text-red-500">*</span>}
      {hint && <span className="text-gray-400 font-normal text-xs ml-1">({hint})</span>}
    </label>
    {children}
    {error && <p className="text-xs text-red-500">{error}</p>}
  </div>
);

const ContactCard = ({ icon, label, value, href }) => (
  <div className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
    <div className="mt-0.5 p-2 bg-blue-50 rounded-lg">{icon}</div>
    <div>
      <p className="text-xs text-gray-500 mb-0.5">{label}</p>
      {href ? (
        <a href={href} target="_blank" rel="noreferrer" className="text-sm font-medium text-gray-800 hover:text-blue-600 transition">
          {value}
        </a>
      ) : (
        <p className="text-sm font-medium text-gray-800">{value}</p>
      )}
    </div>
  </div>
);

const SuccessBanner = ({ onReset }) => (
  <div className="bg-white rounded-2xl shadow-sm border border-green-100 p-8 text-center space-y-4">
    <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
      <MessageCircle size={32} className="text-green-600" />
    </div>
    <h3 className="text-xl font-semibold text-gray-800">WhatsApp Opened!</h3>
    <p className="text-gray-500 text-sm max-w-sm mx-auto">
      Your message has been pre-filled in WhatsApp. Just hit send and our team will get back to you shortly.
    </p>
    <button
      onClick={onReset}
      className="text-sm text-blue-600 hover:underline"
    >
      Submit another enquiry
    </button>
  </div>
);

export default ContactUs;
