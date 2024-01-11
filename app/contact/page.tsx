import ContactView from "../views/ContactView"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Supathemes",
  description: "Get in touch with Supathemes"
}


const Contact = () => {
    return(
        <div className="text-white content">
            <ContactView />
        </div>
    )
}

export default Contact