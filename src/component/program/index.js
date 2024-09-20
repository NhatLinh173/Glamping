import React, { useState } from "react";
import { CiCircleChevDown } from "react-icons/ci"; // Thêm import cho icon
import "../../assest/css/program.css";

const ProgramRegistration = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  return (
    <div className="program-registration">
      <h1 className="title">
        <span>CHƯƠNG TRÌNH &</span> <br /> Đăng Ký
      </h1>

      <div className="accordion">
        <div className="accordion-item">
          <div
            className={`accordion-header ${
              activeSection === "menu-thuc-an" ? "active" : ""
            }`}
            onClick={() => toggleSection("menu-thuc-an")}
          >
            <h2>MENU THỨC ĂN</h2>
            <CiCircleChevDown
              className={`chevron ${
                activeSection === "menu-thuc-an" ? "active" : ""
              }`}
            />
          </div>
          {activeSection === "menu-thuc-an" && (
            <div className="accordion-content">
              Chúng tôi sẽ cung cấp cho bạn ẩm thực đặc sản vùng miền.
              <span> </span>
              <a href="/service">Bạn có thể tìm hiểu thêm tại đây</a>
            </div>
          )}
        </div>

        <div className="accordion-item">
          <div
            className={`accordion-header ${
              activeSection === "chuong-trinh-hang-ngay" ? "active" : ""
            }`}
            onClick={() => toggleSection("chuong-trinh-hang-ngay")}
          >
            <h2>CHƯƠNG TRÌNH HÀNG NGÀY</h2>
            <CiCircleChevDown
              className={`chevron ${
                activeSection === "chuong-trinh-hang-ngay" ? "active" : ""
              }`}
            />
          </div>
          {activeSection === "chuong-trinh-hang-ngay" && (
            <div className="accordion-content">
              Sẽ tạo cho bạn những chương trình, sinh hoạt tập thể cực kỳ hấp
              dẫn.
              <span> </span>
              <a href="/service">Bạn có thể tìm hiểu thêm tại đây</a>
            </div>
          )}
        </div>

        <div className="accordion-item">
          <div
            className={`accordion-header ${
              activeSection === "dat-lich-thanh-toan" ? "active" : ""
            }`}
            onClick={() => toggleSection("dat-lich-thanh-toan")}
          >
            <h2>ĐẶT LỊCH, THANH TOÁN</h2>
            <CiCircleChevDown
              className={`chevron ${
                activeSection === "dat-lich-thanh-toan" ? "active" : ""
              }`}
            />
          </div>
          {activeSection === "dat-lich-thanh-toan" && (
            <div className="accordion-content">
              Đặt lịch dễ dàng , thanh toán thuận tiện{" "}
              <a href="/service">Bạn có thể tìm hiểu thêm tại đây</a>
            </div>
          )}
        </div>

        <div className="accordion-item">
          <div
            className={`accordion-header ${
              activeSection === "huy-doi-lich-booking" ? "active" : ""
            }`}
            onClick={() => toggleSection("huy-doi-lich-booking")}
          >
            <h2>HUỶ, DỜI LỊCH BOOKING</h2>
            <CiCircleChevDown
              className={`chevron ${
                activeSection === "huy-doi-lich-booking" ? "active" : ""
              }`}
            />
          </div>
          {activeSection === "huy-doi-lich-booking" && (
            <div className="accordion-content">
              Các quy định về việc dời , hủy lịch tại đây{" "}
              <a href="/service">Bạn có thể tìm hiểu thêm tại đây</a>
            </div>
          )}
        </div>

        <div className="accordion-item">
          <div
            className={`accordion-header ${
              activeSection === "su-co-khac" ? "active" : ""
            }`}
            onClick={() => toggleSection("su-co-khac")}
          >
            <h2>SỰ CỐ KHÁC</h2>
            <CiCircleChevDown
              className={`chevron ${
                activeSection === "su-co-khac" ? "active" : ""
              }`}
            />
          </div>
          {activeSection === "su-co-khac" && (
            <div className="accordion-content">
              Nếu bạn gặp sự cố hay vấn đề gì hãy liên hệ trực tiếp với chúng
              tôi <a href="/contact">tại đây </a>{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgramRegistration;
