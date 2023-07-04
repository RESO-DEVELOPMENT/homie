import React from "react";
import Arrows from "../../Button/Arrows";
import ProductCard from "../productCard/ProductCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../../../styles/Home.module.css";
const SliderSection = ({ sliderRef, products, showProductActionBox }) => {

    const settings = {
        dots: false,
        infinite: true,
        loop: true,
        arrows: false,
        speed: 250,
        slidesToShow: 4,
        slidesToScroll: 1,
    
        responsive: [
          {
            breakpoint: 800,
            settings: {
              slidesToShow: 2,
              arrows: false,
            },
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              arrows: false,
            },
          },
        ],
      };

    return (
      <div className={styles.shop} style={{ position: "relative" }}>
        <Slider ref={sliderRef} {...settings}>
          {products.length > 0 && products.map((product) => (
            <div key={product.id} className="item">
              <ProductCard
                productData={product}
                showProductActionBox={showProductActionBox}
              />
            </div>
          ))}
        </Slider>
        <Arrows sliderRef={sliderRef} />
      </div>
    );
  };

export default SliderSection;
