import Polygon from "../components/Polygon";

const Immersive = () => {
  return (
    <section className="w-full xl:w-[1200px] h-fit bg-brand-dark-gray my-20">
      <div className="bg-brand-dark-gray pl-36">
        <div>
          <h2 className="text-5xl text-white py-12">Immersive by Design</h2>
        </div>
        <div className=" bg-black min-h-[533px] flex justify-between">
          <div className="w-[250px] md:w-[300px]  h-[533px] bg-slate-200">
            <Polygon />
          </div>
          <div className="bg-black flex flex-col justify-evenly w-[500px]">
            <div>
              <h3 className="text-white text-6xl">Create.</h3>
              <h3 className="text-white text-6xl">Express.</h3>
              <h3 className="text-white text-6xl">Promote.</h3>
            </div>
            <div className="w-[300px] md:w-[450px] ">
              <p className="text-white text-2xl">
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
