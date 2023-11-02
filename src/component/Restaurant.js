import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addData } from "../store/RestaurantsSlice";
import "../styles/Rpage.css";
import { BiSolidOffer } from "react-icons/bi";
import { AiFillStar } from "react-icons/ai";

const SkeletonLoader = () => {
  return (
    <div className="Card skeleton-card">
      <div className="img-container skeleton-img"></div>
      <div className="DetailsContainer skeleton-details">
        <div className="restaurant-name skeleton-text"></div>
        <div className="restaurant-address skeleton-text"></div>
        <div className="offer-info skeleton-text"></div>
        <div className="FlexBox skeleton-flex">
          <div className="rating skeleton-text"></div>
          <div className="cost skeleton-text"></div>
        </div>
      </div>
    </div>
  );
};

const Restaurant = () => {
  const toke_n = localStorage.getItem("token");

  const RData = useSelector((state) => state.restaurants.restData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://staging.fastor.in/v1/m/restaurant?city_id=118&&",
        {
          headers: {
            Authorization: "Bearer " + toke_n,
          },
        }
      );

      if (res.status === 200) {
        dispatch(addData(res.data));
        setLoading(false);
      }
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleImage = (id) => {
    navigate(`/restaurant/${id}`, { state: { RData: RData, id: id } });
  };

  return (
    <div className="Conter">
      <div className="heading">Popular Ones</div>

      <div className="ListContainer">
        {loading ? (
          <>
            <SkeletonLoader />
            <SkeletonLoader />
            <SkeletonLoader />
          </>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : (
          RData.map((e) => (
            <div
              className="Card"
              onClick={() => {
                handleImage(e.restaurant_id);
              }}
              key={e.restaurant_id}
            >
              <div className="img-container">
                <img src={e.images[0].url} alt={e.restaurant_name} />
              </div>
              <div className="Details-Container">
                <div className="restaurant-name">{e.restaurant_name}</div>
                <div className="restaurant-address">
                  {e.address_complete && e.address_complete !== "null"
                    ? e.address_complete
                    : e.location && e.location.location_address_2
                    ? e.location.location_address_2
                    : ""}
                </div>
                <div className="offer-info">
                  <BiSolidOffer /> 4 Offers trending
                </div>

                <div className="FlexBox">
                  <div className="rating">
                    <AiFillStar /> {e.rating.restaurant_avg_rating}
                  </div>
                  <div className="cost">$ 200</div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Restaurant;
