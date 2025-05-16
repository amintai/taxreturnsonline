
function Hero() {
  return (
    // parent div
    <main className="container mt-4 md:flex flex-row-reverse justify-between items-center">
      <div className="md:max-w-[50%]">
        <img src="./images/amico.svg" alt="hero" />
      </div>

      {/* text section */}
      <div className="text-center sm:text-left md:max-w-[40%]">
        <h1 className="font-bold text-4xl leading-[60px]">
          Simplify Your Tax Filing with Ease
        </h1>
        <p className="mt-4 text-[18px] leading-[28px] font-normal">
          Effortlessly file your ITR with certified Chartered Accountants.
          Maximize your tax savings with personalized tax planning and expert
          filing services. Join thousands who trust EaseMyTax for accurate and
          stress-free ITR filing.
        </p>
        {/* <div className="mt-8 flex items-center justify-around sm:justify-start sm:space-x-8">
          <button className="primary-button">Get Started</button>
          <p className="font-semibold text-primary whitespace-nowrap flex items-center underline hover:scale-110 active:scale-95 duration-200 cursor-pointer">
            <PlayIcon className="h-8" />
            Watch the Video
          </p>
        </div> */}
      </div>
    </main>
  );
}

export default Hero;
