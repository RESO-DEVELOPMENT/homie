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

const ProductCardPage = ({
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
  const { products, total } = useSelector((store) => store.cart);
  const { products: checkoutProducts } = useSelector((store) => store.checkout);
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
            sku,
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
  }, [products, useDispatch()]);

  const formattedPrice =
  sellingPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";
  const totalProductPrice = sellingPrice * amount;
  const formatTotalProductPrice =
    totalProductPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";
  return (
    <tr>
      {/* <td className="product-thumbnail text-start">
        <input
          className="form-check-input"
          type="checkbox"
          id="check1"
          name="option1"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
      </td> */}
      <td className="product-thumbnail text-start">
        <Link href="#">
          <img src={picUrl} alt={name} />
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
        <div className="m-0">
          <p>
            <TbEdit></TbEdit>Edit
          </p>
        </div>
      </td>
      <td className="product-price" data-title="Price">
        {formattedPrice}
        {/* {price} */}
      </td>
      <td className="product-quantity" data-title="Quantity">
        <div className="quantity">
          <input
            type="button"
            defaultValue="-"
            className="minus p-0"
            // onClick={handleDecrease}
            onClick={() => {
              if (amount === 1) {
                dispatch(removeItem({ name }));
                return;
              }
              dispatch(decrementAmount({ name }));
            }}
          />
          <input
            type="text"
            name="quantity"
            value={amount}
            title="Qty"
            className="qty"
            size={4}
            onChange={(event) => handleQuantityChange(event.target.value)}
            readOnly
          />
          <input
            type="button"
            defaultValue="+"
            className="plus p-0"
            // onClick={handleIncrease}
            onClick={() => {
              dispatch(incrementAmount({ name }));
            }}
          />
        </div>
      </td>
      <td className="product-subtotal" data-title="Total">
        {formatTotalProductPrice}
      </td>
      <td className="product-remove" data-title="Remove">
        <Link href="#">
          <div
            className={classes.remove}
            onClick={() => {
              dispatch(removeItem({ name }));
            }}
          >
            <i className="ti-close" />
          </div>
        </Link>
      </td>
    </tr>
  );
};

export default ProductCardPage;
