const FeaturesGrid = () => {
  return (
    <section className="w-full xl:w-[1200px] min-h-[650px] h-fit bg-brand-dark-gray py-11">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-4 sm:grid-rows-2 gap-4  md:gap-10 w-[85%] h-full bg-brand-dark-gray  mx-auto">
        <div className="bg-slate-3 w-full h-full p-8 flex flex-col justify-evenly  lg:col-span-2 bg-brand-dark-gray border border-brand-stroke-dark-gray rounded-xl  ">
          <div className="mb-5">
            <h2 className="text-2xl text-[#3EF1C6] font-semibold">Adaptive</h2>
          </div>
          <div>
            <p className="text-white">
              Our themes can be easily modified to fit your needs. From fonts to
              the background color, everything is clearly named and arranged so
              that you can make them yours.{" "}
            </p>
          </div>
        </div>
        <div className="lg:bg-gradient-to-br from-brand-dark-scarlet from-5%  via-brand-light-scarlet via-60% to-brand-scarlet to-95% w-full h-full lg:row-span-2  bg-brand-dark-gray border border-brand-stroke-dark-gray rounded-xl px-8 py-12 flex flex-col justify-evenly  ">
          <div className="mb-5">
            <h2 className="text-2xl text-white font-semibold">Responsive</h2>
          </div>
          <p className="text-white">
            There are dozens of screen sizes out there. Each SupaTheme has been
            built with responsive behaviors in mind from the ground up so your
            content can be clearly seen, no matter the screen.{" "}
          </p>
        </div>
        <div className="bg-slate-3 w-full h-full p-8 flex flex-col justify-evenly bg-brand-dark-gray border border-brand-stroke-dark-gray rounded-xl ">
          <div className="md:mb-5">
            <h2 className="text-2xl text-[#3FBAFF] font-semibold">Connected</h2>
          </div>
          <div>
            <p className="text-white">
              Depending on the theme type, you can find fully configured
              databases so that you can start publishing.
            </p>
          </div>
        </div>
        <div className="bg-slate-3 w-full h-full p-8 flex flex-col justify-evenly bg-brand-dark-gray border border-brand-stroke-dark-gray rounded-xl">
          <div className="md:mb-5">
            <h2 className="text-2xl text-[#FF5252] font-semibold">Modern</h2>
          </div>
          <div>
            <p className="text-white">
              Built with the core design principles in mind, our themes are
              modern, attractive and functional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
