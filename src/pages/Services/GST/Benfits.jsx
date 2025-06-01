import React from "react";
import BenefitsCard from "./BenifitsCard";
import { motion } from "framer-motion";

const benefitsData = [
  {
    title: "Simplifies taxation services",
    description:
      "The GST has integrated the Indian market by bringing together several indirect taxes under a single roof.",
  },
  {
    title: "Reduction in costs of products & services",
    description:
      "The cascading impact of numerous taxes and VATs was eliminated by implementing GST, which decreased the cost of goods and services.",
  },
  {
    title: "Helps avoid lengthy taxation services",
    description:
      "Small businesses benefit from GST registration since it lets them avoid time-consuming tax services. Since service providers and product suppliers with annual sales of under 20 lakh rupees and 40 lakh rupees, respectively, are exempt from paying the GST.",
  },
  {
    title: "Aimed at reducing corruption and sales without receipts",
    description:
      "The GST was implemented with the intention of eliminating fraud and un-receipted sales. Additionally, it assists in lowering the amount of indirect taxes that small businesses must pay.",
  },
  {
    title: "Uniformity in the taxation process",
    description:
      "GST registration provides for centralised registration and brings uniformity to the taxation process. This makes it easier for businesses to submit their quarterly tax returns online.",
  },
  {
    title: "Composition scheme for small businesses",
    description:
      "Small businesses with revenue between up to Rs. 1.5 crores can gain from the GST because it offers the possibility to reduce taxes by using the Composition scheme. The tax and compliance burden for many small firms has decreased as a result of this action.",
  },
];

const Benefits = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">
            Benefits of GST Registration
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefitsData.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <BenefitsCard
                title={benefit.title}
                description={benefit.description}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {[penaltyCard, registrationCard].map((card, idx) => (
            <motion.div
              key={idx}
              className="bg-blue-100 rounded-lg p-6 shadow-md"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + idx * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-blue-700 mb-4">
                {card.title}
              </h3>
              <p className="text-gray-700">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const registrationCard = {
  title: "GST Registration Fees",
  description:
    "The lengthy 11-step procedure of registering for GST necessitates the submission of numerous business details and scanned documents. Although there are no fees for GST registration online.",
};

const penaltyCard = {
  title: "Penalty for not obtaining GST registration",
  description:
    "A penalty of 10% of the tax amount owed, subject to a minimum of Rs. 10,000, must be paid by the violator who fails to pay taxes or makes short payments (sincere errors).",
};

export default Benefits;
