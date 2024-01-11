import StoreView from "../views/StoreView"

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supathemes Store | Themes for Framer",
  description: "Find and buy website themes for Framer"
}


const Store = () => {
    return(
        <div className="text-white content">
           <StoreView />
        </div>
    )
}

export default Store