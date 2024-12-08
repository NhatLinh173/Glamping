import React from "react";
import { Carousel } from "react-bootstrap";
import "../../assest/css/discount.css";
import banner1 from "../../assest/image/New Image/d486d29037508d0ed44154.jpg";
const Discount = () => {
  return (
    <div className="slider-container-discount">
      <Carousel
        interval={10000}
        controls={true}
        indicators={true}
        pause={false}
      >
        <Carousel.Item indicators={true}>
          <img className="d-block w-100" src={banner1} />
          <Carousel.Caption className="slider-caption-discount">
            <h2 className="slider-title-discount">Ưu Đãi Giảm 10%</h2>
            <h2 className="slider-subtitle-discount">
              Cho những khách hàng đăng ký đầu tiên hoặc quay lại sau lần 3
            </h2>
            <div className="slider-buttons">
              <button
                className="btn btn-booking-discount"
                onClick={() =>
                  window.open("https://zalo.me/0344038365", "_blank")
                }
              >
                Đặt Lịch
              </button>
              <button
                className="btn btn-contact-discount"
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
export default Discount;
