import { useContext } from "react";
import WatchStoreContext from "../../context/WatchStorContext";
import "./cart.css";

const Cart = () => {
  const { cartInfo, removeFromCart, addToCart } = useContext(WatchStoreContext);
  return (
    <div className="cart">
      <h1 className="cart-title">Your Shopping Cart</h1>
      <div className="cart-wrapper">
        <div className="cart-items">
          {cartInfo.map((item) => (
            <div key={item.id} className="cart-item">
              <img
                src={`/Watches/${item.image}`}
                alt={item.title}
                className="cart-item-img"
              />
              <div className="cart-item-info">
                <div>
                  <div className="cart-item-Watch-title">
                    <b>Title: </b>
                    {item.title}
                  </div>
                  <div className="cart-item-author">
                    <b>Author: </b>
                    {item.author}
                  </div>
                </div>
                <div>
                  <div className="cart-item-quantity">
                    <button
                      onClick={() =>
                        addToCart(item, parseInt(item.quantity) + 1)
                      }
                      className="bi bi-plus-lg"
                    ></button>
                    <b>{item.quantity}</b>
                    <button
                      disabled={item.quantity <= 1}
                      onClick={() =>
                        addToCart(item, parseInt(item.quantity) - 1)
                      }
                      className="bi bi-dash-lg"
                    ></button>
                  </div>
                  <div className="cart-item-price">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                  <i
                    onClick={() => removeFromCart(item.id)}
                    className="bi bi-trash-fill"
                  ></i>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart-order-summary">
          <h5 className="order-summary-title">ORDER SUMMARY</h5>
          <div className="order-summary-item">
            <span>Subtotal</span>
            <span>
              $
              {cartInfo
                .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
                .toFixed(2)}
            </span>
          </div>
          <div className="order-summary-item">
            <span>Shipping Cost</span>
            <span>0</span>
          </div>

          <div className="order-summary-item">
            <strong>Total</strong>
            <span>
              $
              {cartInfo
                .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
                .toFixed(2)}
            </span>
          </div>
          <form className="order-summary-item">
            <strong>submit</strong>
            <span>
              <button className="checkoutbtn" type="submit">
                {" "}
                check out
              </button>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Cart;
