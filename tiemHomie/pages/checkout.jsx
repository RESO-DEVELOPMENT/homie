import React, { useState, useEffect } from "react";
import classes from "../styles/Cart.module.css";
import BreadCrumb from "../components/breadCrumb/BreadCrumb";
import Link from "next/link";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { GrFormPrevious } from "react-icons/gr";
import { MdLocationPin } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { updateTotal, removeItem } from "@/redux/reducers/cartSlice";
import ProductCardPage from "../components/Header/Cart/ProductCartPage";
import ProductCartSidebar from "../components/Header/Cart/ProductCartSidebar";
import axios from "axios";
import ProductCheckout from "../components/Header/Cart/ProductCheckout";

const CheckoutForm = () => {
  const [data, setData] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [ward, setWard] = useState([]);
  const [showOtherAddress, setShowOtherAddress] = useState(false);

  const handleShowOtherAddress = () => {
    setShowOtherAddress(!showOtherAddress);
  };

  useEffect(() => {
    // Gọi API để lấy danh sách tỉnh, thành phố
    axios
      .get(`https://provinces.open-api.vn/api/`)
      .then((response) => {
        setProvinces(response.data);
      })
      .catch((error) => {
        console.error("Error fetching provinces:", error);
      });
  }, []);

  const handleProvinceChange = (event) => {
    const selectedProvinceCode = event.target.value;

    // Gọi API để lấy danh sách quận, huyện dựa trên tỉnh, thành phố đã chọn
    axios
      .get(
        `https://provinces.open-api.vn/api/p/${selectedProvinceCode}?depth=2`
      )
      .then((response) => {
        setDistricts(response.data.districts);
      })
      .catch((error) => {
        console.error("Error fetching cities:", error);
      });
  };

  const handleDistrictChange = (event) => {
    const selectedCity = event.target.value;

    // Gọi API để lấy danh sách xã dựa trên quận, huyện đã chọn
    axios
      .get(`https://provinces.open-api.vn/api/d/${selectedCity}?depth=2`)
      .then((response) => {
        setWard(response.data.wards);
      })
      .catch((error) => {
        console.error("Error fetching districts:", error);
      });
  };

  // console.log(districts)

  const { products, totalPriceCheckout, checkoutAmount } = useSelector(
    (store) => store.checkout
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTotal());
  }, [products, useDispatch()]);

  var formattedTotalCheckout =
    totalPriceCheckout.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";
  var formattedNum =
    totalPriceCheckout.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";

  return (
    <>
      <div>
        <BreadCrumb
          // className="d-flex justify-content-center"
          // href="/checkout"
          title="Thanh toán"
          descriptionTitle="Giỏ hàng của bạn"
          middlePath="Giỏ hàng"
        />
      </div>

      {/* <div className="section">
        <div className="container">
         
          <div className="row">
            <div className="col-12">
              <div className="medium_divider" />
              <div className="divider center_icon">
                <i className="linearicons-credit-card" />
              </div>
              <div className="medium_divider" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="heading_s1">
                <h4>Thông tin mua hàng</h4>
              </div>
              <form method="post">
                <div className="form-group mb-3">
                  <input
                    className="form-control"
                    required
                    type="text"
                    name="billingEmail"
                    id="billingEmail"
                    placeholder="Email *"
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    required
                    className="form-control"
                    name="billingName"
                    id="billingName"
                    placeholder="Họ và Tên *"
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    className="form-control"
                    required
                    type="text"
                    name="billingPhone"
                    id="billingPhone"
                    placeholder="Số điện thoại *"
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="billingAddress"
                    id="billingAddress"
                    required
                    placeholder="Địa chỉ *"
                  />
                </div>

                <div className="form-group mb-3" id="province">
                  <div className="custom_select">
                    <select
                      className="form-control"
                      id="billingProvince"
                      onChange={handleProvinceChange}
                    >
                      <option value="" placeholder="">
                        Tỉnh thành
                      </option>
                      {provinces.map((province) => (
                        <option key={province.code} value={province.code}>
                          {province.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div
                  className="form-group mb-3"
                  id="city"
                  onChange={handleDistrictChange}
                  disabled={!provinces.length}
                >
                  <div className="custom_select">
                    <select
                      className="form-control"
                      id="billingCity"
                      onChange={handleDistrictChange}
                    >
                      <option value="">Quận, huyện</option>
                      {districts.map((district) => (
                        <option key={district.code} value={district.code}>
                          {district.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div
                  className="form-group mb-3"
                  id="district"
                  disabled={!districts.length || !provinces.length}
                >
                  <div className="custom_select">
                    <select className="form-control" id="billingDistrict">
                      <option value="">Phường, xã</option>
                      {ward.map((district) => (
                        <option key={district.code} value={district.code}>
                          {district.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="ship_detail">
                  <div className="form-group mb-3">
                    <div className="chek-form">
                      <div className="custome-checkbox">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          name="checkbox"
                          id="differentaddress"
                          onClick={handleShowOtherAddress}
                        />
                        <label
                          className="form-check-label label_info"
                          htmlFor="differentaddress"
                        >
                          <span>Giao hàng đến địa chỉ khác</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  {showOtherAddress ? (
                    <div>
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          required
                          className="form-control"
                          name="shippingName"
                          id="shippingName"
                          placeholder="Họ và Tên *"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          className="form-control"
                          required
                          type="text"
                          name="shippingPhone"
                          id="shippingPhone"
                          placeholder="Số điện thoại *"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          className="form-control"
                          name="shippingAddress"
                          id="shippingAddress"
                          required
                          placeholder="Địa chỉ *"
                        />
                      </div>

                      <div className="form-group mb-3" id="province">
                        <div className="custom_select">
                          <select
                            className="form-control"
                            id="shippingProvince"
                            onChange={handleProvinceChange}
                          >
                            <option value="" placeholder="">
                              Tỉnh thành
                            </option>
                            {provinces.map((province) => (
                              <option key={province.code} value={province.code}>
                                {province.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div
                        className="form-group mb-3"
                        id="city"
                        onChange={handleDistrictChange}
                        disabled={!provinces.length}
                      >
                        <div className="custom_select">
                          <select
                            className="form-control"
                            id="shippingCity"
                            onChange={handleDistrictChange}
                          >
                            <option value="">Quận, huyện</option>
                            {districts.map((district) => (
                              <option key={district.code} value={district.code}>
                                {district.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div
                        className="form-group mb-3"
                        id="district"
                        disabled={!districts.length || !provinces.length}
                      >
                        <div className="custom_select">
                          <select
                            className="form-control"
                            id="shippingDistrict"
                          >
                            <option value="">Phường, xã</option>
                            {ward.map((district) => (
                              <option key={district.code} value={district.code}>
                                {district.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <div className="form-group mb-0">
                  <textarea
                    rows={5}
                    className="form-control"
                    placeholder="Ghi chú (tuỳ chọn)"
                    defaultValue={""}
                  />
                </div>
              </form>
            </div>
            <div className="col-md-6">
              <div className="order_review">
                <div className="heading_s1">
                </div>
                <div className="table-responsive order_table">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Sản phẩm</th>
                        <th>Giá</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item, index) => (
                        <ProductCartSidebar
                          key={new Date().getTime() + Math.random()}
                          name={item.name}
                          price={item.sellingPrice}
                          image={item.picUrl}
                          amount={item.attribute.amount}
                          handleQuantityChange={(newQuantity) =>
                            handleQuantityChange(item.id, newQuantity)
                          }
                        />
                      ))}
                    </tbody>
                    <tfoot>
                      <tr>
                        <th>Tạm tính</th>
                        <td className="product-subtotal"> {formattedTotal} </td>
                      </tr>
                      <tr>
                        <th>Phí vận chuyển</th>
                        <td>Miễn phí</td>
                      </tr>
                      <tr>
                        <th>Thành tiền</th>
                        <td className="product-subtotal"> {formattedTotal} </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="payment_method">
                  <div className="heading_s1">
                    <h4>Phương thức thanh toán</h4>
                  </div>
                  <div className="payment_option">
                    <div className="custome-radio">
                      <input
                        className="form-check-input"
                        required
                        type="radio"
                        name="payment_option"
                        id="exampleRadios3"
                        defaultValue="option3"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios3"
                      >
                        Chuyển khoản qua ngân hàng
                      </label>
                      <p data-method="option3" className="payment-text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration.{" "}
                      </p>
                    </div>
                    <div className="custome-radio">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="payment_option"
                        id="exampleRadios4"
                        defaultValue="option4"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios4"
                      >
                        Thanh toán khi nhận hàng (COD)
                      </label>
                      <p data-method="option4" className="payment-text">
                        Please send your cheque to Store Name, Store Street,
                        Store Town, Store State / County, Store Postcode.
                      </p>
                    </div>
                    <div className="custome-radio">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="payment_option"
                        id="exampleRadios5"
                        defaultValue="option5"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios5"
                      >
                        Paypal
                      </label>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-around align-items-center">
                  <Link href="/" className="col">
                    <GrFormPrevious />
                    <span>Tiếp Tục mua sắm</span>
                  </Link>
                  <a href="#" className="btn btn-fill-out">
                    Đặt hàng
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container bg-light pb-3">
        <div className="billingAddress bg-white py-4">
          <div className="d-flex align-items-center billingTitle p-2">
            <MdLocationPin style={{ color: "#f79c43" }} />
            <h5 style={{ color: "#f79c43" }} className="m-0">
              Địa chỉ nhận hàng
            </h5>
          </div>
          <div className="billingInformation d-flex justify-content-between flex-wrap text-body">
            <form action="" className="d-flex ">
              <div className="container w-60">
                <div className="d-flex justify-content-between flex-wrap">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Họ và tên"
                  />
                  <input
                    className="form-control mt-3"
                    type="text"
                    placeholder="Số điện thoại"
                  />
                </div>
                <div className=" container d-flex flex-wrap px-0 mt-3">
                  <div className="form-group mb-3 w-100 " id="province">
                    {/* <label htmlFor="province"></label> */}
                    <div className="custom_select">
                      <select
                        className="form-control"
                        id="billingProvince"
                        onChange={handleProvinceChange}
                      >
                        <option value="" placeholder="">
                          Tỉnh thành
                        </option>
                        {provinces.map((province) => (
                          <option key={province.code} value={province.code}>
                            {province.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div
                    className="form-group mb-3 w-100"
                    id="city"
                    onChange={handleDistrictChange}
                    disabled={!provinces.length}
                  >
                    {/* <label htmlFor="city"></label> */}
                    <div className="custom_select">
                      <select
                        className="form-control"
                        id="billingCity"
                        onChange={handleDistrictChange}
                      >
                        <option value="">Quận, huyện</option>
                        {districts.map((district) => (
                          <option key={district.code} value={district.code}>
                            {district.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div
                    className="form-group mb-3 w-100"
                    id="district"
                    disabled={!districts.length || !provinces.length}
                  >
                    {/* <label htmlFor="district"></label> */}
                    <div className="custom_select">
                      <select className="form-control" id="billingDistrict">
                        <option value="">Phường, xã</option>
                        {ward.map((district) => (
                          <option key={district.code} value={district.code}>
                            {district.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Địa chỉ cụ thể"
                  />
                </div>
              </div>
              <div className="form-group w-50 ">
                <textarea
                  rows={14}
                  className="form-control"
                  placeholder="Ghi chú (tuỳ chọn)"
                  defaultValue={""}
                />
              </div>
            </form>
          </div>
        </div>

        <div className={`${classes.tableProduct} billingDetail bg-white mt-3 pt-3`}>
          <div className="text-body">
            <table className="table">
              <thead>
                <tr className="">
                  <th className="product-name">SẢN PHẨM</th>
                  <th></th>
                  <th className="product-price text-center">GIÁ</th>
                  <th className="product-quantity text-center">SỐ LƯỢNG</th>
                  <th className="product-subtotal text-center">TỔNG CỘNG</th>
                  <th className="product-remove"></th>
                </tr>
              </thead>
              <tbody>
                {products.map((item, index) => (
                  <ProductCheckout
                    key={new Date().getTime() + Math.random()}
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    amount={item.amount}
                    sku={item.sku}
                    handleQuantityChange={(newQuantity) =>
                      handleQuantityChange(item.id, newQuantity)
                    }
                  />
                ))}
              </tbody>
            </table>
            <div className="container">
              <div className="d-flex justify-content-end me-5">
                <p className="me-5">
                  Tổng thanh toán ({checkoutAmount} sản phẩm):
                </p>
                <p style={{ color: "#f79c43" }}> {formattedTotalCheckout} </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white mt-3 ">
          <div className="heading_s1 p-2">
            <h4 className="w-100 ">Phương thức thanh toán</h4>
          </div>
          <div className="d-flex pb-3">
            <div className="d-grid ms-2 col-6">
              <div className="payment_option">
                <div className="custome-radio">
                  <input
                    className="form-check-input"
                    required
                    type="radio"
                    name="payment_option"
                    id="exampleRadios3"
                    defaultValue="option3"
                    defaultChecked
                  />
                  <label
                    className="form-check-label text-muted"
                    htmlFor="exampleRadios3"
                  >
                    Chuyển khoản qua ngân hàng
                  </label>

                  <div>
                    Chuyển khoản vào STK: 123456789 <br />
                    Ngân Hàng :
                  </div>
                  {/* <p data-method="option3" className="payment-text">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration.{" "}
                      </p> */}
                </div>
                <div className="custome-radio">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="payment_option"
                    id="exampleRadios4"
                    defaultValue="option4"
                  />
                  <label
                    className="form-check-label text-muted"
                    htmlFor="exampleRadios4"
                  >
                    Thanh toán khi nhận hàng (COD)
                  </label>
                  {/* <p data-method="option4" className="payment-text">
                        Please send your cheque to Store Name, Store Street,
                        Store Town, Store State / County, Store Postcode.
                      </p> */}
                </div>
                {/* <div className="custome-radio">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="payment_option"
                        id="exampleRadios5"
                        defaultValue="option5"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios5"
                      >
                        Paypal
                      </label>
                    </div> */}
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center col-6">
              <Link href="#" className="btn btn-fill-out">
                Đặt hàng
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutForm;
