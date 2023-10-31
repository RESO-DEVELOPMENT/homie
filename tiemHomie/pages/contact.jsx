// import { FaRegMap } from 'react-icons/fa';
// import { HiOutlineMailOpen } from 'react-icons/hi';
// import { MdOutlinePhoneIphone } from 'react-icons/md';
import BreadCrumb from "../components/breadCrumb/BreadCrumb";
import classes from "../styles/Home.module.css";
// return <h3> Lets go for a <FaBeer />? </h3>
const contact = () => {
  return (
    <>
      <BreadCrumb
        className="d-flex justify-content-center"
        href="/contact"
        title="Contact"
        middlePath=""
        descriptionTitle="Liên Hệ Với Chúng Tôi"
      />
      <div className={classes.bg}>
        <div className="main_content">
          {/* START SECTION CONTACT */}
          <div className="section pb_70">
            <div className={classes.font}>
              <div className="container">
                <div className="row ">
                  <div className="col-xl-4 col-md-6">
                    <div className="contact_wrap contact_style3">
                      <div className="contact_icon">
                        <i className="linearicons-map2" />
                      </div>
                      <div className="contact_text">
                        <span>Địa chỉ</span>
                        <div className={classes.address}>
                          <p>132 Bến Vân Đồn P6 Q4 ,TP.Hồ Chí Minh</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="contact_wrap contact_style3">
                      <div className="contact_icon">
                        <i className="linearicons-envelope-open" />
                      </div>
                      <div className="contact_text">
                        <span>Địa chỉ Email</span>
                        <a href="mailto:info@sitename.com">
                          tiemhomie@gmail.com{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-md-6">
                    <div className="contact_wrap contact_style3">
                      <div className="contact_icon">
                        <i className="linearicons-tablet2" />
                      </div>
                      <div className="contact_text">
                        <span>Điện thoại</span>
                        <p>0386660782</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END SECTION CONTACT */}
          {/* START SECTION CONTACT */}
          <div className="section pt-0">
            <div className={classes.font_conact}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="heading_s1">
                      <h2>liên hệ chúng tôi</h2>
                    </div>
                    {/* <p className="leads">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          blandit massa enim. Nullam id varius nunc id varius nunc.
        </p> */}
                    <div className="field_form">
                      <form method="post" name="enq">
                        <div className="row">
                          <div className="form-group col-md-6 mb-3">
                            <input
                              required=""
                              placeholder="Tên của bạn *"
                              id="first-name"
                              className="form-control"
                              name="name"
                              type="text"
                            />
                          </div>
                          <div className="form-group col-md-6 mb-3">
                            <input
                              required=""
                              placeholder="Email của bạn *"
                              id="email"
                              className="form-control"
                              name="email"
                              type="email"
                            />
                          </div>
                          <div className="form-group col-md-6 mb-3">
                            <input
                              required=""
                              placeholder="Số điện thoại của bạn. *"
                              id="phone"
                              className="form-control"
                              name="phone"
                            />
                          </div>
                          <div className="form-group col-md-6 mb-3">
                            <input
                              placeholder="Chủ đề bạn cần"
                              id="subject"
                              className="form-control"
                              name="subject"
                            />
                          </div>
                          <div className="form-group col-md-12 mb-3">
                            <textarea
                              required=""
                              id="description"
                              className="form-control"
                              name="message"
                              rows={4}
                              defaultValue={""}
                            />
                          </div>
                          <div className="col-md-12 mb-3">
                            <button
                              type="submit"
                              title="Submit Your Message!"
                              className="btn btn-fill-out"
                              id="submitButton"
                              name="submit"
                              value="Submit"
                              href="mailto:tiemhomie@gmail.com"
                            >
                              Gửi
                            </button>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div
                              id="alert-msg"
                              className="alert-msg text-center"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 pt-2 pt-lg-0 mt-4 mt-lg-0">
                    <div className="contact_map">
                      {/* thẻ iframe giúp chúng ta nhúng những đoạn code hoặc video từ các trang web khác về trang chúng ta  */}
                      <iframe
                        className={classes.map}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.618418822293!2d106.69843101654348!3d10.76386299473725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f6b32208393%3A0xefa0372b6b60b448!2zMTIzIMSQLiBC4bq_biBWw6JuIMSQ4buTbiwgUGjGsOG7nW5nIDksIFF14bqtbiA0LCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1684652655738!5m2!1sen!2s"
                        width={600}
                        height={450}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* END SECTION CONTACT */}
        </div>
        {/* END MAIN CONTENT */}
      </div>
    </>
  );
};

export default contact;
