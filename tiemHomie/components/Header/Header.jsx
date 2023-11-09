import React, { FC, useEffect } from "react";
import { useState } from "react";
import style from "./Header.module.css";
import Link from "next/link";
import Cart from "./Cart/Cart";
import Search from "./SeachingGroup/Search";
import { useRouter } from "next/router";
import { getAllProduct } from "../../action/menuApi";
import { useDispatch, useSelector } from "react-redux";
import { updateTotal } from "@/redux/reducers/cartSlice";
import Backdrop from "./Backdrop/Backdrop";
import slugify from "slugify";
import { collectionsData, categoriesData } from "../../data/data";

const Header = ({ products }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartOpen = (e) => {
    e.preventDefault();
    setIsCartOpen(true);
    setIsNavbarOpen(false);
    setIsDropdownOpen(false);
  };

  const handleCartClose = (e) => {
    e.preventDefault();
    setIsCartOpen(false);
    setIsNavbarOpen(false);
    setIsDropdownOpen(false);
  };
  const router = useRouter();

  //Redux
  const amount = useSelector((store) => store.cart.amount);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTotal());
  }, [products, dispatch]);

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLinkClick = () => {
    setIsNavbarOpen(false);
    setIsDropdownOpen(false);
  };
  return (
    <>
      {isCartOpen ? (
        <>
          <Backdrop handleCartClose={handleCartClose} isCartOpen={isCartOpen} />
        </>
      ) : (
        <>
          <Backdrop handleCartClose={handleCartClose} isCartOpen={isCartOpen} />
        </>
      )}

      <header
        className="header_wrap "
        // style={{ marginTop: "50px" }}
      >
        <div className="top-header p-0 pt-2">
          <div className="container  mx-auto px-2 w-100">
            <div className="row align-items-center ">
              {/* Logo */}
              <div className="col-6 col-md-4 col-sm-6 col-xl-4 col-xxl-4 order-md-0 order-xl-0">
                <div className="d-flex align-items-center justify-content-md-start mb-2">
                  <Link className={style.logo} href="/">
                    {/* <img src="assets/images/image-141@2x.png" alt="logo" /> */}
                    <img src="/assets/images2/logo_title.png" alt="logo" />
                    <h2
                      className="justify-content-center my-0 ms-2"
                      style={{
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        fontFamily: "Pacifico",
                        fontWeight: 400,
                      }}
                    >
                      Tiệm Homie
                    </h2>
                  </Link>
                </div>
              </div>

              {/*  */}
              <div className="col-12 col-md-6 col-sm-12 col-xl-6 col-xxl-6 align-items-center justify-content-center order-md-1 order-sm-3 order-3 order-xl-1">
                <Search className="me-16 order-sm-last order-md-last" />
              </div>

              <div className="col-6 col-md-2 col-sm-6 col-xl-2 col-xxl-2 d-flex align-items-center justify-content-end order-md-2 order-xl-2 px-1">
                <ul className="navbar-nav attr-nav align-items-center">
                  {/* <li className={style.loginBtn}>
                    <a href="/">
                      <i className="ti-user"></i>
                    </a>
                  </li> */}

                  <li className="cart_hover px-1">
                    <a
                      className="nav-link cart_trigger"
                      href="#"
                      data-bs-toggle=""
                      onClick={handleCartOpen}
                    >
                      <i className="linearicons-cart"></i>
                      <span className="cart_count"> {amount} </span>
                    </a>

                    {isCartOpen ? (
                      <>
                        <div className="slide-in-left">
                          <div className={`${style.cartSidebarOpen} `}>
                            <Cart handleCartClose={handleCartClose} />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="slide-in-left">
                          <div className={`${style.cartSidebarClose} `}>
                            <Cart />
                          </div>
                        </div>
                      </>
                    )}
                  </li>

                  <button
                    className="navbar-toggler mt-0 mb-2 me-1 px-1"
                    type="button"
                    onClick={() => setIsNavbarOpen(!isNavbarOpen)}
                  >
                    <span
                      className={`${style.toggle} ion-android-menu fs-3`}
                    ></span>
                  </button>
                </ul>
              </div>
            </div>
          </div>

          <div
            className={`${style.bgHeader} bottom_header dark_skin main_menu_uppercase `}
            // style={{ marginTop: "25px" }}
          >
            <div className="container p-0">
              <nav className={`${style.content} navbar navbar-expand-lg`}>
                <div
                  className={`collapse navbar-collapse justify-content-center${
                    isNavbarOpen ? " show" : ""
                  }`}
                  // id="navbarSupportedContent"
                >
                  <ul className="navbar-nav">
                    <li className="dropdown mx-3">
                      <Link
                        data-bs-toggle=""
                        className={`${
                          router.pathname === "/" ? "active" : ""
                        } nav-link`}
                        href="/"
                      >
                        Trang Chủ
                      </Link>
                    </li>
                    <li className="dropdown dropdown-mega-menu mx-3 ">
                      <a
                        className={`${
                          router.pathname === "/collection" ? "active" : ""
                        } dropdown-toggle nav-link nav-item`}
                        href="/collection"
                        data-bs-toggle="dropdown"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      >
                        Sản Phẩm
                      </a>
                      <div
                        className={`dropdown-menu ${
                          isDropdownOpen ? "show" : ""
                        }`}
                      >
                        <ul className="mega-menu  d-lg-flex">
                          <li className="mega-menu-col col-lg-4">
                            <ul>
                              <li className="dropdown-header">Bộ sưu tập</li>
                              {collectionsData.map((collection) => (
                                <li>
                                  <Link
                                    className="dropdown-item nav-link nav-item"
                                    href={`/collection/${collection.code}`}
                                    onClick={handleLinkClick}
                                  >
                                    {collection.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>
                          <li className="mega-menu-col col-lg-4">
                            <ul>
                              <li className="dropdown-header">Danh mục</li>
                              {categoriesData.map((category) => (
                                <li>
                                  <Link
                                    className="dropdown-item nav-link nav-item"
                                    href={`/category/${category.code}`}
                                    onClick={handleLinkClick}
                                  >
                                    {category.name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </li>

                          <div className="flex-lg-column d-lg-flex menu_banners col-lg-4 g-3 px-3">
                            <div className="row">
                              <div className="header-banner">
                                <img
                                  src="/assets/images/shop-banner-img1jpg@2x.png"
                                  alt="menu_banner1"
                                />
                              </div>
                            </div>
                            <div className="row">
                              <div className="header-banner">
                                <img
                                  src="/assets/images/shop-banner-img2jpg@2x.png"
                                  alt="menu_banner2"
                                />
                              </div>
                            </div>
                          </div>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <Link
                        className={`${
                          router.pathname === "/about" ? "active" : ""
                        } nav-link nav_item mx-3`}
                        href="/about"
                        passHref
                      >
                        Câu Chuyện Thương Hiệu
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          router.pathname === "/contact" ? "active" : ""
                        } nav-link nav_item mx-3`}
                        href="/contact"
                        passHref
                      >
                        Liên hệ
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export async function getStaticProps() {
  const data = await getAllProduct();
  const products = data.products;
  const collections = data.collections;
  const categories = data.categories;
  return {
    props: { products },
  };
}

export default Header;
