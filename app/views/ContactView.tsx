const ContactView = () => {
  return (
    <section className="w-full xl:w-[1200px] mx-auto px-5 h-fit">
      <main>
        <div className=" w-full md:w-[500px] min-h-[300px] flex flex-col justify-center items-center mx-auto">
          <h2 className="py-3 text-6xl font-bold text ">Get in Touch</h2>
          <p className="font-light">
            Drop us a line, provide feedback or get support
          </p>
        </div>
        <div className="border-4 border-bg-slate-700 rounded-3xl w-full md:w-[500px] flex items-center justify-center h-[200px] sm:h-[300px] md:h-[400px] mx-auto px-8 mb-20">
          <div className="w-full h-full flex flex-col justify-center items-center">
            <h3 className="text-2xl md:text-3xl lg:text-4xl my-5 text-white font-light">
              support@supathemes.pro
            </h3>
            <h3 className="text-2xl md:text-3xl lg:text-4xl my-5 text-white font-light">
                @supathemes
            </h3>
          </div>
        </div>
      </main>
    </section>
  );
};

export default ContactView;
