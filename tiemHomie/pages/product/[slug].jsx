import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import Link from "next/link";
import Tabs from "../../components/tabs/Tabs";
import FeaturedProductHeader from "../../components/section/featuredProduct/FeaturedProductHeader";
import { useRef } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import styles from "../../styles/Home.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import productData from "../data/product.json";
import ProductCard from "../../components/section/productCard/ProductCard";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import ImageZoom from "react-image-zoom";

import { addToCart } from "@/redux/reducers/cartSlice";
import { useDispatch } from "react-redux";
import { getAllProduct } from "../../action/menuApi";
import slugify from "slugify";
import SliderSection from "../../components/section/SliderSection/SliderSection";
import ProductList from "../../components/section/productCard/ProductList";
import { SnackbarProvider, useSnackbar } from "notistack";
const ProductDetail = ({
  product,
  products,
  categories,
  listProductInCate,
}) => {
  const getSliderItems = () => {
    const itemsPerSlide = 2; // Số sản phẩm hiển thị trên mỗi slide
    const totalSlides = Math.ceil(listProductInCate.length / itemsPerSlide); // Tổng số slide
    const sliderItems = [];
    for (let i = 0; i < totalSlides; i++) {
      const startIndex = i * itemsPerSlide;
      const endIndex = startIndex + itemsPerSlide;
      const slideItems = listProductInCate.slice(startIndex, endIndex);
      sliderItems.push(slideItems);
    }
    return sliderItems;
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
  //  test lay chuoi tu ten
  const [showProductActionBox, setShowProductActionBox] = useState(true);
  const [allProducts, setAllProducts] = useState();
  const [childProducts, setChildProducts] = useState([]);
  const [filteredProductsCate, setFilteredProductsCate] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState();
  const { enqueueSnackbar } = useSnackbar();
  const [listImage, setListImage] = useState([]);

  //route declare
  const dispatch = useDispatch();
  const sliderRef6 = useRef(null);
  const router = useRouter();

  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    if (product.type === "PARENT") {
      if (selectedProduct === undefined) {
        enqueueSnackbar("Vui lòng chọn phân loại", { variant: "warning" });
      } else {
        dispatch(
          addToCart({
            productInMenuId: selectedProduct.menuProductId,
            name: selectedProduct.name,
            sellingPrice: selectedProduct.sellingPrice,
            picUrl: selectedProduct.picUrl,
            sku: selectedProduct.code,
            categoryCode: selectedProduct.categoryId,
            type: selectedProduct.type,
            parentProductId:selectedProduct.parentProductId,
            attribute: {
              amount: quantity,
            },
          })
        );
        enqueueSnackbar("Thêm sản phẩm thành công", { variant: "success" });
      }
    } else {
      dispatch(
        addToCart({
          name: product.name,
          sellingPrice: product.sellingPrice,
          picUrl: product.picUrl,
          sku: product.code,
          attribute: {
            amount: quantity,
          },
        })
      );
      enqueueSnackbar("Thêm sản phẩm thành công", { variant: "success" });
    }
  };

  useEffect(() => {
    if (product.type === "SINGLE") {
      const filterProductCate = categories.map((categoryId) => {
        const filteredProducts = products.filter((product) =>
          product.categoryId.includes(categoryId.id)
        );
        return {
          category: categoryId,
          products: filteredProducts,
        };
      });
      const picUrls = product.picUrl.split(";");
      setListImage(picUrls);
      console.log("Filtered Products by Category:", filterProductCate);
    } else {
      const listChild = products.filter(
        (p) => p.type == "CHILD" && p.parentProductId == product.id
      );
      const filterProductCate = categories.map((categoryId) => {
        const filteredProducts = products.filter((product) =>
          product.categoryId.includes(categoryId.id)
        );
        return {
          category: categoryId,
          products: filteredProducts,
        };
      });
      console.log("Filtered Products by Category:", filterProductCate);
      const picUrls = [];
      const parentPicUrls = product.picUrl.split(";");
      listChild.map((childProduct) => {
        picUrls.push(childProduct.picUrl);
      });
      picUrls.push(parentPicUrls);
      setListImage(picUrls);
      setChildProducts(listChild);
      setFilteredProductsCate(filterProductCate);
    }
  }, [product]);
  const cateCodeObject = filteredProductsCate.find(
    (obj) => obj.category.id === product.categoryId
  );
  const categoryCode = cateCodeObject ? cateCodeObject.category.code : "";

  const categoryName = cateCodeObject ? cateCodeObject.category.name : "";

  const formatPrice = (price) => {
    const formattedPrice = price.toLocaleString().replace(/,/g, ".");
    return formattedPrice;
  };

  console.log("childProducts", childProducts);

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
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <BreadCrumb
        middlePath="Chi Tiết Sản Phẩm"
        title={product.name}
        descriptionTitle={product.name}
      />

      {/* START MAIN CONTENT */}
      <div className="main_content">
        {/* START SECTION SHOP */}
        <div className="section pd50">
          <div className="container">
            {/* Main Details of the pages NEED TO WRITE THE LOGIC */}
            <div className="row">
              <div className="col-lg-6 col-md-6 mb-4 mb-md-0">
                <div className="product-image">
                  <div className="">
                    <div>
                      <Carousel
                        moveto={1}
                        infiniteLoop
                        showIndicators={false}
                        showStatus={false}
                        thumbWidth={window.innerWidth > 900 ? 119 : 70}
                        useKeyboardArrows
                        showArrows={false}
                        preventMovementUntilSwipeScrollTolerance
                        selectedItem={
                          selectedProduct !== undefined
                            ? listImage.indexOf(selectedProduct.picUrl)
                            : listImage.length - 1
                        }

                        // className="productCarousel"
                      >
                        {listImage.map((imgUrl, index) => (
                          <div key={index}>
                            <img src={`${imgUrl}`} alt="img" />
                          </div>
                        ))}
                      </Carousel>
                    </div>

                    {/* <Link href="#" className="product_img_zoom" title="Zoom">
                      <span className="linearicons-zoom-in" />
                    </Link> */}
                  </div>
                  {/* <ProductGallery /> */}
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="pr_detail">
                  <div className="product_description">
                    <h4 className="product_title">
                      <Link className="product_title_link" href="#">
                        {product.name}
                      </Link>
                    </h4>
                    <div className="product_price">
                      <span className="price">
                        {formatPrice(
                          selectedProduct === undefined
                            ? product.sellingPrice
                            : selectedProduct.sellingPrice
                        )}{" "}
                        VND
                      </span>

                      {/* <div className="on_sale">
                        <span>35% Off</span>
                          </div>   */}
                    </div>
                    <br></br>
                    <br></br>
                    {/* <div className="rating_wrap">
                      <div className="rating">
                        <div
                          className="product_rate"
                          style={{ width: "80%" }}
                        />
                      </div>
                      <span className="rating_num">(21)</span>
                    </div> */}
                    {/* <div className="pr_desc">
                      <p>
                        {selectedProduct === undefined
                          ? product.description
                          : selectedProduct.description}
                      </p>
                    </div> */}

                    <div className="product_sort_info">
                      <ul>
                        <li>
                          <i className="linearicons-shield-check" /> Giao Hàng
                          Toàn Quốc
                        </li>
                        <li>
                          <i className="linearicons-sync" /> Cam Kết Đổi/Trả
                          Hàng Miễn Phí
                        </li>
                        <li>
                          <i className="linearicons-bag-dollar" /> Thanh Toán
                          Khi Nhận Hàng
                        </li>
                      </ul>
                    </div>

                    {product.type === "PARENT" && (
                      <>
                        <div className={`${styles.switch_color}`}>
                          <span className={`${styles.switch_color_title}`}>
                            Phân loại:
                          </span>
                          <div className={`${styles.groupButtonColor}`}>
                            {childProducts.length > 0 &&
                              childProducts.map((childProduct) => (
                                <button
                                  onClick={() => {
                                    setSelectedProduct(childProduct);
                                  }}
                                  className={
                                    childProduct == selectedProduct
                                      ? `${styles.active}`
                                      : `${styles.groupButtonColor_button}`
                                  }
                                >
                                  {childProduct.description}
                                </button>
                              ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  <hr />
                  <div className="cart_extra">
                    <div className="cart-product-quantity">
                      <div className="quantity">
                        <input
                          type="button"
                          defaultValue="-"
                          className="minus"
                          onClick={handleDecrease}
                        />
                        <input
                          type="text"
                          name="quantity"
                          // defaultValue={1}
                          value={quantity}
                          title="Qty"
                          className="qty"
                          size={4}
                          readOnly
                        />
                        <input
                          type="button"
                          defaultValue="+"
                          className="plus"
                          onClick={handleIncrease}
                        />
                      </div>
                    </div>
                    <div className="cart_btn">
                      <button
                        className={`btn btn-outline-light btn-sm pb-2`}
                        style={{ backgroundColor: "#F79C43" }}
                        type="button"
                        // onClick={() => {
                        //   dispatch(
                        //     addToCart({
                        //       name: product.name,
                        //       sellingPrice: product.sellingPrice,
                        //       picUrl: product.picUrl,
                        //       attribute: {
                        //         amount: 1,
                        //       },
                        //     })
                        //   );
                        // }}
                        onClick={handleAddToCart}
                      >
                        <i className="icon-basket-loaded" /> Thêm Vào Giỏ Hàng
                      </button>
                      {/* <Link className="add_compare" href="#">
                       <i className="icon-shuffle" />
                                </Link> */}
                      <Link className="add_wishlist" href="#">
                        <i className="icon-heart" />
                      </Link>
                    </div>
                  </div>
                  <hr />
                  <ul className="product-meta">
                    <li>
                      SKU: <Link href="#">{product.code}</Link>
                    </li>
                    <li>
                      Danh mục:{" "}
                      <Link href={`/category/${categoryCode}`}>
                        {categoryName}
                      </Link>
                    </li>
                  </ul>
                  <div className="product_share">
                    {/* <span>Share:</span> */}
                    {/* <ul className="social_icons">
                      <li>
                        <Link href="#" onClick={handleFacebookShare}>
                          <i className="ion-social-facebook" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" onClick={handleTwitterShare}>
                          <i className="ion-social-twitter" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" onClick={handleGooglePlusShare}>
                          <i className="ion-social-googleplus" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" onClick={handleYouTubeShare}>
                          <i className="ion-social-youtube-outline" />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" onClick={handleInstagramShare}>
                          <i className="ion-social-instagram-outline" />
                        </Link>
                      </li>
                    </ul> */}
                  </div>
                  <br></br>
                  <a
                    href="https://zalo.me/0386660782"
                    id="linkzalo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="d-flex">
                      <div className="fcta-zalo-vi-tri-nut">
                        <div
                          id="fcta-zalo-tracking"
                          className="fcta-zalo-nen-nut"
                        >
                          <div
                            id="fcta-zalo-tracking"
                            className="fcta-zalo-ben-trong-nut"
                          >
                            {" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 460.1 436.6"
                            >
                              <path
                                fill="currentColor"
                                className="st0"
                                d="M82.6 380.9c-1.8-.8-3.1-1.7-1-3.5 1.3-1 2.7-1.9 4.1-2.8 13.1-8.5 25.4-17.8 33.5-31.5 6.8-11.4 5.7-18.1-2.8-26.5C69 269.2 48.2 212.5 58.6 145.5 64.5 107.7 81.8 75 107 46.6c15.2-17.2 33.3-31.1 53.1-42.7 1.2-.7 2.9-.9 3.1-2.7-.4-1-1.1-.7-1.7-.7-33.7 0-67.4-.7-101 .2C28.3 1.7.5 26.6.6 62.3c.2 104.3 0 208.6 0 313 0 32.4 24.7 59.5 57 60.7 27.3 1.1 54.6.2 82 .1 2 .1 4 .2 6 .2H290c36 0 72 .2 108 0 33.4 0 60.5-27 60.5-60.3v-.6-58.5c0-1.4.5-2.9-.4-4.4-1.8.1-2.5 1.6-3.5 2.6-19.4 19.5-42.3 35.2-67.4 46.3-61.5 27.1-124.1 29-187.6 7.2-5.5-2-11.5-2.2-17.2-.8-8.4 2.1-16.7 4.6-25 7.1-24.4 7.6-49.3 11-74.8 6zm72.5-168.5c1.7-2.2 2.6-3.5 3.6-4.8 13.1-16.6 26.2-33.2 39.3-49.9 3.8-4.8 7.6-9.7 10-15.5 2.8-6.6-.2-12.8-7-15.2-3-.9-6.2-1.3-9.4-1.1-17.8-.1-35.7-.1-53.5 0-2.5 0-5 .3-7.4.9-5.6 1.4-9 7.1-7.6 12.8 1 3.8 4 6.8 7.8 7.7 2.4.6 4.9.9 7.4.8 10.8.1 21.7 0 32.5.1 1.2 0 2.7-.8 3.6 1-.9 1.2-1.8 2.4-2.7 3.5-15.5 19.6-30.9 39.3-46.4 58.9-3.8 4.9-5.8 10.3-3 16.3s8.5 7.1 14.3 7.5c4.6.3 9.3.1 14 .1 16.2 0 32.3.1 48.5-.1 8.6-.1 13.2-5.3 12.3-13.3-.7-6.3-5-9.6-13-9.7-14.1-.1-28.2 0-43.3 0zm116-52.6c-12.5-10.9-26.3-11.6-39.8-3.6-16.4 9.6-22.4 25.3-20.4 43.5 1.9 17 9.3 30.9 27.1 36.6 11.1 3.6 21.4 2.3 30.5-5.1 2.4-1.9 3.1-1.5 4.8.6 3.3 4.2 9 5.8 14 3.9 5-1.5 8.3-6.1 8.3-11.3.1-20 .2-40 0-60-.1-8-7.6-13.1-15.4-11.5-4.3.9-6.7 3.8-9.1 6.9zm69.3 37.1c-.4 25 20.3 43.9 46.3 41.3 23.9-2.4 39.4-20.3 38.6-45.6-.8-25-19.4-42.1-44.9-41.3-23.9.7-40.8 19.9-40 45.6zm-8.8-19.9c0-15.7.1-31.3 0-47 0-8-5.1-13-12.7-12.9-7.4.1-12.3 5.1-12.4 12.8-.1 4.7 0 9.3 0 14v79.5c0 6.2 3.8 11.6 8.8 12.9 6.9 1.9 14-2.2 15.8-9.1.3-1.2.5-2.4.4-3.7.2-15.5.1-31 .1-46.5z"
                              />
                            </svg>
                          </div>
                          <div
                            id="fcta-zalo-tracking"
                            className="fcta-zalo-text"
                          >
                            Chat ngay
                          </div>
                        </div>
                      </div>
                      <div id="fcta-zalo-tracking" className="fcta-zalo-mess">
                        <span id="fcta-zalo-tracking">
                          Liên lạc ngay để mua hàng nhanh chóng nhé !
                        </span>
                      </div>
                    </div>
                  </a>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        '\n@keyframes zoom{0%{transform:scale(.5);opacity:0}50%{opacity:1}to{opacity:0;transform:scale(1)}}@keyframes lucidgenzalo{0% to{transform:rotate(-25deg)}50%{transform:rotate(25deg)}}.jscroll-to-top{bottom:100px}.fcta-zalo-ben-trong-nut svg path{fill:#fff}.fcta-zalo-vi-tri-nut{position:relative;bottom:24px;right:0px;z-index:999}.fcta-zalo-nen-nut,div.fcta-zalo-mess{box-shadow:0 2px 6px rgba(0,0,0,.06),0 2px 12px rgba(0,0,0,.16)}.fcta-zalo-nen-nut{width:50px;height:50px;text-align:center;color:#fff;background:#0068ff;border-radius:50%;position:relative}.fcta-zalo-nen-nut::after,.fcta-zalo-nen-nut::before{content:"";position:absolute;border:1px solid #0068ff;background:#0068ff80;z-index:-1;left:-20px;right:-20px;top:-20px;bottom:-20px;border-radius:50%;animation:zoom 1.9s linear infinite}.fcta-zalo-nen-nut::after{animation-delay:.4s}.fcta-zalo-ben-trong-nut,.fcta-zalo-ben-trong-nut i{transition:all 1s}.fcta-zalo-ben-trong-nut{position:absolute;text-align:center;width:60%;height:60%;left:10px;bottom:25px;line-height:70px;font-size:25px;opacity:1}.fcta-zalo-ben-trong-nut i{animation:lucidgenzalo 1s linear infinite}.fcta-zalo-nen-nut:hover .fcta-zalo-ben-trong-nut,.fcta-zalo-text{opacity:0}.fcta-zalo-nen-nut:hover i{transform:scale(.5);transition:all .5s ease-in}.fcta-zalo-text a{text-decoration:none;color:#fff}.fcta-zalo-text{position:absolute;top:6px;text-transform:uppercase;font-size:12px;font-weight:700;transform:scaleX(-1);transition:all .5s;line-height:1.5}.fcta-zalo-nen-nut:hover .fcta-zalo-text{transform:scaleX(1);opacity:1}div.fcta-zalo-mess{position:relative;bottom:23px;right:-8px;z-index:99;background:#fff;padding:13px 18px 15px 15px;color:#0068ff;border-radius: 50px 50px 50px 50px;font-weight:700;font-size:15px}.fcta-zalo-mess span{color:#0068ff!important}\nspan#fcta-zalo-tracking{font-family:Roboto;line-height:1.5}.fcta-zalo-text{font-family:Roboto}\n',
                    }}
                  />
                </div>
              </div>
            </div>

            {/* The Tabs NEED TO WRITE THE LOGIC  */}
            <Tabs description={product.description} />

            {/* Section Product HERE HAVE AN PROBLEM */}
            <div className="section small_pt small_pb">
              <div className="">
                <div className="">
                  <FeaturedProductHeader
                    className="d-flex justify-content-center"
                    title="Sản phẩm tương tự"
                  />
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
                        onClick={() => sliderRef6.current.slickPrev()}
                      >
                        <FaChevronLeft className={styles.leftAN} />
                      </button>
                    </div>
                    <div className={styles.nextBN}>
                      <button
                        type="button"
                        role="presentation"
                        className="custom-next-button"
                        onClick={() => sliderRef6.current.slickNext()}
                      >
                        <FaChevronRight className={styles.rightAN} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="product_list">
                      <div className={styles.shop}>
                        <Slider
                          ref={sliderRef6}
                          {...specialSettings}
                          className="overflow-hidden"
                          products={listProductInCate}
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
            {/* Section Product HERE HAVE AN PROBLEM */}
          </div>
        </div>
        {/* END SECTION SHOP */}
        {/* START SECTION SUBSCRIBE NEWSLETTER */}
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const data = await getAllProduct();
  const products = data.products;

  const paths = products.map((p) => {
    const slug = `${p.code}`;

    return {
      params: {
        slug: slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const productCode = params.slug;

  const data = await getAllProduct();
  const products = data.products;
  const categories = data.categories;

  // const productFilters = products.find((item) => item.code === "179")
  const product = products.find((p) => p.code === productCode);
  const listProductInCate = products.filter(
    (prod) =>
      (prod.type === "SINGLE" || prod.type === "PARENT") &&
      prod.categoryId == product.categoryId
  );

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
      products,
      categories,
      listProductInCate,
    },
  };
}

export default ProductDetail;
