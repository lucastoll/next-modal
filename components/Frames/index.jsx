import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Wrapper = styled.div`
  overflow: hidden;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  /* Navigation lateral buttons */

  .swiper-button-next:after {
    display: none;
    position: fixed;
    margin-left: 1000px;
    color: white;
  }

  .swiper-button-prev:after {
    display: none;
    position: fixed;
    color: white;
    margin-right: 1000px;
  }

  @media screen and (min-width: 768px) {
    .swiper-button-next:after {
      display: block;
      position: fixed;
      margin-left: 100px;
      margin-bottom: 15px;
    }

    .swiper-button-prev:after {
      display: block;
      position: fixed;
      margin-right: 100px;
      margin-bottom: 15px;
    }
  }

  /* Slider dots / pagination */

  .swiper-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-bullets.swiper-pagination-horizontal,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    bottom: 135px;

    .swiper-pagination-bullet-active {
      background: white;
      opacity: 1 !important;
    }

    .swiper-pagination-bullet {
      background: #ffffff;
      opacity: 0.5;
    }
  }

  /* Remove li style because all the frames are li elements */

  li {
    list-style: none;
  }

  /* padding to be able to move absolute elements with overflow: hidden */

  .swiper-wrapper {
    padding-top: 20px;
    padding-bottom: 15px;
  }

  /* scrollbar at the bottom */

  .swiper-scrollbar {
    background: #ffffff;
    position: absolute;
    bottom: 0px;
  }

  /* a11y (acessibility) messages, enabled after using navigation with tab */

  .swiper-notification {
    color: white;
    position: fixed;
    margin-top: 3px;
    margin-left: 7px;
  }
`;
const Frame = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: black;
  border: 2px solid black;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`;

export default function Frames({ setVideo }) {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [width]);

  return (
    <Wrapper>
      <Container>
        {
          <div style={width < 768 ? { width: "330px" } : { width: "630px" }}>
            <Swiper
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              a11y={{
                firstSlideMessage: "Esse é o primeiro slide",
                nextSlideMessage: "Proximo slide",
                lastSlideMessage: "Esse é o ultimo slide",
              }}
              onInit={(swiper) => console.log("Swiper initialized!")}
              onReachEnd={() => console.log("Swiper end reached!")}
              onSlideChange={(swiper) => {
                console.log("Slide index changed!");
              }}
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              slidesPerView={width < 768 ? 3 : 6}
              spaceBetween={0}
              wrapperTag="ul"
            >
              {Array.from({ length: 10 }, (_, i) => (
                <SwiperSlide key={i} tag="li">
                  <Frame onClick={() => setVideo(i)}>
                    <img src={`https://picsum.photos/100?random=${i}`} />
                  </Frame>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        }
      </Container>
    </Wrapper>
  );
}
