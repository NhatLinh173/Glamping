import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import "../../assest/css/footer.css"; // Đảm bảo đường dẫn CSS đúng
import logo2 from "../../assest/image/A_Pang_glamping__9_-removebg.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>THÔNG TIN</h4>
          <ul>
            <li>Hoạt động</li>
            <li>Đường đi</li>
            <li>Lưu trú qua đêm</li>
            <li>Thuê vật dụng</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>GIỚI THIỆU</h4>
          <ul>
            <li>Về chúng tôi</li>
            <li>Tin tức & Sự kiện</li>
            <li>Các dịch vụ</li>
            <li>Công ty</li>
          </ul>
        </div>
        <div className="footer-logo">
          <img src={logo2} alt="RocRach Logo" />
        </div>
        <div className="footer-column">
          <h4>BOOKING</h4>
          <ul>
            <li>Các loại trại</li>
            <li>Đánh giá</li>
            <li>Thư viện ảnh</li>
            <li>Đặt lịch</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>HOẠT ĐỘNG</h4>
          <ul>
            <li>Đốt lửa trại</li>
            <li>Tắm suối</li>
            <li>Câu cá</li>
            <li>Check in</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright 2024 © A Păng Glamping</p>
      </div>
      <div className="floating-buttons">
        <div className="zalo-btn shake-animation">
          <SiZalo />
        </div>
        <div className="phone-btn shake-animation">
          <FaPhoneAlt />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
