import React from "react";

const Tabs = ({ description }) => {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="large_divider clearfix" />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="tab-style3">
            <ul className="nav nav-tabs" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="Description-tab"
                  data-bs-toggle="tab"
                  href="#Description"
                  role="tab"
                  aria-controls="Description"
                  aria-selected="true"
                >
                  MÔ TẢ SẢN PHẨM
                </a>
              </li>

              {/* <li className="nav-item">
                      <a
                        className="nav-link"
                        id="Reviews-tab"
                        data-bs-toggle="tab"
                        href="#"
                        role="tab"
                        aria-controls="Reviews"
                        aria-selected="false"
                      >
                        NHẬN XÉT (2)
                      </a>
                    </li> */}
            </ul>
            <div className="tab-content shop_info_tab">
              <div
                style={{ whiteSpace: "pre-line" }}
                className="tab-pane fade show active"
                id="Description"
                role="tabpanel"
                aria-labelledby="Description-tab"
              >
                <p>{description}</p>
              </div>
              {/* <div
                      className="tab-pane fade"
                      id="Reviews"
                      role="tabpanel"
                      aria-labelledby="Reviews-tab"
                    >
                      <div className="comments">
                        <h5 className="product_tab_title">
                          2 Review For <span>Ly Giữ Nhiệt Funny Party</span>
                        </h5>
                        <ul className="list_none comment_list mt-4">
                          <li>
                            <div className="comment_img">
                              <img src="assets/images/user1.jpg" alt="user1" />
                            </div>
                            <div className="comment_block">
                              <div className="rating_wrap">
                                <div className="rating">
                                  <div
                                    className="product_rate"
                                    style={{ width: "80%" }}
                                  />
                                </div>
                              </div>
                              <p className="customer_meta">
                                <span className="review_author">
                                  Alea Brooks
                                </span>
                                <span className="comment-date">
                                  March 5, 2018
                                </span>
                              </p>
                              <div className="description">
                                <p>
                                  Lorem Ipsumin gravida nibh vel velit auctor
                                  aliquet. Aenean sollicitudin, lorem quis
                                  bibendum auctor, nisi elit consequat ipsum,
                                  nec sagittis sem nibh id elit. Duis sed odio
                                  sit amet nibh vulputate
                                </p>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="comment_img">
                              <img src="assets/images/user2.jpg" alt="user2" />
                            </div>
                            <div className="comment_block">
                              <div className="rating_wrap">
                                <div className="rating">
                                  <div
                                    className="product_rate"
                                    style={{ width: "60%" }}
                                  />
                                </div>
                              </div>
                              <p className="customer_meta">
                                <span className="review_author">
                                  Grace Wong
                                </span>
                                <span className="comment-date">
                                  June 17, 2018
                                </span>
                              </p>
                              <div className="description">
                                <p>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content of
                                  a page when looking at its layout. The point
                                  of using Lorem Ipsum is that it has a
                                  more-or-less normal distribution of letters
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="review_form field_form">
                        <h5>Add a review</h5>
                        <form className="row mt-3">
                          <div className="form-group col-12 mb-3">
                            <div className="star_rating">
                              <span data-value={1}>
                                <i className="far fa-star" />
                              </span>
                              <span data-value={2}>
                                <i className="far fa-star" />
                              </span>
                              <span data-value={3}>
                                <i className="far fa-star" />
                              </span>
                              <span data-value={4}>
                                <i className="far fa-star" />
                              </span>
                              <span data-value={5}>
                                <i className="far fa-star" />
                              </span>
                            </div>
                          </div>
                          <div className="form-group col-12 mb-3">
                            <textarea
                              required="required"
                              placeholder="Your review *"
                              className="form-control"
                              name="message"
                              rows={4}
                              defaultValue={""}
                            />
                          </div>
                          <div className="form-group col-md-6 mb-3">
                            <input
                              required="required"
                              placeholder="Enter Name *"
                              className="form-control"
                              name="name"
                              type="text"
                            />
                          </div>
                          <div className="form-group col-md-6 mb-3">
                            <input
                              required="required"
                              placeholder="Enter Email *"
                              className="form-control"
                              name="email"
                              type="email"
                            />
                          </div>
                          <div className="form-group col-12 mb-3">
                            <button
                              type="submit"
                              className="btn btn-fill-out"
                              name="submit"
                              value="Submit"
                            >
                              Submit Review
                            </button>
                          </div>
                        </form>
                      </div>
                    </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabs;
