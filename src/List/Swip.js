import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  justifycontent: center;
  height: 12rem;

  margin-left: 0.25rem;
  overflow: hidden;
  border-radius: 1rem;
  font-weight: 600;
  background: ${(props) => props.color};
`;

const Swipe = () => {
  const restoData = useSelector((state) => state.restaurants.restData);

  let colorArr = [
    "#F2D3D9",
    "#E5D9D3",
    "#F9D3D9",
    "#E5D9D3",
    "#F9D3D9",
    "#E5D9D3",
    "#F9D3D9",
    "#E5D9D3",
  ];
  return (
    <div>
      <Swiper
        spaceBetween={12}
        centeredSlides={0}
        slidesPerView={2.5}
        lazy={true}
      >
        {restoData.map((e, i) => (
          <SwiperSlide key={i}>
            <Card color={colorArr[i] ? colorArr[i] : "#E8FFFF"}>
              <img src={e.images[0].url} style={{ height: "8rem" }} />
              <div
                style={{
                  marginBottom: "0.5rem",
                  height: "3.25rem",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    fontSize: "0.85rem",
                  }}
                >
                  {e.restaurant_name}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "grey",
                    fontWeight: "500",
                  }}
                >
                  {e.location && e.location.city_name}
                </div>
              </div>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swipe;
