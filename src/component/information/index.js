import React from "react";
import banner1 from "../../assest/image/New Image/56577a7eda5c6002394d35.jpg";
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import "../../assest/css/infomation.css";
const Information = () => {
  return (
    <div className="intro-container">
      <div className="col medium-6 small-12 large-6">
        <h2 className="intro-title">A PĂNG</h2>
        <span className="intro-subtitle">Glamping !</span>
        <p className="intro-subject">
          Glamping – Trào lưu nghỉ dưỡng siêu hot vẫn chưa có dấu hiệu hạ nhiệt.
          Đã có mặt tại Đà Nẵng.
          <br /> Đây là một hình thức nghỉ dưỡng được phát triển thêm từ
          Camping. Cùng được thực hiện tại những địa điểm gần gũi với thiên
          nhiên trong không gian xanh mát, dễ chịu nhưng Glamping hướng tới một
          phong cách “sang chảnh” hơn Camping.
        </p>
        <div className="intro-icon">
          <a href="https://www.facebook.com/ApangGlamping">
            <CiFacebook className="icon icon-face" />
          </a>
          <a href="https://www.instagram.com/apangglamping?fbclid=IwY2xjawFbsjJleHRuA2FlbQIxMAABHUGJofAvo-_db9FxP2X_4oy7WYT7oefXl9g7NJkxUoCEnLKQg9rA0p7eaQ_aem_IwkCB2tK4-rOh4fEkxnPaA">
            <CiInstagram className="icon icon-ins" />
          </a>
        </div>
        <div className="intro-learn-more">
          <a href="/intro" className="learn-more-info">
            Tìm hiều thêm <FaAngleRight />
          </a>
        </div>
      </div>

      <div className="col medium-6 small-12 large-6">
        <img src={banner1}></img>
      </div>
    </div>
  );
};

export default Information;
