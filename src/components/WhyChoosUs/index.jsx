function WhyChooseUs() {
  return (
    <section className="container mt-28 text-center">
      <h2 className="text-[32px] font-bold ">Why Choose easemytax.in?</h2>
      <p className="mt-2 max-w-xl m-auto">
        Discover why individuals and businesses trust us for expert tax
        solutions.
      </p>

      <div className="mx-auto mt-8 max-w-5xl grid md:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <StrengthItem
          iconSrc="images/icon-expert.svg"
          heading="Expert Chartered Accountants"
          description="Get advice from seasoned tax professionals with years of experience."
        />
        <StrengthItem
          iconSrc="images/icon-savings-2.svg"
          heading="Maximized Tax Savings"
          description="We help you claim every eligible deduction and exemption."
        />
        <StrengthItem
          iconSrc="images/icon-support-3.svg"
          heading="End-to-End Support"
          description="From filing to audits, we provide full support at every stage."
        />
        <StrengthItem
          iconSrc="images/icon-security-3.svg"
          heading="Data Security"
          description="Your financial information is safe with our advanced security measures."
        />
        <StrengthItem
          iconSrc="images/icon-convenience-3.svg"
          heading="Convenient Online Process"
          description="File your taxes anytime, anywhere with our easy-to-use platform."
        />
        <StrengthItem
          iconSrc="images/icon-trust-3.svg"
          heading="Trusted by Thousands"
          description="Join thousands of satisfied clients who rely on us for hassle-free tax filing."
        />
      </div>
    </section>
  );
}

export default WhyChooseUs;

function StrengthItem({ iconSrc, heading, description }) {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <img src={iconSrc} alt="" className="w-12 h-12 mb-4" />
      <h5 className="text-xl font-semibold">{heading}</h5>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}
