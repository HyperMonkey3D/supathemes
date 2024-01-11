import TermsView from "../views/Terms";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and conditions for SupaThemes"
}


const Terms = () => {
  return (
    <div className="w-full lg:w-[900px] px-5 mx-auto content">
      
      <TermsView />
    </div>
  );
};

export default Terms;
