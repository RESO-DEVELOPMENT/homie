import React, { useState } from "react";
import BreadCrumb from "../components/breadCrumb/BreadCrumb";
import classes from "../styles/Cart.module.css";
import Link from "next/link";

import useOrder from "../hooks/useOrder";
import OrderItem from "../components/Order/OrderItem";

const Order = () => {

  const { orders, loading } = useOrder();
  if (!loading) {
    return <div>...loading</div>;
  }

  return (
    <div>
      <BreadCrumb
        title="Đơn hàng"
        descriptionTitle="Đơn hàng của bạn"
        middlePath="Đơn hàng"
      />

      {orders.length > 0 ? (
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
                            <th className="product-invocedId">MÃ HÓA ĐƠN</th>
                            <th className="product-quantity">SỐ LƯỢNG SẢN PHẨM</th>
                            <th className="product-subtotal">TỔNG CỘNG</th>
                            <th className="product-status">Trạng thái</th>
                          </tr>
                        </thead>
                        <tbody>
                          {orders.map((item, index) => (
                            <OrderItem
                              totalAmount={item.totalAmount}
                              orderId={item.orderId}
                              invoiceId={item.invoiceId}
                              orderStatus={item.orderStatus}
                              productList={item.productList}
                              amount={item.productList.length}
                            />
                          ))}
                        </tbody>
                      </table>
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

export default Order;
