import React from "react";
import { CheckIcon } from "@heroicons/react/solid";
import BenefitItem from "./BenifitItem";

function Benefits() {
  return (
    <section className="container mt-24 space-y-24">
      <BenefitItem
        image="images/benefit-1.svg"
        heading1="Maximize Your"
        heading2="Tax Savings"
        description="Our expert chartered accountants analyze your financials to identify every possible deduction and exemption, ensuring you pay only what’s required."
        Content={() => (
          <div>
            <h5 className="mt-6 mb-2 font-semibold">
              Personalized Tax Planning
            </h5>
            <p>
              With tailored strategies, we help you retain more of your
              hard-earned money, maximizing your savings.
            </p>
          </div>
        )}
      />

      <BenefitItem
        image="images/benefit-2.svg"
        heading1="Stress-Free"
        heading2="Tax Filing"
        description="Skip the confusion of complicated tax forms and regulations. Our seamless process makes filing your ITR simple and hassle-free."
        Content={() => (
          <div>
            <h5 className="mt-6 mb-2 font-semibold">CA-Assisted Filing</h5>
            <p>
              Our chartered accountants ensure your tax returns are filed
              accurately, giving you peace of mind.
            </p>
          </div>
        )}
      />

      <BenefitItem
        image="images/benefit-3.svg"
        heading1="Full Compliance,"
        heading2="No Worries"
        description="Stay on the right side of tax laws with our compliance-focused services. We ensure your returns are filed on time, helping you avoid penalties."
        Content={() => (
          <div>
            <h5 className="mt-6 mb-2 font-semibold">On-Time Filing</h5>
            <p>
              We handle all deadlines and ensure your returns comply with
              current tax regulations, protecting you from legal hassles.
            </p>
          </div>
        )}
      />
    </section>
  );
}

export default Benefits;

function CheckedItem({ bgColor, text }) {
  return (
    <div>
      <div className="flex items-center space-x-6">
        <div style={{ background: `${bgColor}` }} className="rounded-xl p-1.5">
          <CheckIcon className="h-8 text-white" />
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
}
