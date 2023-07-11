import React from "react";
import "./style.css";
const Cart = () => {
  return (
    <div className="Cart">
      <div className="cart_Wrapper">
        <div className="cart_details">
          <p className="title_p">WHAT IS YOUR & ORDER TYPE</p>
          <div className="toggle_button">
            <div className="toggle_left">
              <span>RESTAURENT</span>
            </div>
            <div className="toggle_right">
              <span>TAKEAWAY</span>
            </div>
          </div>
          <p className="title_p">PERSONAL DETAILS</p>
          <div className="personal_details">
            <span className="personal_details_text">Magesh, 9442497141 </span>
          </div>
          <p className="title_p">RESTAURENT</p>
          <div className="restaurent">
            <div className="icon_div">
              <img
                className="icon"
                src="https://burgerkinguat.in/static/media/dine-in-brown.ca8cce92.svg"
                alt=""
              />
            </div>
            <div className="text">
              <span className="restaurent_text">
                Stage 1, Salarpuria Plaza, Chinmaya Mission Hospital Rd,
                Indiranagar, Bengaluru, Karnataka 560038
              </span>
            </div>
          </div>
          <p className="title_p">CHOOSE PAYMENT MODE </p>
          <div className="payment_div">
            <div className="payment_top">
              <span className="payment_text1">PAY FOR ITEMS</span>
              <span className="payment_text">$ 209/-</span>
            </div>
            <div className="choose_payment">
              <div className="payment_left">
                <div>
                  <img
                    src="https://burgerkinguat.in/static/media/pay-online-restaurant.016ae34e.svg"
                    alt=""
                  />
                </div>
                <div className="Payment_method">
                  <span className="method">Pay Online</span>
                  <span className="method_desc">
                    Cards, NetBanking, UPIs,Wallets
                  </span>
                </div>
              </div>
              <div className="payment_right">
                <input type="radio" />
              </div>
            </div>
            <button className="Make_Payment_btn">Make Payment</button>
          </div>
        </div>
        <div className="your_cart">
          <p className="title_p">YOUR CART</p>
          <div className="items_div">
            <div className="row">
              <span>Bk Classic Chicken</span>
              <div className="counterBtn">
                <button className="addBtn">-</button>
                <span>5</span>
                <button className="addBtn">+</button>
              </div>
            </div>
            <div className="row">
              <span>Customise</span>
              <span>$29 /-</span>
            </div>
            <div className="row">
              <input
                className="spl_info"
                placeholder="Special instruction for your meals (Optional)...."
              ></input>
            </div>
            <div className="row">
              <div className="crown_card">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
                <span>Earn 104 BK Crown in this order1</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="offers">
              <span className="offer_text1">Offers</span>
              <div className="offer_text">
                <span className="select_promo_code">select promo code</span>
                <span className="offer_text1">view Offers</span>
              </div>
            </div>
          </div>
          <div className="amount_div">
            <div className="educate">
              <div className="educate_left">
                <input type="checkbox" />
                <span className="amt_title">
                  Educate a girl child with room to read
                </span>
              </div>
              <div className="educate_left">
                <span className="price">$2 /-</span>
              </div>
            </div>
            <div className="educate">
              <div className="educate_left">
                <span className="amt_title">Order Total</span>
              </div>
              <div className="educate_left">
                <span className="price">$20 /-</span>
              </div>
            </div>
            <div className="educate">
              <div className="educate_left">
                <span className="amt_title">Taxes and Charges</span>
              </div>
              <div className="educate_left">
                <span className="price">$1.03 /-</span>
              </div>
            </div>
            <span className="line"></span>
            <div className="total_amount">
              <span className="total_text">TOTAL</span>
              <span className="price_amount">$225 /-</span>
            </div>
            <span className="line"></span>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
