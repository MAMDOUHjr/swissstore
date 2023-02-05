import Services from "../../components/services/Services";
import Slider from "../../components/slider/Slider";
import WatchSlider from "../../components/Watch-slider/WatchSlider";
import HeadingTitle from "../../components/heading-title/HeadingTitle";
import { Watches } from "../../data/Watches";

const HomePage = () => {
  return (
    <section>
      <Slider />
      <Services />
      <HeadingTitle title="Most gifted" />
      <WatchSlider data={Watches} />
      <HeadingTitle title="Best Seller" />
      <WatchSlider data={Watches} />
      <HeadingTitle title="Most wished for" />
      <WatchSlider data={Watches} />
    </section>
  );
};

export default HomePage;
