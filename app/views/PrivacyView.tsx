import { privacyPolicy } from "../utils/privacyDetails";

const PrivacyView = () => {
    return (
      <section className="text-white px-10 py-12 lg:px-0">
        <h1 className="text-4xl font-bold mb-5">Privacy Policy</h1>
      <h2>Effective Date: 01/01/2024</h2>
          <br/>
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