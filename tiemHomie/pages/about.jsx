import React from "react";
import classes from "../styles/Home.module.css";
import BreadCrumb from "../components/breadCrumb/BreadCrumb";

const about = () => {
  return (
    <>
      <BreadCrumb
        className="d-flex justify-content-center"
        href="/about"
        title="About us"
        middlePath=""
        descriptionTitle="Câu chuyện thương hiệu"
      />
      {/* START MAIN CONTENT */}
      <div className="main_content">
        {/* STAT SECTION ABOUT */}
        <div className="section">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="about_img scene mb-4 mb-lg-0">
                  <div className={classes.img}>
                    <img
                      src=" ./assets/images2/image-29@2x.png"
                      alt="about_img"
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="heading_s1">
                  <h2>Chúng tôi là ai</h2>
                </div>
                <p>
                  Tiệm Homie cung cấp các sản phẩm quà tặng, trang trí nhà cửa,
                  thư giãn và phụ kiện, làm cho cuộc sống của bạn xinh đẹp và dễ
                  chịu hơn.
                </p>
                <p>
                  Facebook:{" "}
                  <a
                    href="https://www.facebook.com/tiemhomie.sg"
                    style={{ color: "#f79c43" }}
                  >
                    Tiệm Homie
                  </a>{" "}
                  &nbsp; &nbsp; &nbsp; Instagram:{" "}
                  <a
                    href="https://www.instagram.com/tiemhomie/"
                    style={{ color: "#f79c43" }}
                  >
                    tiemhomie
                  </a>
                  <br />
                  Hotline/Zalo: 0386660782
                  <br />
                  Liên hệ xem hàng: Chung cư Masteri Millennium 132 Bến Vân Đồn,
                  phường 6 quận 4, TP.HCM (Nhà riêng , Gọi trước khi qua)
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* END SECTION ABOUT */}
      </div>
      {/* END MAIN CONTENT */}
    </>
  );
};

export default about;
