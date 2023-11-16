import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axiosInstance from "../../utils/axiosClient";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import OrderItem from "../../components/Order/OrderItem";
import Link from "next/link";
import classes from "../../styles/Cart.module.css";
const OrderIdPage = () => {
  const router = useRouter();

  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOrder = async () => {
      const res = await axiosInstance.get(
        `/users/orders/${router.query.orderId}`
      );
      console.log(res);
      setOrder(res);
      setLoading(true);
    };

    fetchOrder();
  }, []);

  if (!loading) {
    return <div>...Loading</div>;
  }

  return (
    <div>
      <BreadCrumb
        title="Chi tiết đơn hàng"
        descriptionTitle="Chi tiết đơn hàng của bạn"
        middlePath="Chi tiết đơn hàng"
      />
      {order.productList.length > 0 ? (
        <>
          <div className="main_content">
            <div className="section">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="table-responsive shop_cart_table">
                      <table className="table">
                        <thead>
                          <tr className="border-top border-bottom border-dark">
                            <th className="product-name">Tên sản phẩm</th>
                            <th className={`product-price ${classes.paddingRight}`}>Giá tiền</th>
                          </tr>
                        </thead>
                        <tbody>
                          {order.productList.map((item, index) => (
                            <OrderItem
                              key={index}
                              name={item.name}
                              price={item.sellingPrice}
                            />
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <div className="col-12 ">
                      <div className="table-responsive shop_cart_table">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td class="product-name" data-title="Product">
                                <p class="mt-4 m-1">
                                  <p class="CartPage_name__5cAyN">
                                    Trạng thái đơn hàng{" "}
                                  </p>
                                </p>
                              </td>
                              <td class="product-subtotal" data-title="Total">
                                <div class="mt-4 m-1 ">
                                  <p>
                                    {order.orderStatus === "PENDING" ? (
                                      <div className="pl-4">Chờ xử lý</div>
                                    ) : (
                                      <div>Đã Giao</div>
                                    )}
                                  </p>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td class="product-name" data-title="Product">
                                <p class="mt-4 m-1">
                                  <p class="CartPage_name__5cAyN">
                                    Loại đơn hàng{" "}
                                  </p>
                                </p>
                              </td>
                              <td class="product-subtotal" data-title="Total">
                                <div class="mt-4 m-1">
                                  <p>{order.orderType}</p>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td class="product-name" data-title="Product">
                                <p class="mt-4 m-1">
                                  <p class="CartPage_name__5cAyN">
                                    Hình thức thanh toán{" "}
                                  </p>
                                </p>
                              </td>
                              <td class="product-subtotal" data-title="Total">
                                <div class="mt-4 m-1">
                                  <p>
                                    {order.paymentType === "CASH" && (
                                      <div>Tiền mặt</div>
                                    )}
                                  </p>
                                </div>
                              </td>
                            </tr>
                            
                            <tr>
                              <td class="product-name" data-title="Product">
                                <p class="mt-4 m-1">
                                  <p class={`${classes.nameHiglight}`}>
                                   Tổng giá tiền{" "}
                                  </p>
                                </p>
                              </td>
                              <td class="product-subtotal" data-title="Total">
                                <div class="mt-4 m-1">
                                <p class={`${classes.nameHiglight}`}>
                                    {order.totalAmount}
                                  </p>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row bg-light py-2">
                  <div className="col-md-5 ms-2"></div>
                  <div className="col-md-6">
                    <div className="d-flex justify-content-end">
                      <p className="me-5"></p>
                    </div>
                    <div className="d-flex justify-content-end">
                      <div className="">
                        <Link
                          href="/"
                          className={`border-danger btn btn-outline-warning text-body btn-sm me-4 ${classes.btn}`}
                        >
                          Tiếp tục mua sắm
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="main_content">
            <div className="section">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="table-responsive shop_cart_table">
                      <table className="table">
                        <tfoot>
                          <tr>
                            <td colSpan={6} className="px-0 p-5">
                              <div className="row g-0 align-items-center">
                                <div className="col-lg-6 col-md-6 mb-3 mb-md-0 text-end">
                                  <p>Bạn Không có đơn hàng</p>
                                </div>
                                <div className="col-lg-6 col-md-6 mb-md-0 text-start  text-md-center">
                                  <button
                                    className={`border-danger btn btn-outline-warning text-body btn-sm ${classes.btn}`}
                                  >
                                    <Link href="/">Tiếp Tục mua sắm</Link>
                                  </button>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      ;
    </div>
  );
};

export default OrderIdPage;
