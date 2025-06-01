function Footer() {
  return (
    <div className={`pt-12 pb-8 bg-[#F8F9FA]`}>
      <div className="container mb-12 text-center sm:text-left grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
        <div className="mx-auto sm:ml-0">
          <div
            className="flex items-center gap-2 md:gap-4 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src="/images/logo.svg"
              alt="Logo"
              className="h-10 w-10 md:h-12 md:w-12 object-contain"
            />
            <span className="font-bold leading-tight tracking-tight">
              <span className="text-green-600">TaxReturns</span>
              <span className="text-gray-900"> Online</span>
            </span>
          </div>
          <div className="mt-4 flex justify-around">
            <img className="icon-button" src="images/insta-icon.svg" alt="" />
            <img className="icon-button" src="images/fb-icon.svg" alt="" />
            <img
              className="icon-button"
              src="./images/twitter-icon.svg"
              alt=""
            />
          </div>
        </div>

        <div>
          <h6 className="font-medium text-xl mb-4 text-[#005C9D]">Services</h6>
          <Link
            text="Company Registration"
            to="/our-services/company-registration"
          />
          <Link text="GST Services" to="/our-services/gst-registration" />
          <Link text="IEC Registrations" to="/our-services/iec-registration" />
          <Link text="View All Services" to="/our-services" />
        </div>

        <div>
          <h6 className="font-medium text-xl mb-4 text-[#005C9D]">
            Tax & Compliance
          </h6>
          <Link
            text="Annual Compliance Filling"
            to={"/tax-compliance/annual-complience-filling"}
          />
          <Link
            text="Tax Planning & Consultancy"
            to="/tax-compliance/tax-planning-consultancy"
          />
          <Link
            text="Online Bookkeeping"
            to="/tax-compliance/bookkeeping-service"
          />
          <Link text="Project Report" to="/tax-compliance/tax-report-project" />
        </div>

        <div className="lg:col-span-2">
          <h6 className="font-medium text-xl text-[#22343D]">
            Stay updated with the latest tax tips and offers!
          </h6>
          <div className="mt-9 border border-[#BCD0E5] rounded-md text-left">
            <input
              className="w-full p-2 bg-transparent outline-none border border-[#005C9D] rounded-md"
              type="tel"
              placeholder="Enter your phone Email"
            />
          </div>
          <button className="primary-button mt-6 bg-[#005C9D] text-white hover:bg-[#026a66] transition duration-200">
            Submit
          </button>
        </div>
      </div>

      <p className="text-center mt-12 text-[#22343D]">
        © {new Date().getFullYear()} taxreturnsonline. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;

export function Link({ text, to }) {
  return (
    <p className="mt-5">
      <a
        href={to}
        className="cursor-pointer mt-2 text-[#22343D] hover:text-[#005C9D] transition duration-200"
      >
        {text}
      </a>
    </p>
  );
}
