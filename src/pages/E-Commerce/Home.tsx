import React, { lazy, Suspense } from "react";
import { isMobile } from "react-device-detect";
import { Route, Routes } from "react-router-dom";
import Scroll from "../../components/E-Commerce/Scroll";

const Main = lazy(() => import("../../components/E-Commerce/Main/Main"));
const Cart = lazy(() => import("./Cart"));
const SubCategory = lazy(() => import("./Product/SubCategory"));
const Profile = lazy(() => import("./Profile/Profle"));
const Navbar = lazy(() => import("../../components/E-Commerce/Navbar"));
const Footer = lazy(() => import("../../components/E-Commerce/Footer"));

const Home = () => {
  if (isMobile) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="font-bold">
          Sorry this website is not available on mobile devices.
        </span>
      </div>
    );
  }

  return (
    <>
      <Suspense fallback={<Scroll />}>
        <Navbar />
        <Routes>
          <Route path="/*" element={<Main />} />
          <Route path="cart" element={<Cart />} />
          <Route path="/:category/:subCategory/*" element={<SubCategory />} />
          <Route path="/profile/*" element={<Profile />} />
        </Routes>
        <Footer />
      </Suspense>
    </>
  );
};

export default Home;
