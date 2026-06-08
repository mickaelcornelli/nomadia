import React from "react";
import { Link } from "react-router-dom";

function Logo({className = ""}) {
  return (
    <>
      <Link to="/" className={`logo cursor-pointer text-2xl md:text-4xl text-white font-medium font-kaushan!`}>
        Nomad
        <span className="text-prim">ia.</span>
      </Link>
    </>
  );
}

export default Logo;
