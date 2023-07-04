import { useEffect, useRef } from "react";
import React, { useState } from "react";
import SectionBannerSlider from "../components/SectionBanner/SectionBannerSlider";
// import ProductList from "../components/section/productCard/ProductList";
import FeaturedProductHeader from "../components/section/featuredProduct/FeaturedProductHeader";
import SectionBanner from "../components/SectionBanner/SectionBanner";
import ProductList from "../components/section/productCard/ProductList";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { getAllProduct } from "../action/menuApi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "../styles/Home.module.css";
import Arrows from "../components/Button/Arrows";
import SliderSection from "../components/section/SliderSection/SliderSection";
import CollBar from "../components/FilterProductByComponent/collection/Collection";

function Home({  collections, filterProductCollection }) {
  const [showTabs, setShowTabs] = useState(true);
  const [showProductActionBox, setShowProductActionBox] = useState(true);

  const arrivalSliderRef = useRef(null);
  const sellersSliderRef = useRef(null);
  const featuredSliderRef = useRef(null);
  const specialSliderRef = useRef(null);
  const sliderRef5 = useRef(null);
  const sliderRef6 = useRef(null);
  const sliderRef7 = useRef(null);

  const getSliderItems = () => {
    const itemsPerSlide = 3; // Số sản phẩm hiển thị trên mỗi slide
    const totalSlides = Math.ceil(filterProductCollection[1].products.length / itemsPerSlide); // Tổng số slide
    const sliderItems = [];
    for (let i = 0; i < totalSlides; i++) {
      const startIndex = i * itemsPerSlide;
      const endIndex = startIndex + itemsPerSlide;
      const slideItems = filterProductCollection[1].products.slice(startIndex, endIndex);
      sliderItems.push(slideItems);
    }
    return sliderItems;
  };
  console.log(filterProductCollection);

  const specialSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3, // Show 3 items per slide
    slidesToScroll: 3, // Scroll 3 items at a time
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  return (
    <div>
      <div>
        <>
          {/* START SECTION BANNER */}
          <SectionBannerSlider />
          {/* END SECTION BANNER */}
        </>
        <div className="single_banner">
          <div className="row">
            <div className="col-12">
              <CollBar collections={collections} />
            </div>
          </div>
        </div>

        {/* END MAIN CONTENT */}
        <div className="main_content">
          {/* START SECTION SHOP DONE */}
          <div className="section small_pb">
            <div className="container">
              <FeaturedProductHeader showTabs={showTabs} title="Top Sản Phẩm" />
              <div className="row">
                <div className="col-12">
                  <div className="tab_slider">
                    <div
                      className="tab-pane fade show active"
                      id="arrival"
                      role="tabpanel"
                      aria-labelledby="arrival-tab"
                    >
                      <SliderSection
                        sliderRef={arrivalSliderRef}
                        products={
                          filterProductCollection.length > 0
                            ? filterProductCollection[7].products
                            : []
                        }
                        showProductActionBox={showProductActionBox}
                      />
                    </div>
                    <div
                      className="tab-pane fade"
                      id="sellers"
                      role="tabpanel"
                      aria-labelledby="sellers-tab"
                    >
                      <SliderSection
                        sliderRef={sellersSliderRef}
                        products={
                          filterProductCollection.length > 0
                            ? filterProductCollection[5].products
                            : []
                        }
                        showProductActionBox={showProductActionBox}
                      />
                    </div>
                    <div
                      className="tab-pane fade"
                      id="featured"
                      role="tabpanel"
                      aria-labelledby="featured-tab"
                    >
                      <SliderSection
                        sliderRef={featuredSliderRef}
                        products={
                          filterProductCollection.length > 0
                            ? filterProductCollection[8].products
                            : []
                        }
                        showProductActionBox={showProductActionBox}
                      />
                    </div>
                    <div
                      className="tab-pane fade"
                      id="special"
                      role="tabpanel"
                      aria-labelledby="special-tab"
                    >
                      <SliderSection
                        sliderRef={specialSliderRef}
                        products={
                          filterProductCollection.length > 0
                            ? filterProductCollection[6].products
                            : []
                        }
                        showProductActionBox={showProductActionBox}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END SECTION SHOP */}
          {/* START SECTION BANNER */}
          <div className="section pb_20 small_pt">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <SectionBanner
                    image="assets/images/shop-banner-img1jpg@2x.png"
                    title1={
                      <span
                        className={styles.bannerL}
                        style={{ fontWeight: "400", fontSize: "80%" }}
                      >
                        Super Sale
                      </span>
                    }
                    title2={
                      <span
                        className={styles.bannerL}
                        style={{
                          fontFamily: "Roboto",
                          fontWeight: 700,
                          letterSpacing: "0em",
                          textAlign: "left",
                        }}
                      >
                        Bộ sưu tập mới
                      </span>
                    }
                    buttonLink="/collection"
                    buttonText={
                      <span className={styles.bannerL}>Mua ngay</span>
                    }
                  />
                </div>
                <div className="col-md-6">
                  <SectionBanner
                    image="assets/images/shop-banner-img2jpg@2x.png"
                    title2={
                      <span
                        className={styles.bannerR}
                        style={{ fontSize: "62%", color: "black" }}
                      >
                        Sale 40% Off
                      </span>
                    }
                    title1={
                      <span
                        className={styles.bannerR}
                        style={{
                          fontFamily: "Roboto",
                          fontWeight: 700,
                          letterSpacing: "0em",
                          textAlign: "left",
                        }}
                      >
                        SUMMER COMING
                      </span>
                    }
                    buttonLink="/collection"
                    buttonText={
                      <span
                        className={styles.BannerR}
                        style={{ color: "black" }}
                      >
                        Mua Ngay
                      </span>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
          {/* END SECTION BANNER */}

          {/* START SECTION SHOP Done */}
          <div className="section small_pt small_pb">
            <div className="container">
              <div className="d-flex justify-content-center">
                <FeaturedProductHeader
                  className="d-flex justify-content-center"
                  title="Sản Phẩm Mới"
                />
              </div>
              <div className="row">
                <div className="col-md-12">
                  <SliderSection
                    sliderRef={sliderRef5}
                    products={
                      filterProductCollection.length > 0
                        ? filterProductCollection[7].products
                        : []
                    }
                    showProductActionBox={showProductActionBox}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* END SECTION SHOP */}
          {/* START SECTION SHOP Done */}
          <div className="section small_pt small_pb">
            <div className="container">
              <div className="d-flex justify-content-center">
                <FeaturedProductHeader
                  className="d-flex justify-content-center"
                  title="Chỉ Có Tại Homie"
                />
              </div>
              <div className="row">
                <div className="col-md-12">
                  <SliderSection
                    sliderRef={sliderRef6}
                    products={
                      filterProductCollection.length > 0
                        ? filterProductCollection[6].products
                        : []
                    }
                    showProductActionBox={showProductActionBox}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* END SECTION SHOP */}

          {/* START SECTION SHOP  */}
          <div className="section small_pt pb_20">
            <div className="container col-12">
              <div className="heading-tab-header  ">
                <div className="">
                  <div>
                    <FeaturedProductHeader
                      className="d-flex justify-content-center"
                      title="Bán Chạy Tại Homie"
                    />
                  </div>
                  <div
                    className={styles.buttonsN}
                    style={{
                      position: "relative",
                      display: "flex",
                      justifyContent: "end",
                    }}
                  >
                    <div className={styles.prevBN}>
                      <button
                        type="button"
                        role="presentation"
                        className="custom-prev-button"
                        onClick={() => sliderRef7.current.slickPrev()}
                      >
                        <FaChevronLeft className={styles.leftAN} />
                      </button>
                    </div>
                    <div className={styles.nextBN}>
                      <button
                        type="button"
                        role="presentation"
                        className="custom-next-button"
                        onClick={() => sliderRef7.current.slickNext()}
                      >
                        <FaChevronRight className={styles.rightAN} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12">
                  <div className="product_list">
                    <div className={styles.shop}>
                      <Slider
                        ref={sliderRef7}
                        {...specialSettings}
                        className="overflow-hidden"
                        products={
                          filterProductCollection.length > 0
                            ? filterProductCollection[6].products
                            : []
                        }
                      >
                        {getSliderItems().map((sliderItems, index) => (
                          <div key={index} className="gridContainer">
                            {sliderItems.map((product, innerIndex) => (
                              <div
                                key={innerIndex}
                                className="item "
                                style={{
                                  maxHeight: "220px",
                                  overflow: "hidden",
                                }}
                              >
                                <ProductList
                                  productData={product}
                                  // showProductActionBox={showProductActionBox}
                                />
                              </div>
                            ))}
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END SECTION SHOP */}
        </div>
        {/* END MAIN CONTENT */}
      </div>
    </div>
  );
}

export default Home;

export async function getStaticProps() {
  const data = await getAllProduct();

  const products = data.products; // take the products attribute in the menu
  const collections = data.collections;

  //this function to Filter PARENT AND SINGLE DONT HAVE CHILD
  const collectionIds = new Set(collections.map((collection) => collection.id));

  const filterProductCollection = collections
    .map((collection) => {
      const filteredProducts = products.reduce((result, product) => {
        if (
          product.collectionIds.includes(collection.id) &&
          product.type !== "CHILD"
        ) {
          if (product.type === "PARENT" || product.type === "SINGLE") {
            const childProducts = products.filter(
              (childProduct) =>
                childProduct.type === "CHILD" &&
                childProduct.parentProductId === product.id
            );

            const minPrice = Math.min(
              ...childProducts.map((childProduct) => childProduct.sellingPrice)
            );

            result.push({
              ...product,
              minPrice: minPrice,
            });
          } else {
            result.push(product);
          }
        }
        return result;
      }, []);

      return {
        collection: collection,
        products: filteredProducts,
      };
    })
    .filter((collection) => collectionIds.has(collection.collection.id));

    // End this Function Filter PARENT AND SINGLE DONT HAVE CHILD

  return {
    props: { collections, filterProductCollection },
  };
}
