"use client";
import Image from "next/image";
import Styles from "../productCard/ProductCard.module.css";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/reducers/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import slugify from "slugify";

const notify = () => {
  toast.success("Thêm vào giỏ hàng thành công!!", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
};

const formatPrice = (price) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const ProductList = ({
  productData,
  showProductActionBox,
  showSaleOfprice,
}) => {
  const dispatch = useDispatch();

  // const {  attribute :  {p, imageUrl, title, price, salePercent, rating, del, description, rating_num} } = productData;
  return (
    <div className={Styles.overall}>
      <ToastContainer />
      <div className="product m-2" style={{ maxHeight: "8rem" }}>
        <span className="pr_flash">New</span>
        <div className="product_img text-center">
          <div className={Styles.img_container}>
            <Link href={`/product/${productData.code}`}>
              <div className={Styles.img1}>
                <img src={productData.picUrl} alt={productData.name} />
              </div>
            </Link>
            {/* {showProductActionBox && (
              <div className="product_action_box">
                <ul className="list_none pr_action_btn">
                  <li className="add-to-cart">
                    <Link href="/">
                      <i
                        className="icon-basket-loaded"
                        onClick={() => {
                          notify();
                        }}
                      />{" "}
                      Add To Cart
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="popup-ajax">
                      <i className="icon-shuffle" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="popup-ajax">
                      <i className="icon-magnifier-add" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="icon-heart" />
                    </Link>
                  </li>
                </ul>
              </div>
            )} */}
          </div>
        </div>
        <div className="product_info " style={{ maxHeight: "4.5rem" }}>
          <div className={Styles.downClass}>
            <Link href={`/product/${productData.code}`}>
              <div className={Styles.productTitle}>
                <h6
                  className="product_title"
                  style={{ color: "#292B2C", textDecoration: "none" }}
                >
                  <Link
                    href={`/product/${productData.code}`}
                    style={{ color: "#292B2C", textDecoration: "none" }}
                  >
                    {productData.name}
                  </Link>
                </h6>
              </div>

              <div className={Styles.desSize}>
                <div className="pr_desc d-block">
                  <div className={Styles.overF}>
                    <p>{productData.description}</p>
                  </div>
                </div>
              </div>

              <div className="product_price">
                <div className="">
                  <span className="price">
                    {formatPrice(productData.sellingPrice)} VND
                  </span>
                  <br />

                  {/* {productData.orginal_price && (
                  <>
                    <div>
                      <del>{productData.orginal_price} VND </del>
                    </div>
                    <div className="on_sale">
                      <span>{productData.salePercent} Off</span>
                    </div>
                  </>
                )} */}

                  {showSaleOfprice && (
                    <del className="">
                      {formatPrice(
                        productData.minPrice !== null
                          ? productData.minPrice
                          : productData.sellingPrice
                      )}{" "}
                      VND
                    </del>
                  )}
                </div>
                <div className="on_sale">
                  {showSaleOfprice && (
                    <span>{productData.sellingPrice} Off</span>
                    // <span>{product.minPrice !== Infinity ? product.minPrice : product.sellingPrice}</span>
                  )}
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
