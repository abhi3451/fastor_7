import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Rest.css";
import { BiSolidOffer, BiSolidShareAlt } from "react-icons/bi";
import { MdArrowBack, MdArrowBackIos } from "react-icons/md";

const RestaSingle = () => {
  const location = useLocation();
  const { id, RData } = location.state;
  const restaurant = RData.find((e) => e.restaurant_id === id);
  const navigate = useNavigate();

  // Create a ref for the fastor logo image
  const fastorLogoRef = useRef(null);

  if (!restaurant) {
    return <div>Restaurant not found</div>;
  }

  const shareRestaurantImage = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Restaurant Image",
          text: restaurant.restaurant_name,
          url: restaurant.images[0].url,
        });
        console.log("Image shared successfully");
      } catch (error) {
        console.error("Error sharing image:", error);
      }
    } else {
      console.log("Web Share API is not supported");
    }
  };

  // Function to handle drag-and-drop
  const handleDragStart = (e) => {
    e.dataTransfer.setData("text/plain", "fastor-logo");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    if (data === "fastor-logo") {
      fastorLogoRef.current.style.left = e.clientX + "px";
      fastorLogoRef.current.style.top = e.clientY + "px";
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className="resta-single-container"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <div className="image-container">
        <div className="logo-overlay">
          <button
            className="IconContainter"
            onClick={() => {
              navigate("/restaurant");
            }}
          >
            <MdArrowBack />
          </button>

          <img
            src={restaurant.images[0].url}
            className="restaurant-image"
            alt={restaurant.restaurant_name}
          />
        </div>

        <img
          src="/fastor.png"
          className="fastor-logo"
          alt="Fastor Logo"
          ref={fastorLogoRef}
          draggable="true"
          onDragStart={handleDragStart}
        />
      </div>
      <button onClick={shareRestaurantImage} className="share-button">
        <BiSolidShareAlt />
      </button>

      <div className="DetailsContainer">
        <div className="restaurant-name">{restaurant.restaurant_name}</div>
        <div className="address">
          {restaurant.address_complete && restaurant.address_complete !== "null"
            ? restaurant.address_complete
            : restaurant.location && restaurant.location.location_address_2
            ? restaurant.location.location_address_2
            : ""}
        </div>
        <div className="Rating">
          <BiSolidOffer /> 4 Offers trending
        </div>
        <div className="description">
          Our delicate vanilla cake swirled with chocolate and filled with mocha
          chocolate chip cream and a layer of dark chocolate ganache
        </div>
      </div>
    </div>
  );
};

export default RestaSingle;
