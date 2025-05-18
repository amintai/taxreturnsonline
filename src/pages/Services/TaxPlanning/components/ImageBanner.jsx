const ImageBanner = () => {
  return (
    <div className="w-full overflow-hidden relative">
      <img
        src="/images/services/tax-planning.jpg"
        alt="Business professionals analyzing company registration process"
        className="w-full h-[300px] md:h-[400px] object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white">
        <h1 className="text-2xl md:text-4xl font-bold text-center px-4">
          Tax Planning & Consultation at your Fingertips{" "}
        </h1>
        <p className="mt-4 text-lg md:text-xl text-center px-4">
          from our Tax & Financial Advisors
        </p>
      </div>
    </div>
  );
};

export default ImageBanner;
