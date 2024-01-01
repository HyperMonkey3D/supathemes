import { privacyPolicy } from "../utils/privacyDetails";

const PrivacyView = () => {
    return (
      <section className="text-white">
        <h1 className="text-4xl font-bold mb-5">Privacy Policy</h1>
      <h2>Effective Date: [Date]</h2>
        <div>
          {privacyPolicy.map((item, index) => {
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
  
  export default PrivacyView;