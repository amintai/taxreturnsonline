import React from "react";
import ServiceCard from "./ServiceCard";
import { serviceData } from "./serviceData";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const ServiceGrid = () => {
  return (
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1 bg-blue-50 text-[#005C9D] text-sm font-medium rounded-full mb-3">
            What We Do
          </span>
          <h2 className="text-3xl font-bold text-gray-900">
            End-to-End Tax & Compliance Services
          </h2>
          <p className="text-gray-500 mt-2 max-w-xl mx-auto">
            From ITR filing to company registration  everything your business and personal finances need, in one place.
          </p>
          <div className="w-16 h-1 bg-[#005C9D] mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {serviceData.map((service, index) => (
            <motion.div
              key={service.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}

          <motion.div
            className="bg-gradient-to-br from-[#005C9D] to-blue-700 p-6 flex flex-col justify-center items-center text-center rounded-lg text-white"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-3">Not Sure Where to Start?</h3>
            <p className="mb-6 text-blue-100 text-sm">
              Talk to a CA for free. We'll tell you exactly what you need  no upselling.
            </p>
            <a
              href="tel:+919512397377"
              className="bg-white text-[#005C9D] hover:bg-blue-50 font-semibold py-2 px-5 rounded-lg text-sm transition-all"
            >
              Call Now  Free
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServiceGrid;
