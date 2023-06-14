import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="Footer__container">
      <div className="Footer__information">
        <div className="Hotline__box">
          <h4>ONLINE SHOPPING</h4>
          <h5>0938.188.188</h5>
          <h5>1900.686.999</h5>
          <p>sales.online@speak.com</p>
        </div>
        <div className="Hotline__contact">
          <h4>HOTLINE COMMENT</h4>
          <h5>0938.168.168</h5>
          <p>customercare@speak.com</p>
        </div>
        <div className="Footer__info">
          <h4>INFO</h4>
          <p>About us</p>
          <p>Contact with us</p>
          <p>Partner</p>
          <p>Recuire</p>
        </div>
        <div className="Footer__policy">
          <h4>POLICY</h4>
          <p>Exchange policy</p>
          <p>Warranty policy</p>
          <p>Privacy policy</p>
          <p>Refund policy</p>
        </div>
        <div className="Footer__FAQ">
          <h4>FAQ</h4>
          <p>Payment and shipping</p>
          <p>Size guide</p>
          <p>Check order infomation</p>
          <p>Frequently asked questions</p>
        </div>
      </div>
      <div className="Footer__input">
        <div className="Footer__voucher">
          <h3>Sign up for promotions</h3>
          <input placeholder="Enter your email"></input>
          <button>SEND</button>
        </div>
        <div className="Footer__order">
          <h3>Look up your order</h3>
          <input placeholder="Enter your mobile phone or your order id"></input>
          <button>SEND</button>
        </div>
      </div>
      <div className="Footer__copyright">
        <h5>SPEAK GROUP MANUFACTURING TRADING & SERVICE CO., LTD</h5>
        <p>
          Address: 68-70 Nguyen Trai, Thanh Xuan Distric, Ha Noi/ Phone number:
          0938188188/ BR no:41C8013931 date 09/03/2011, the place of issuing the
          People's Committee of Thanh Xuan District{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
