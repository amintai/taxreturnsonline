import { useState } from 'react';
import { MessageCircle, User, Smartphone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const WHATSAPP = '919512397377';

const indianStates = [
  'Andhra Pradesh','Arunachal Pradesh','Assam','Bihar','Chhattisgarh','Goa',
  'Gujarat','Haryana','Himachal Pradesh','Jharkhand','Karnataka','Kerala',
  'Madhya Pradesh','Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland',
  'Odisha','Punjab','Rajasthan','Sikkim','Tamil Nadu','Telangana','Tripura',
  'Uttar Pradesh','Uttarakhand','West Bengal','Delhi','Chandigarh','Puducherry',
];

const validate = (d) => {
  const e = {};
  if (!d.name.trim() || d.name.trim().length < 2) e.name = 'Enter your full name.';
  if (!d.mobile.trim() || !/^[6-9]\d{9}$/.test(d.mobile.trim())) e.mobile = 'Enter a valid 10-digit mobile number.';
  if (!d.state) e.state = 'Please select your state.';
  if (!d.terms) e.terms = 'You must accept the terms.';
  return e;
};

/* serviceLabel  shown in the WhatsApp message, e.g. "Annual Compliance Filing" */
const TaxSideForm = ({ serviceLabel = 'Tax & Compliance Service' }) => {
  const [form, setForm] = useState({ name: '', mobile: '', state: '', terms: false });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors((p) => ({ ...p, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length) { setErrors(errs); return; }

    const text = [
      `📋 *${serviceLabel} Enquiry*`,
      ``,
      `*Name:* ${form.name}`,
      `*Mobile:* ${form.mobile}`,
      `*State:* ${form.state}`,
    ].join('\n');

    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank');
    setDone(true);
    setForm({ name: '', mobile: '', state: '', terms: false });
  };

  const inputClass = (field) =>
    `w-full px-3 py-2.5 text-sm border rounded-lg outline-none transition focus:ring-2 bg-white ${
      errors[field]
        ? 'border-red-400 focus:ring-red-100 bg-red-50'
        : 'border-gray-200 focus:ring-blue-100 focus:border-blue-400'
    }`;

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
      <div className="bg-gradient-to-r from-[#005C9D] to-blue-600 px-5 py-4">
        <h3 className="text-white font-semibold text-lg">Get a Free Callback</h3>
        <p className="text-blue-100 text-xs mt-0.5">CA will reach out within 2 hours</p>
      </div>
      <div className="p-5">
        {done ? (
          <div className="text-center py-6 space-y-3">
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <MessageCircle size={28} className="text-green-600" />
            </div>
            <p className="font-semibold text-gray-800">WhatsApp Opened!</p>
            <p className="text-sm text-gray-500">Just hit send  our CA will respond shortly.</p>
            <button onClick={() => setDone(false)} className="text-xs text-blue-600 hover:underline">Submit another request</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div>
              <label className="flex items-center gap-1.5 text-sm font-medium text-gray-700 mb-1">
                <User size={14} className="text-gray-400" /> Full Name <span className="text-red-500">*</span>
              </label>
              <input name="name" value={form.name} onChange={handleChange} placeholder="Rahul Sharma" className={inputClass('name')} />
              {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
            </div>
            <div>
              <label className="flex items-center gap-1.5 text-sm font-medium text-gray-700 mb-1">
                <Smartphone size={14} className="text-gray-400" /> Mobile <span className="text-red-500">*</span>
              </label>
              <input name="mobile" value={form.mobile} onChange={handleChange} placeholder="98765 43210" maxLength={10} className={inputClass('mobile')} />
              {errors.mobile && <p className="text-xs text-red-500 mt-1">{errors.mobile}</p>}
            </div>
            <div>
              <label className="flex items-center gap-1.5 text-sm font-medium text-gray-700 mb-1">
                <MapPin size={14} className="text-gray-400" /> State <span className="text-red-500">*</span>
              </label>
              <select name="state" value={form.state} onChange={handleChange} className={inputClass('state')}>
                <option value="">Select state...</option>
                {indianStates.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              {errors.state && <p className="text-xs text-red-500 mt-1">{errors.state}</p>}
            </div>
            <div>
              <label className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" name="terms" checked={form.terms} onChange={handleChange}
                  className="mt-0.5 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                <span className="text-xs text-gray-500">
                  I agree to the{' '}
                  <Link to="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>
                  {' '}and{' '}
                  <Link to="/terms-of-use" className="text-blue-600 hover:underline">Terms of Use</Link>.
                </span>
              </label>
              {errors.terms && <p className="text-xs text-red-500 mt-1">{errors.terms}</p>}
            </div>
            <button type="submit" className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 active:scale-95 text-white font-semibold py-3 rounded-xl transition-all">
              <MessageCircle size={17} /> Send via WhatsApp
            </button>
            <p className="text-xs text-center text-gray-400">Opens WhatsApp with your details pre-filled</p>
          </form>
        )}
      </div>
    </div>
  );
};

export default TaxSideForm;
