import { CircularProgress } from "@mui/material";
import React, { lazy, Suspense } from "react";
import Scroll from "../Scroll";

const Slider = lazy(() => import("./Slider"));
const Preview = lazy(() => import("./Preview"));
const NewArrival = lazy(() => import("./NewArrival"));
const Banner = lazy(() => import("./Banner"));
const AboutUs = lazy(() => import("./AboutUs"));

const Main = () => {
  return (
    <div>
      <Suspense fallback={<Scroll />}>
        <Slider />
        <Preview />
        <NewArrival />
        <AboutUs />
        <Banner />
      </Suspense>
    </div>
  );
};

export default Main;
