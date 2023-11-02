import React from "react";
import { useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styled from "styled-components";

const Card = styled.div`
  height: 10rem;
  margin-inline: 0.25rem;
  overflow: hidden;
  border-radius: 1rem;
  font-weight: 600;
  background: ${(props) => props.color};
`;

const Offers = () => {
  const image = [
    "https://blog.dineout-cdn.co.in/blog/wp-content/uploads/2021/03/17-march-BB-2.jpg",
  ];
  return (
    <div style={{ marginTop: "1.5rem" }}>
      <Swiper
        spaceBetween={12}
        centeredSlides={0}
        pagination={{ clickable: true }}
        slidesPerView={1}
        lazy={true}
      >
        {image &&
          image.map((e, i) => (
            <SwiperSlide key={i}>
              <Card>
                <img style={{ height: "10rem" }} src={e} />
              </Card>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Offers;
