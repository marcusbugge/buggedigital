import React from "react";
import "./Hero2.scss";
import Marcus from "../../assets/marcus-removebg.png";
import Image from "next/image";

export default function Hero2() {
  return (
    <div className="hero2">
      <div className="hero2-cnt">
        <div className="hero-image2">
          <Image src={Marcus} alt="marcus" />
        </div>
      </div>
    </div>
  );
}
