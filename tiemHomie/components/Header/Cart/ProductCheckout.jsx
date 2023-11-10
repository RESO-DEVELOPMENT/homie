import React, { useEffect, useState } from "react";
import Link from "next/link";
import { TbEdit } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";
import {
  updateTotal,
  removeItem,
  incrementAmount,
  decrementAmount,
} from "@/redux/reducers/cartSlice";
import classes from "./CartPage.module.css";
import { addProduct, removeProduct } from "@/redux/reducers/checkoutSlice";

const ProductCheckout = ({
  name,
  sellingPrice,
  picUrl,
  amount,
  type,
  parentProductId,
  categoryCode,
  productInMenuId,
  handleQuantityChange,
  sku,
}) => {
  const { cartItems, total } = useSelector((store) => store.cart);
  const { products: checkoutProducts,checkoutAmount, totalPriceCheckout } = useSelector((store) => store.checkout);
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(
    checkoutProducts.some((p) => p.sku === sku)
  );
  const handleCheckboxChange = (event) => {
    const checked = event.target.checked;
    setIsChecked(checked);

    if (checked) {
      dispatch(
        addProduct({
          product: {
            productInMenuId,
            picUrl,
            name,
            sellingPrice,
            amount,
            sku ,
            type,
            categoryCode,
            parentProductId,
          },
        })
      );
    } else {
      dispatch(removeProduct({ productId: sku }));
    }
  };

  useEffect(() => {
    dispatch(updateTotal());
  }, [cartItems, useDispatch()]);

  const formattedPrice =
    sellingPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";
  const totalProductPrice = sellingPrice * amount;
  const formatTotalProductPrice =
    totalProductPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";
  return (
    <tr>
      <td className="product-thumbnail text-start">
        <Link href="#">
          <img
            src={picUrl}
            alt={name}
            style={{ width: "60%", height: "55%" }}
          />
        </Link>
      </td>
      <td className="product-name" data-title="Product">
        <div className="m-1">
          <Link className={classes.name} href="#">
            {name}
          </Link>
        </div>
        <div className="m-2">
          <h6>SKU: {sku} </h6>
        </div>
      </td>
      <td className="product-price text-center" data-title="Price">
        {formattedPrice}
      </td>
      <td className="product-quantity text-center" data-title="Quantity">
        {amount}
      </td>
      <td className="product-subtotal text-center px-0" data-title="Total">
        {checkoutAmount}
      </td>
    </tr>
  );
};

export default ProductCheckout;
