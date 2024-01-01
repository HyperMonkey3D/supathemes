import { termsDetails } from "../utils/termsAndConditions";

const TermsView = () => {
  return (
    <section className="text-white">
      <h1 className="text-4xl font-bold mb-5">Terms and Conditions</h1>
      <div>
        {termsDetails.map((item, index) => {
          return (
            <div key={index} className="mb-10">
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p>{item.content}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TermsView;
