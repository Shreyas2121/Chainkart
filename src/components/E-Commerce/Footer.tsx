import React from "react";

import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Room,
  Phone,
  MailOutline,
} from "@mui/icons-material/";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex mb-auto mt-4">
      <div className="flex flex-col flex-[1] p-5">
        <span className="font-bold text-lg mb-2">About Us</span>
        <p className="mx-0 my-5 text-justify text-col">
          Chainkart is a first of its kind Blockchain based e-commerce
          marketplace. Backed by Ethereum blockchain, every transaction is
          secured, authentic and from the original brand owner, guaranteed!
          Looking for a secure shopping experience? Start shopping now! Wish to
          sell on our platform? Sign your company up now!
        </p>
        <div className="flex">
          <a
            href="http://www.facebook.com/chainkart"
            target="_blank"
            rel="noreferer"
            className="logo bg-[#3B5999] "
          >
            <Facebook />
          </a>

          <a
            className="logo bg-[#E4405F]"
            href="https://instagram.com/chainkart?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noreferer"
          >
            <Instagram />
          </a>

          <a
            className="logo bg-[#55ACEE]"
            href="http://www.twitter.com/chainkart"
            target="_blank"
            rel="noreferer"
          >
            <Twitter />
          </a>

          <a
            className="logo bg-[#0E76A8] "
            href="http://www.linkedin.com/in/chainkart"
            target="_blank"
            rel="noreferer"
          >
            <LinkedIn />
          </a>
        </div>
      </div>
      <div className="flex-[1] p-5">
        <h3 className="mb-7 font-bold">Useful Links</h3>
        <ul className="flex flex-wrap">
          <Link to="/" className="w-1/2 mb-2">
            <li className="text-col">Home</li>
          </Link>

          <Link to="/Electronics/Laptops" className="w-1/2 mb-2">
            <li className="text-col">Laptops</li>
          </Link>

          <Link to="/Fashion/Shirts" className="w-1/2 mb-2">
            <li className="text-col">Shirts</li>
          </Link>

          <Link to="/Sports/Cricket" className="w-1/2 mb-2">
            <li className="text-col">Cricket</li>
          </Link>

          <Link to="/Books/Textbook" className="w-1/2 mb-2">
            <li className="text-col">Textbooks</li>
          </Link>

          <Link to="/Fashion/Shoes" className="w-1/2 mb-2">
            <li className="text-col">Shoes</li>
          </Link>

          <Link to="/Home_Appliances/Television" className="w-1/2 mb-2">
            <li className="text-col">Television</li>
          </Link>

          <Link to="/profile" className="w-1/2 mb-2">
            <li className="text-col">My Account</li>
          </Link>
        </ul>
      </div>
      <div className="flex-[1] p-5 opacity-75">
        <h1 className="font-bold mb-7">Contact</h1>
        <div className="mb-5 flex items-center">
          <a
            href="https://www.google.com/maps/place/Verna,+Goa/@15.3650113,73.9148114,13z/data=!3m1!4b1!4m5!3m4!1s0x3bbfb736dff65a8d:0xe7e9adcdf39c685d!8m2!3d15.3664574!4d73.947008"
            target="_blank"
          >
            <Room className="mr-2" /> Verna, Goa - 403722
          </a>
        </div>

        <div className="mb-5 flex items-center">
          <Phone className="mr-2" /> +91 9146115551
        </div>

        <div className="mb-5 flex items-center">
          <MailOutline className="mr-2" /> chainkart12@gmail.com
        </div>
      </div>
    </div>
  );
};

export default Footer;
