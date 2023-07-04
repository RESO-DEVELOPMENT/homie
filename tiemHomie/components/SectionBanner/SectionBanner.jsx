import React from "react";

const SectionBanner = ({
  image,
  title1,
  title2,
  buttonLink,
  buttonText,
  width,
  height,
}) => {
  const bannerStyle = {
    width: width,
    height: height,
  };

  return (
    <div className="single_banner" style={bannerStyle}>
      <img src={image} alt="shop_banner_img" />
      <div className="single_banner_info" style={{ marginRight: "47%" }}>
        <h5 className="single_bn_title1 text-white">{title1}</h5>
        <h3 className="single_bn_title text-light">{title2}</h3>
        <a
          href={buttonLink}
          className="  text-white"
          style={{ fontSize: "85%" }}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default SectionBanner;
