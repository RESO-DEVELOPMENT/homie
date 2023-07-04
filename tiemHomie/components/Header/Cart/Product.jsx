import { useDispatch } from 'react-redux';
import style from './Cart.module.css';
import { incrementAmount, decrementAmount, removeItem} from '@/redux/reducers/cartSlice';

const Product = ({ name, price, image, amount, handleQuantityChange}) => {
    const dispatch = useDispatch();

    var formattedPrice = price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "₫";

    

  return (
    <>
      <div className={style.cartRow}>
                <a href="#" title="">
                  <img src={image} alt={name} />
                </a>
                <div className={style.cartInfo}>
                  <div className={style.cartName}>
                    <a href="#" className={style.cartProductName}>
                      {name}
                    </a>
                    <span className={style.varientTitle}>Nâu</span>
                  </div>
                  <div className={style.flex}>
                    <div className="col col-6">
                      <label className={style.cartQuantity}>Số lượng</label>
                      <div className={style.inputGroupBtn}>
                        <button type="button" className={style.btnMinus}
                        onClick={() => {
                             if (amount === 1) {
                                dispatch(removeItem({name}));
                                return;
                             }
                                dispatch(decrementAmount({name}))}}>
                          {" "}
                          -{" "}
                        </button>
                        <input
                          type="text"
                          className={style.productQuantity}
                          value={amount}
                          onChange={(event) => handleQuantityChange(event.target.value)}
                          readOnly
                        />
                        <button type="button" className={style.btnPlus} 
                        onClick={() => {dispatch(incrementAmount({name}))}}>
                          {" "}
                          +{" "}
                        </button>
                      </div>
                    </div>
                    <div className={`${style.flexRight} col col-6`}>
                      <span className={style.productPrice}> {formattedPrice} </span>
                      <a href="#" className={style.btnRemove}
                       onClick={() => {dispatch(removeItem({name}))}}
                       >
                        Xoá
                      </a>
                    </div>
                  </div>
                  <div></div>
                </div>
        
        </div>
      </>
  )
}

export default Product
