import Image from "next/image";
import Link from "next/link";
import React from "react";

const SectionBannerSlider = () => {
  return (
    <div className="banner_section slide_medium shop_banner_slider staggered-animation-wrap">
      <div
        id="carouselExampleControls"
        className="carousel slide carousel-fade light_arrow"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active background_bg">
            <Image
              src="/assets/images2/banner.jpg"
              width={965}
              height={570}
              alt="img"
            />
            <div className="banner_slide_content">
              <div className="container">
                {/* STRART CONTAINER */}
                <div className="">
                  <div className="">
                    <div className="banner_content overflow-hidden">
                      <h5
                        className="mb-3 staggered-animation font-weight-light"
                        data-animation="slideInLeft"
                        data-animation-delay="0.5s"
                      >
                        {/* Get up to 50% off Today Only! */}
                      </h5>
                      <h2
                        className="staggered-animation"
                        data-animation="slideInLeft"
                        data-animation-delay="1s"
                        style={{
                          fontFamily: "Georgia",
                          color: "white",
                          fontWeight: "bolder",
                        }}
                      >
                        ENJOY LIFE. SPREAD LOVE
                      </h2>
                      <Link
                        className="btn btn-fill-out rounded-0 staggered-animation text-uppercase"
                        href="/category"
                        data-animation="slideInLeft"
                        data-animation-delay="1.5s"
                      >
                        Mua Ngay
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* END CONTAINER*/}
            </div>
          </div>

          {/* <div className="carousel-item background_bg">
            <Image
              src="/assets/images2/banner.jpg"
              width={1016}
              height={600}
              alt="img"
            />
            <div className="banner_slide_content">
              <div className="container">
                
                <div className="row">
                  <div className="col-lg-6">
                    <div className="banner_content overflow-hidden">
                      <h5
                        className="mb-3 staggered-animation font-weight-light"
                        data-animation="slideInLeft"
                        data-animation-delay="0.5s"
                        style={{ color: "white" }}
                      >
                        Super Sale
                      </h5>
                      <h2
                        className="staggered-animation"
                        data-animation="slideInLeft"
                        data-animation-delay="1s"
                        style={{ color: "white" }}
                      >
                        Bộ sưu tập mới
                      </h2>
                      <Link
                        className="btn btn-fill-out rounded-0 staggered-animation text-uppercase"
                        href="/collection"
                        data-animation="slideInLeft"
                        data-animation-delay="1.5s"
                        style={{ color: "white" }}
                      >
                        Mua Ngay
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>

          <div className="carousel-item background_bg">
            <Image
              src="/assets/images2/banner.jpg"
              width={1016}
              height={600}
              alt="img"
            />
            <div className="banner_slide_content">
              <div className="container">
                
                <div className="row">
                  <div className="col-lg-6">
                    <div className="banner_content overflow-hidden">
                      <h5
                        className="mb-3 staggered-animation font-weight-light"
                        data-animation="slideInLeft"
                        data-animation-delay="0.5s"
                        style={{ color: "white" }}
                      >
                        Sale 40% Off
                      </h5>
                      <h2
                        className="staggered-animation"
                        data-animation="slideInLeft"
                        data-animation-delay="1s"
                        style={{ color: "white" }}
                      >
                        SUMMER COMING
                      </h2>
                      <Link
                        className="btn btn-fill-out rounded-0 staggered-animation text-uppercase"
                        href="/collection"
                        data-animation="slideInLeft"
                        data-animation-delay="1.5s"
                      >
                        Mua Ngay
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div> */}
        </div>
        {/* <Link
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-bs-slide="prev"
        >
          <i className="ion-chevron-left" />
        </Link>
        <Link
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-bs-slide="next"
        >
          <i className="ion-chevron-right" />
        </Link> */}
      </div>
    </div>
  );
};

export default SectionBannerSlider;
