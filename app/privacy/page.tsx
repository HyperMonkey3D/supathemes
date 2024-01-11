import PrivacyView from "../views/PrivacyView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for SupaThemes"
}


const Privacy = () => {
  return (
    <div className="w-full lg:w-[900px] px-5 mx-auto content">
      
      <PrivacyView />
    </div>
  );
};

export default Privacy;
