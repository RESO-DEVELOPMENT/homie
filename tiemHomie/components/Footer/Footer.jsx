import React, { FC, useState } from "react";
import classes from "./Footer.module.css";
import Link from "next/link";
const Footer = ({}) => {
  return (
    <>
      {" "}
      <footer className="bg_gray">
        <div className={classes.bg}>
          <div className="middle_footer">
            <div className={classes.textt}>
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="shopping_info">
                      <div className="row justify-content-center ">
                        <div className="col-md-4 ">
                          <div className="icon_box icon_box_style2 ">
                            <div className="icon">
                              <div className={classes.icon}>
                                <i className="flaticon-shipped"></i>
                              </div>
                            </div>

                            <div className="icon_box_content">
                              <h5>Miễn Phí vận chuyển</h5>
                              <p>
                                Miễn phí vận chuyển toàn quốc cho đơn hàng từ
                                600k.<br></br> Ship nhanh trong vòng 2h nội
                                thành TP.HCM, phí ship chỉ từ 15-30k.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-4 ">
                          <div className="icon_box icon_box_style2">
                            <div className="icon">
                              <div className={classes.icon}>
                                <i className="flaticon-money-back"></i>
                              </div>
                            </div>

                            <div className="icon_box_content">
                              <h5>Dịch vụ sau bán hàng</h5>
                              <p>
                                Giải quyết các vấn đề liên quan đến hàng hóa
                                trong vòng 3 ngày kể từ sau khi giao hàng thành
                                công.
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="col-md-4  ">
                          <div className="icon_box icon_box_style2 ">
                            <div className="icon">
                              <div className={classes.icon}>
                                <i className="flaticon-support"></i>
                              </div>
                            </div>

                            <div className="icon_box_content">
                              <h5>hỗ trợ khách hàng 24/7</h5>
                              <p>
                                Hỗ trợ giải đáp thắc mắc về sản phẩm và giao
                                hàng nhanh chóng.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_top small_pt pb_20">
          <div className="container">
            <div className={classes.text_contact}>
              <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12">
                  <div className="widget">
                    <div className="footer_logo">
                      <a>
                        <div className={classes.fontt}>
                          <div className={classes.flex}>
                            <img
                              src="/assets/images2/logo_title.png"
                              alt="logo"
                            />
                            <h2
                              style={{
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                                fontFamily: "Pacifico",
                                fontSize: "36px",
                                fontWeight: 400,
                                lineHeight: "34px",
                                textAlign: "left",
                              }}
                            >
                              Tiệm Homie
                            </h2>
                          </div>
                        </div>
                      </a>
                    </div>
                    <h5>Liên hệ với chúng tôi</h5>
                    <ul className="contact_info">
                      <li>
                        <i className="ti-location-pin" />
                        <p>
                          Địa chỉ: 132 Bến Vân Đồn, phường 6 quận 4 TP.HCM (Nhà
                          riêng, gọi trước khi qua)
                        </p>
                      </li>
                      <li>
                        <i className="ti-email" />
                        <Link
                          className="text-decoration-none"
                          href="mailto:info@sitename.com"
                        >
                          Email: tiemhomie@gmail.com
                        </Link>
                      </li>
                      <li>
                        <i className="ti-mobile" />
                        <p>Điện thoại: 0386660782</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="widget">
                    <h6 className="widget_title">Chính sách</h6>
                    <ul className="widget_links">
                      <li>
                        <Link
                          href="/chinh-sach"
                          className="text-decoration-none"
                        >
                          Chính sách
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/chinh-sach-doi-tra"
                          className="text-decoration-none"
                        >
                          Chính sách đổi trả
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/chinh-sach-van-chuyen"
                          className="text-decoration-none"
                        >
                          Chính sách vận chuyển
                        </Link>
                      </li>
                      <li>
                        <Link href="/chinh-sach-so-huu" className="text-decoration-none">
                          Chính sách sở hữu
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-2 col-md-4 col-sm-6">
                  <div className="widget">
                    <h6 className="widget_title">FAQS</h6>
                    <ul className="widget_links">
                      <li>
                        <Link href="/about" className="text-decoration-none">
                          About Us
                        </Link>
                      </li>
                      <li>
                        <Link href="/about" className="text-decoration-none">
                          FAQ
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://goo.gl/maps/rESqZDpa7v6kE3wTA"
                          className="text-decoration-none"
                        >
                          Location
                        </Link>
                      </li>
                      <li>
                        <Link href="/about" className="text-decoration-none">
                          Affiliates
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="text-decoration-none">
                          Contact
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-lg-4 col-md-4 col-sm-12">
                  <div className="widget">
                    <h6 className="widget_title">Facebook, Instagram</h6>
                    <ul className="widget_links">
                      <div className={classes.link_img}>
                        <li>
                          <Link
                            className="text-decoration-none"
                            href="https://www.facebook.com/tiemhomie.sg"
                          >
                            https://www.facebook.com/tiemhomie.sg
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="text-decoration-none"
                            href="https://www.instagram.com/tiemhomie/"
                          >
                            https://www.instagram.com/tiemhomie/
                          </Link>
                        </li>
                        <li>
                          <div className={classes.imgg}>
                            <Link
                              className="text-decoration-none"
                              href="https://www.facebook.com/tiemhomie.sg"
                            >
                              {/* <img src="./assets\images2\image-29@2x.png" alt="logo" /> */}
                              <img
                                src="/assets/images2/image-29@2x.png"
                                alt="logo"
                              />
                            </Link>
                          </div>
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom_footer border-top-tran">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4">
                <p className="mb-lg-0 text-center">
                  © 2020 All Rights Reserved by Tiệm Homie
                </p>
              </div>
              <div className="col-lg-4 order-lg-first">
                <div className="widget mb-lg-0">
                  <ul className="social_icons text-center text-lg-start">
                    <li>
                      <Link
                        href="https://www.facebook.com/tiemhomie.sg"
                        className="sc_facebook"
                      >
                        <i className="ion-social-facebook" />
                      </Link>
                    </li>

                    {/* <li>
                      <Link href="" className="sc_google">
                        <i className="ion-social-googleplus" />
                      </Link>
                    </li> */}

                    <li>
                      <Link
                        href="http://www.instagram.com/tiemhomie"
                        className="sc_instagram "
                      >
                        <i className="ion-social-instagram " />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <div className="col-lg-4">
                <ul className="footer_payment text-center text-lg-end">
                  <li>
                    <Link href="/">
                      <img src="assets/images/visa.png" alt="visa" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <img src="assets/images/discover.png" alt="discover" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <img
                        src="assets/images/master_card.png"
                        alt="master_card"
                      />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <img src="assets/images/paypal.png" alt="paypal" />
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <img
                        src="assets/images/amarican_express.png"
                        alt="amarican_express"
                      />
                    </Link>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
