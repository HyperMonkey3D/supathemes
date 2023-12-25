import Polygon from "../components/Polygon";
//flex-wrap sm:flex-row
const Immersive = () => {
  return (
    <section className="w-full xl:w-[1200px] h-fit my-20">
      <div >
        <div>
          <h2 className="text-7xl sm:text-8xl lg:text-9xl text-white  font-bold">Immersive by <br /> <span className="text-brand-purple ">Design</span></h2>
        </div>
        <div className=" bg-black h-300px md:min-h-[533px]  flex justify-between ">
          <div className="w-[150px] md:w-[400px] h-[300px]  md:h-[533px] ">
            <Polygon />
          </div>
          <div className=" flex flex-col justify-evenly w-[350px] h-[300px] md:h-[533px] md:w-[500px] lg:w-[550px] py-6 px-3 lg:py-0 lg:px-0">
            <div className="z-50">
              <h3 className="text-white text-4xl sm:text-5xl md:text-6xl">
                Create.
              </h3>
              <h3 className="text-white text-4xl sm:text-5xl md:text-6xl">
                Express.
              </h3>
              <h3 className="text-white text-4xl sm:text-5xl md:text-6xl">
                Promote.
              </h3>
            </div>
            <div className="w-[250px] sm:w-[300px] md:w-[380px] lg:w-[450px] z-50 ">
              <p className="text-white text-xl md:text-2xl">
                Tell your story. Build your audience. Create your legacy. No
                compromises.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Immersive;
