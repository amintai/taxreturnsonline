function OurExperts() {
  return (
    <section className="container mt-28 text-center">
      <h2 className="text-[32px] font-bold ">Meet Our Tax Experts</h2>
      <p className="mt-2 max-w-xl m-auto">
        Our team of certified Chartered Accountants is here to guide you through
        every step of your tax journey, ensuring you get the best advice and
        expert service.
      </p>

      <div className="mx-auto mt-8 max-w-5xl grid md:gap-8 grid-cols-1 md:grid-cols-2">
        <ExpertItem
          imgSrc="images/Avator.png"
          text="I can help you maximize your tax savings"
        />
        <ExpertItem
          imgSrc="images/Avator-1.png"
          text="I can simplify your tax filing process"
        />

        <ExpertItem
          imgSrc="images/Avator-2.png"
          text="I can advise on tax planning and compliance"
        />

        <ExpertItem
          imgSrc="images/Avator-3.png"
          text="I can provide audit support and business solutions"
        />
      </div>

      <button className="primary-button mt-20">Contact our Expert</button>
    </section>
  );
}

export default OurExperts;

function ExpertItem({ imgSrc, text }) {
  return (
    <div className="max-w-md flex items-center even:flex-row-reverse md:flex-row-reverse md:first:flex-row md:last:flex-row">
      <img src={imgSrc} alt="" width="98px" />

      <div className="shadow-lg px-8 py-3 mx-2 max-w-[270px] md:max-w-none text-left rounded-full flex justify-center items-center mt-1.5">
        <p className="font-medium">{text}</p>
      </div>
    </div>
  );
}
