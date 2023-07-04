import React, { useEffect } from "react";
import style from "./Cart.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import Product from "./Product";
import { updateTotal, updateQuantity } from "@/redux/reducers/cartSlice";
import Link from "next/link";

function Cart({ handleCartClose }) {
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  var formattedTotal = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";
  let totalQuantity = 0;
  cartItems.forEach((item) => {
    totalQuantity += item.attribute.amount;
  });

  useEffect(() => {
    dispatch(updateTotal());
  }, [cartItems, dispatch]);


  const handleQuantityChange = (productName, newQuantity) => {
    dispatch(updateQuantity({ productName, quantity: newQuantity }));
  };

  return (
    <div>
      <div className={style.cartHeading}>
        <h4 className={style.cartTitle}>Giỏ hàng</h4>
        <div className={style.cartBtnClose} onClick={handleCartClose}>
          <AiOutlineClose />
        </div>
      </div>
      <div className={style.drawerInner}>
        <div className={style.cartSideContainer}>
          <form action="">
            {amount > 0 ? (
              <>
              <div className={style.cartBody}>
                {cartItems ? (
                  cartItems.map((item) => (
                    <Product
                      key={new Date().getTime() + Math.random()}
                      name={item.name}
                      price={item.sellingPrice}
                      image={item.picUrl}
                      amount={item.attribute.amount}
                      sku={item.code}
                      handleQuantityChange={(newQuantity) => handleQuantityChange(item.id, newQuantity)}
                    />
                    
                  ))
                ) : (
                  <p>Loading products...</p>
                )}
              </div>
              <div className={style.cartFooter}>
              <div className={style.subTotal}>
                <div>Tổng tiền:</div>
                <div>
                  <span className={style.totalPrice}>{formattedTotal}</span>
                  {/* <span className={style.totalQuantity}>{totalQuantity}</span> */}
                </div>
              </div>
              <div className={style.checkoutBtn}>
                <button>
                  <Link href="/cart">Xem giỏ hàng</Link>
                </button>
              </div>
            </div>

              </>
            ) : (
              <div className={style.cartBody}>Giỏ hàng của bạn không có gì</div>
            )}
            
          </form>
        </div>
      </div>
    </div>
  );
}

export default Cart;
