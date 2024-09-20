import React from "react";
import banner1 from "../../assest/image/Roc-Rach-Glamping-Banner-4.jpg";
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
          <CiFacebook className="icon icon-face" />
          <CiInstagram className="icon icon-ins" />
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
