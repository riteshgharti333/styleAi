import HeroSection from "./components/Banner";
import BodyStyling from "./components/BodyStyling";
import StyleDirections from "./components/StyleDirections";
import HeightProportion from "./components/HeightProportion";
import OccasionStyling from "./components/OccasionStyling";
import HowItWorks from "./components/HowItWorks";
import FeatureList from "./components/FeatureList";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <StyleDirections />
      <BodyStyling />
      <HeightProportion />
      <OccasionStyling />
      <HowItWorks />
      <FeatureList />
    </div>
  );
}
