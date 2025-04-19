// components/AccountingCta.js
import { ArrowRight } from "lucide-react";

const AccountingCta = () => {
  return (
    <section className="bg-indigo-700 text-white py-16 px-6 text-center rounded-t-3xl mt-10 shadow-xl">
      <h2 className="text-3xl font-bold mb-4">Let’s Simplify Your Accounting</h2>
      <p className="text-lg mb-6">Join hundreds of businesses that trust us for reliable, affordable accounting solutions.</p>
      <button className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold flex items-center justify-center mx-auto hover:bg-gray-100">
        Get Started <ArrowRight className="ml-2 w-4 h-4" />
      </button>
    </section>
  );
};

export default AccountingCta;