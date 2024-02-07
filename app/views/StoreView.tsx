const StoreView = () => {
  return (
    <section className="w-full xl:w-[1200px] mx-auto px-5 h-fit">
      <main>
        <div className=" w-full md:w-[500px] min-h-[300px] flex justify-center items-center mx-auto">
          <h2 className="py-3 text-6xl font-bold text ">Comming soon!</h2>
        </div>
        <div className="bg-slate-200 border border-bg-slate-700 rounded-3xl w-full md:w-[500px] flex flex-col justify-center min-h-[500px] mx-auto px-8 md:px-14 lg:px-20 mb-20">
          <h3 className="text-4xl my-5 text-brand-dark-gray font-bold">Keep checking to be the first to know!</h3>
          {/*<div >
            <form action="" className="flex flex-col">
              <label htmlFor=""></label>
              <input type="text" name="email" className="border border-white rounded-3xl px-3 py-1" />
              <button className="bg-brand-purple border border-brand-purple rounded-3xl px-3 py-1 my-5">Register</button>
            </form>
          </div>
          <div>
            <small className="text-brand-darker-gray">Powered by <span>MailChimp</span></small>
          </div>*/}
        </div>
      </main>
    </section>
  );
};

export default StoreView;
