import Image from "next/image";
import Hero from "./views/Hero";
import Immersive from "./views/Immersive";
import FeaturesGrid from "./views/FeaturesGrid";
import Themes from "./views/Themes";


export default function Home() {
  return (
    <main className=" w-full content">
      <div>
        <Hero />
        <Immersive />
        <FeaturesGrid />
        <Themes />
      </div>
    </main>
  );
}
