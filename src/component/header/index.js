import React from "react";
import { Carousel } from "react-bootstrap";
import "../../assest/css/header.css";
import banner1 from "../../assest/image/New Image/d19d0bb3ab9111cf488048.jpg";
import banner2 from "../../assest/image/New Image/42981680f340491e105153.jpg";
import banner3 from "../../assest/image/New Image/c8511c7fbc5d06035f4c28.jpg";
import banner4 from "../../assest/image/New Image/lam.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Header = () => {
  return (
    <div className="slider-container">
      <Carousel
        interval={10000}
        controls={true}
        indicators={true}
        pause={false}
        prevIcon={
          <span className="custom-prev-icon">
            <FaAngleLeft />
          </span>
        }
        nextIcon={
          <span className="custom-next-icon">
            <FaAngleRight />
          </span>
        }
      >
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="Slide 1" />
          <Carousel.Caption className="slider-caption text-center">
            <h2 className="slider-title">A Păng</h2>
            <h2 className="slider-subtitle">GLAMPING</h2>
            <div className="slider-buttons d-flex justify-content-center">
              <button
                className="btn btn-booking me-2"
                onClick={() =>
                  window.open("https://zalo.me/0344038365", "_blank")
                }
              >
                Đặt Lịch
              </button>
              <button
                className="btn btn-contact"
                onClick={() =>
                  window.open("https://zalo.me/0344038365", "_blank")
                }
              >
                Liên Hệ
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Slide 2" />
          <Carousel.Caption className="slider-caption text-center">
            <h2 className="slider-title">A Păng</h2>
            <h2 className="slider-subtitle">ĐÔNG GIANG</h2>
            <div className="slider-buttons d-flex justify-content-center">
              <button
                className="btn btn-booking me-2"
                onClick={() =>
                  window.open("https://zalo.me/0344038365", "_blank")
                }
              >
                Đặt Lịch
              </button>
              <button
                className="btn btn-contact"
                onClick={() =>
                  window.open("https://zalo.me/0344038365", "_blank")
                }
              >
                Liên Hệ
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Slide 3" />
          <Carousel.Caption className="slider-caption text-center">
            <h2 className="slider-title">A Păng</h2>
            <h2 className="slider-subtitle">VIỆT NAM</h2>
            <div className="slider-buttons d-flex justify-content-center">
              <button
                className="btn btn-booking me-2"
                onClick={() =>
                  window.open("https://zalo.me/0344038365", "_blank")
                }
              >
                Đặt Lịch
              </button>
              <button
                className="btn btn-contact"
                onClick={() =>
                  window.open("https://zalo.me/0344038365", "_blank")
                }
              >
                Liên Hệ
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={banner4} alt="Slide 4" />
          <Carousel.Caption className="slider-caption text-center">
            <h2 className="slider-title">A Păng</h2>
            <h2 className="slider-subtitle">FOOD</h2>
            <div className="slider-buttons d-flex justify-content-center">
              <button
                className="btn btn-booking me-2"
                onClick={() =>
                  window.open("https://zalo.me/0344038365", "_blank")
                }
              >
                Đặt Lịch{" "}
              </button>
              <button
                className="btn btn-contact"
                onClick={() =>
                  window.open("https://zalo.me/0344038365", "_blank")
                }
              >
                Liên Hệ
              </button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Header;
