import {
  ClockIcon,
  CursorClickIcon,
  HeartIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import React from "react";
import FeatureItem from "./FeatureItem";
import { useNavigate } from "react-router-dom";

function Features() {
  const navigate = useNavigate();
  return (
    <section className="container mt-24 flex flex-col items-center">
      <h2 className="text-[32px] font-bold text-center sm:text-left">
        Plans Tailored to Your Tax Needs, Expertly Delivered
      </h2>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <FeatureItem
          Icon={CursorClickIcon}
          title="Basic ITR Filing"
          iconBgColor="#005C9D"
          description="Hassle-free filing for individuals with straightforward income sources."
        />
        <FeatureItem
          Icon={UsersIcon}
          iconBgColor="#4D8DFF"
          title="Advanced Tax Planning"
          description="Maximize your savings with personalized tax-saving strategies tailored to your financial profile."
        />
        <FeatureItem
          Icon={HeartIcon}
          iconBgColor="#740A76"
          title="Business Tax Solutions"
          description="Expert tax filing and planning for freelancers, startups, and small businesses."
        />
        <FeatureItem
          Icon={ClockIcon}
          iconBgColor="#F03E3D"
          title="Audit Assistance"
          description="Comprehensive support for audits, ensuring compliance and smooth resolution."
        />
      </div>

      <button onClick={() => navigate('/contact-us')} className="primary-button mt-14">Get In Touch</button>
    </section>
  );
}

export default Features;
