import { CircularProgress } from "@mui/material";
import React from "react";

import "./scroll.css";

const Scroll = () => {
  return (
    // <div className="min-h-screen flex justify-center items-center">
    //   <CircularProgress />
    // </div>
    <div className="min-h-screen flex justify-center items-center">
      <div className="spinner">
        Loading
        <div className="spinner-sector spinner-sector-red"></div>
        <div className="spinner-sector spinner-sector-blue"></div>
        <div className="spinner-sector spinner-sector-green"></div>
      </div>

      <br />
      <br />
    </div>
  );
};

export default Scroll;
