import Slideshow from "../components/Home/Slideshow";
import Banner from "../components/Home/Banner";
import { Banner as BannerImages } from "../../assets";

import "./Home.scss";
const Home = () => {
  return (
    <div className="Home">
      <Slideshow />
      <Banner />
      <div className="Home__title">
        <h1>NEW ARRIVALS</h1>
        <img src={BannerImages.line} alt="" />
      </div>
      <center>
        <img src={BannerImages.mini} className="Home_bannerMini" alt="" />
      </center>

      <div className="Home__title">
        <h1>STORE SYSTEM</h1>
        <img src={BannerImages.line} alt="" />
      </div>
      <img src={BannerImages.system} className="Home_storeSystem" alt="" />
    </div>
  );
};

export default Home;
