import React from "react";

import classes from "../Header/Cart/CartPage.module.css";

const OrderItem = ({
  totalAmount,
  orderId,
  invoiceId,
  orderStatus,
  productList,
  amount
}) => {
  const status = orderStatus === "PENDING" ? "Chờ xác nhận" : "Đang giao";
//   const totalProduct = productList.reduce((total, product) => {
//     return total + product.quantity; 
//   }, 0);
  console.log(productList)
  const totalProductPrice = totalAmount * amount;
  const formatTotalProductPrice =
    totalProductPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";
  return (
    <tr>
      <td className="product-invocedId" data-title="Product">
        <div className="m-4">
          <p className={classes.name}>{invoiceId}</p>
        </div>
      </td>

      <td className="product-quantity" data-title="Quantity">
        <p className={`${classes.name} mt-4`}>{amount}</p>
      </td>
      <td className="product-subtotal" data-title="Total">
        <div className="mt-4 m-1">
          <p>{formatTotalProductPrice}</p>
        </div>
      </td>
      <td className="product-status" data-title="Product">
        <div className="m-4">
          <p className={classes.name} href="#">
            {status}
          </p>
        </div>
      </td>
    </tr>
  );
};

export default OrderItem;
