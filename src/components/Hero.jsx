import { ArrowRight, ShieldCheck, Lock, Brain, Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const expertiseData = [
    { label: "Reliable", icon: ShieldCheck },
    { label: "Secure", icon: Lock },
    { label: "Expert", icon: Brain },
    { label: "Affordable", icon: Wallet },
  ];

  const phoneNumber = "918866397377"; // Replace with your WhatsApp number
  const message = "Hi, I need help with tax filing!";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/2 space-y-6">
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-2">
            Trusted by thousands of individuals & businesses
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Simplify Your <span className="text-green-600">Tax Filing</span>{" "}
            with Ease
          </h1>

          <p className="text-lg text-gray-700 max-w-xl">
            Effortlessly file your ITR with certified Chartered Accountants.
            Maximize your tax savings with personalized tax planning and expert
            filing services.
          </p>

          <div className="flex justify-center flex-wrap gap-4 pt-6">
            <button
              onClick={() => navigate("/contact-us")}
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-base font-medium transition-all shadow-md"
            >
              Start Free Consultation <ArrowRight size={18} />
            </button>

            <a
              href={whatsappURL}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-lg text-base font-medium transition-all"
            >
              Contact on WhatsApp
            </a>
          </div>

        </div>

        <div className="w-full md:w-1/2">
          <div className="relative">
            <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-green-300 rounded-full opacity-30 blur-3xl"></div>
            <div className="absolute -z-10 bottom-0 left-0 w-72 h-72 bg-blue-300 rounded-full opacity-30 blur-3xl"></div>
            <img
              src="/images/amico.svg"
              alt="Tax filing illustration"
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {expertiseData.map(({ label, icon: Icon }, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <Icon className="w-8 h-8 text-green-600 mb-2" />
              <div className="text-lg font-semibold text-green-700">
                {label}
              </div>
              <p className="text-gray-600 text-sm">Tax Solutions</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
