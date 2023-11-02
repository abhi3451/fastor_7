import React from "react";
import styled from "styled-components";
import { IoMdWallet } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import "./ResHead.css";

const RestaurantHeader = () => {
  return (
    <div className="Container">
      <div className="Header">
        Pre order from
        <b>Saffron, Ahmedabad</b>
      </div>
      <div className="FlexContainer">
        <div className="NameContainer">
          <div className="name">Abhishek</div>
          <div>Let's explore this evening</div>
        </div>
        <div className="FlexContainer" style={{ marginInline: "0.5rem" }}>
          <div className="OfferContainer">
            <div className="icon gradient1">
              <i className="bi-solid-offer icon">
                <BiSolidOffer />
              </i>
            </div>
            Offers
          </div>
          <div className="OfferContainer">
            <div className="OfferContainer">
              <div className="icon gradient2">
                <i className="io-md-wallet icon" />
                <IoMdWallet />
              </div>
              Wallet
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RestaurantHeader;
