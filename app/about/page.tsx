import AboutView from "../views/AboutView"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SupaThemes",
  description: "Learn more about SupaThemes and what we do"
}


const About = () => {
    return(
        <div className="text-white content">
            <AboutView />
        </div>
    )
}

export default About