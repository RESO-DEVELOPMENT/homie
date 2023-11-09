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
import SectionBannerSlider2 from "../components/SectionBanner/SectionBanner2";
import { collectionsData } from "../data/data";
function Home({ products }) {
  const [showTabs, setShowTabs] = useState(true);
  const [showProductActionBox, setShowProductActionBox] = useState(true);
  const collection0 = useRef(null);
  const collection1 = useRef(null);
  const collection2 = useRef(null);

  const getSliderItems = () => {
    const itemsPerSlide = 3; // Số sản phẩm hiển thị trên mỗi slide
    const totalSlides = Math.ceil(
      products.filter((p) => p.collectionIds.includes(collectionsData[4].id))
        .length / itemsPerSlide
    ); // Tổng số slide
    const sliderItems = [];
    for (let i = 0; i < totalSlides; i++) {
      const startIndex = i * itemsPerSlide;
      const endIndex = startIndex + itemsPerSlide;
      const slideItems = products
        .filter((p) => p.collectionIds.includes(collectionsData[4].id))
        .slice(startIndex, endIndex);
      sliderItems.push(slideItems);
    }
    return sliderItems;
  };

  const getProductByCollectionID = (collectionId) => {
    return products.filter((p) => p.collectionIds.includes(collectionId));
  };

  const specialSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3, // Show 3 items per slide
    slidesToScroll: 3, // Scroll 3 items at a time
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
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
          <SectionBannerSlider2 />
          {/* END SECTION BANNER */}
        </>
        <div className="single_banner">
          <div className="row">
            <div className="col-12">
              <CollBar collections={collectionsData.slice(0, 5)} />
            </div>
          </div>
        </div>

        {/* END MAIN CONTENT */}
        <div className="main_content">
          {/* START SECTION SHOP DONE */}

          {/* END SECTION SHOP */}

          {/* START SECTION SHOP Done */}

          <div className="small_pt small_pb">
            <div className="container">
              <div className="d-flex justify-content-center">
                <FeaturedProductHeader
                  className="d-flex justify-content-center"
                  title={collectionsData[3].name}
                />
              </div>
              <div className="tab-pane fade show active">
                <SliderSection
                  sliderRef={collection1}
                  products={products.filter((p) =>
                    p.collectionIds.includes(collectionsData[3].id)
                  )}
                  showProductActionBox={showProductActionBox}
                />
              </div>
            </div>
          </div>

          <div className="small_pt small_pb">
            <div className="container">
              <div className="d-flex justify-content-center">
                <FeaturedProductHeader
                  className="d-flex justify-content-center"
                  title={collectionsData[5].name}
                />
              </div>
              <div className="tab-pane fade show active">
                <SliderSection
                  sliderRef={collection0}
                  products={products.filter((p) =>
                    p.collectionIds.includes(collectionsData[5].id)
                  )}
                  showProductActionBox={showProductActionBox}
                />
              </div>
            </div>
          </div>

          {/* START SECTION SHOP  */}
          <div className="small_pt pb_20 small_pb">
            <div className="container col-12">
              <div className="heading-tab-header mgbt-40px  ">
                <div className="">
                  <div>
                    <FeaturedProductHeader
                      className="d-flex justify-content-center"
                      title={collectionsData[4].name}
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
                        onClick={() => collection2.current.slickPrev()}
                      >
                        <FaChevronLeft className={styles.leftAN} />
                      </button>
                    </div>
                    <div className={styles.nextBN}>
                      <button
                        type="button"
                        role="presentation"
                        className="custom-next-button"
                        onClick={() => collection2.current.slickNext()}
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
                        ref={collection2}
                        {...specialSettings}
                        className="overflow-hidden"
                        products={getProductByCollectionID(
                          collectionsData[5].id
                        )}
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
                                  showProductActionBox={showProductActionBox}
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

          {/* START SECTION BANNER */}
          <div className="pb_20 small_pt">
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

          {/* <div className="section small_pb">
            <div className="container">
              <FeaturedProductHeader
                collections={collections}
                showTabs={showTabs}
                title="Bộ sưu tập"
              />
              <div className="row">
                <div className="col-12">
                  <div className="tab_slider">
                    {
                      
                    }
                    <div
                      className="tab-pane fade show active"
                      id={collections[3].code}
                      role="tabpanel"
                      aria-labelledby={`${collections[3].code}-tab`}
                    >
                      <SliderSection
                        sliderRef={collection3}
                        products={products.filter((p) =>
                          p.collectionIds.includes(collections[3].id)
                        )}
                        showProductActionBox={showProductActionBox}
                      />
                    </div>
                    <div
                      className="tab-pane fade show active"
                      id={collections[1].code}
                      role="tabpanel"
                      aria-labelledby={`${collections[1].code}-tab`}
                    >
                      <SliderSection
                        sliderRef={collection1}
                        products={products.filter((p) =>
                          p.collectionIds.includes(collections[1].id)
                        )}
                        showProductActionBox={showProductActionBox}
                      />
                    </div>
                    <div
                      className="tab-pane fade show active"
                      id={collections[2].code}
                      role="tabpanel"
                      aria-labelledby={`${collections[2].code}-tab`}
                    >
                      <SliderSection
                        sliderRef={collection2}
                        products={products.filter((p) =>
                          p.collectionIds.includes(collections[2].id)
                        )}
                        showProductActionBox={showProductActionBox}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
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
  const categories = data.categories;

  const newProductsCollection = collections.find(
    (col) => col.code === "hang-moi-ve"
  );
  const filterCollections = collections.filter(
    (col) =>
      (col.code !== "hang-moi-ve") &
      (col.code !== "ban-chay") &
      (col.code !== "chi-co-tai-homie")
  );
  const bestSellerProductCollection = collections.find(
    (col) => col.code === "ban-chay"
  );
  const onlyHomieProductCollection = collections.find(
    (col) => col.code === "chi-co-tai-homie"
  );
  const filterProducts = products.filter(
    (product) => product.type === "SINGLE" || product.type === "PARENT"
  );

  // End this Function Filter PARENT AND SINGLE DONT HAVE CHILD

  return {
    props: {
      collections,
      categories,
      products: filterProducts,
    },
  };
}
