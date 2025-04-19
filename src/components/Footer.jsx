import React from "react";

function Footer() {
  
  return (
    <div className={`pt-12 pb-8 bg-[#F8F9FA]`}>
      <div className="container mb-12 text-center sm:text-left grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
        <div className="mx-auto sm:ml-0">
          <img
            className="cursor-pointer"
            src="/images/logo-full.svg"
            alt="logo"
          />

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
          <h6 className="font-medium text-xl mb-4 text-[#005C9D]">Resources</h6>
          <Link text="About Us" />
          <Link text="Blog" />
          <Link text="Contact" />
          <Link text="FAQ" />
        </div>

        <div>
          <h6 className="font-medium text-xl mb-4 text-[#005C9D]">
            Legal Stuff
          </h6>
          <Link text="Disclaimer" />
          <Link text="Financing" />
          <Link text="Privacy Policy" />
          <Link text="Terms of Service" />
        </div>

        <div className="lg:col-span-2">
          <h6 className="font-medium text-xl text-[#22343D]">
            Stay updated with the latest tax tips and offers!
          </h6>
          <div className="mt-9 border border-[#BCD0E5] rounded-md text-left">
            <input
              className="w-full p-2 bg-transparent outline-none border border-[#005C9D] rounded-md"
              type="tel"
              placeholder="Enter your phone Number"
            />
          </div>
          <button className="primary-button mt-6 bg-[#005C9D] text-white hover:bg-[#026a66] transition duration-200">
            Submit
          </button>
        </div>
      </div>

      <p className="text-center mt-12 text-[#22343D]">
        © {new Date().getFullYear()} easemytax. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;

export function Link({ text }) {
  return (
    <p className="cursor-pointer mt-2 text-[#22343D] hover:text-[#005C9D] transition duration-200">
      {text}
    </p>
  );
}
