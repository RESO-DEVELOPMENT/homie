import Image from "next/image";
import Link from "next/link";
import React from "react";
import style from "./SectionBanner2.css";
const SectionBannerSlider2 = () => {
  return (
    <div className="banner">
      <div className="banner-img">
        <Image
          src="/assets/images2/banner.jpg"
          alt=""
          width={1600}
          height={600}
        />
      </div>
      <div className="banner_container">
        <h2
          className="banner_container_title"
          style={{ fontFamily: "Georgia" }}
        >
          ENJOY LIFE. SPREAD LOVE
        </h2>

        <a href="/collection" className="banner_container_link">
          Mua ngay
        </a>
      </div>
    </div>
  );
};

export default SectionBannerSlider2;
