import React from "react";
import { Carousel } from "react-bootstrap";
import "../../assest/css/header.css";
import banner1 from "../../assest/image/Roc-Rach-Glamping-Banner-4.jpg";
import banner2 from "../../assest/image/Roc-Rach-Glamping-Banner-5.jpg";
import banner3 from "../../assest/image/Roc-Rach-Glamping-Banner-7.jpg";
import banner4 from "../../assest/image/Roc-Rach-Glamping-Banner-8.jpg";
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
        <Carousel.Item indicators={true}>
          <img className="d-block w-100" src={banner1} />
          <Carousel.Caption className="slider-caption">
            <h2 className="slider-title">A Păng</h2>
            <h2 className="slider-subtitle">GLAMPING</h2>
            <div className="slider-buttons">
              <button className="btn btn-booking">Đặt Lịch</button>
              <button className="btn btn-contact">Liên Hệ</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item indicators={true}>
          <img className="d-block w-100" src={banner2} />
          <Carousel.Caption className="slider-caption">
            <h2 className="slider-title">A Păng</h2>
            <h2 className="slider-subtitle">ĐÔNG GIANG</h2>
            <div className="slider-buttons">
              <button className="btn btn-booking">Đặt Lịch</button>
              <button className="btn btn-contact">Liên Hệ</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item indicators={true}>
          <img className="d-block w-100" src={banner3} />
          <Carousel.Caption className="slider-caption">
            <h2 className="slider-title">A Păng</h2>
            <h2 className="slider-subtitle">VIỆT NAM</h2>
            <div className="slider-buttons">
              <button className="btn btn-booking">Đặt Lịch</button>
              <button className="btn btn-contact">Liên Hệ</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item indicators={true}>
          <img className="d-block w-100" src={banner4} />
          <Carousel.Caption className="slider-caption">
            <h2 className="slider-title">A Păng</h2>
            <h2 className="slider-subtitle">FOOD</h2>
            <div className="slider-buttons">
              <button className="btn btn-booking">Đặt Lịch </button>
              <button className="btn btn-contact">Liên Hệ</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default Header;
