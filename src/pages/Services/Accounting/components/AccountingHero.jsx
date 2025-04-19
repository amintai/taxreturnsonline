const AccountingHero = () => {
    return (
      <section className="bg-gradient-to-r from-fuchsia-600 via-purple-600 to-blue-500 text-white min-h-[95vh] px-6 md:px-20 flex items-center rounded-b-[3rem] shadow-2xl">
        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto w-full py-28">
  
          {/* Left - Full-Card Image Look */}
          <div className="overflow-hidden rounded-3xl shadow-2xl animate-in fade-in slide-in-from-left duration-1000 ease-out">
            <img
              src="/images/services/account-hero.jpg"
              alt="Accounting services"
              className="w-full h-full object-cover"
            />
          </div>
  
          {/* Right - Content */}
          <div className="animate-in fade-in slide-in-from-right duration-1000 delay-200 ease-out space-y-8">
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight drop-shadow-xl">
              Smart Accounting Solutions <br /> for Growing Businesses
            </h1>
            <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-xl">
              From startup compliance to advanced financial reporting, we help simplify accounting so you can focus on scaling. Let’s unlock your business’s full potential.
            </p>
            <button className="bg-white text-fuchsia-700 font-bold px-8 py-4 rounded-xl hover:bg-fuchsia-100 hover:scale-105 transition-transform duration-300 shadow-lg">
              Get a Free Consultation
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default AccountingHero;
  