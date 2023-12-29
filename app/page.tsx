import Image from "next/image";
import Hero from "./views/Hero";
import Immersive from "./views/Immersive";
import FeaturesGrid from "./views/FeaturesGrid";
import Themes from "./views/Themes";

export default function Home() {
  return (
    <main className="bg-brand-dark-gray w-full xl:w-fit mx-auto content">
      <Hero />
      <Immersive />
      <FeaturesGrid />
      <Themes />
    </main>
  );
}
