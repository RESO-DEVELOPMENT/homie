import React from "react";

import classes from "../Header/Cart/CartPage.module.css";
import Link from "next/link";

const OrderItem = ({ name, price }) => {
  //   const totalProduct = productList.reduce((total, product) => {
  //     return total + product.quantity;
  //   }, 0);

  // const totalProductPrice = totalAmount * amount;
  const formatTotalProductPrice =
    price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";
  return (
    <tr>
      <td className="product-name" data-title="Product">
        <div className={`mt-4 m-1 ${classes.paddingLeftItem} `} >
          <p className={classes.name}>{name}</p>
        </div>
      </td>

      <td className="product-subtotal" data-title="Total">
      <div className={`mt-4 m-1 ${classes.paddingLeftItem} `} >
          <p>{formatTotalProductPrice}</p>
        </div>
      </td>
    </tr>
  );
};

export default OrderItem;
