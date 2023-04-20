import "./Home.css";
import "../css/style.css";

import Carousel from "./Carousel/Carousel";
import Footer from "../Footer/Footer";

import React from "react";
import { Categories } from "./Categories/Categories";
import { LandingPage } from "./landingPage/LandingPage";
import { Slideshow } from "./Slideshow/Slideshow";
import Subscribe from "./subscribe/Subscribe";

const Home = () => {
  return (
    <>
      <LandingPage />
      <Categories />
      <Slideshow />
      <Subscribe />
      <Carousel />
      <Footer />
    </>
  );
};
export default Home;
