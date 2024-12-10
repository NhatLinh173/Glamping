import React, { useState } from "react";
import { CiCircleChevDown } from "react-icons/ci"; // Thêm import cho icon
import "../../assest/css/program.css";
import Modal from "./Modal"; // Import modal component

const ProgramRegistration = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [modalKey, setModalKey] = useState("");

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const openModal = (content, key) => {
    setModalContent(content);
    setModalKey(key);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false); // Đóng modal
  };

  const content = {
    chuongTrinhHangNgay: {
      description:
        "Khi bạn đến với A Păng bạn sẽ có được những trải nghiệm thú vị",
      activities: [
        "Thăm quan khu cắm trại",
        "Tắm suối",
        "Tham gia các hoạt động trải nghiệm văn hóa - dân tộc",
        "Thưởng thức món ăn đặc sản tại đây",
        "Đốt lửa trại, ca múa hát tập thể",
      ],
      images: [
        require("../../assest/image/New Image/e3c75fe9ffcb45951cda30.jpg"),
        require("../../assest/image/New Image/f63c9d2829e893b6caf9.jpg"),
        require("../../assest/image/New Image/f2e8c13870f8caa693e9.jpg"),
      ],
    },
    datLichThanhToan: {
      description: "Nếu bạn quan tâm bạn có thể liên hệ tại đây",
      activities: [
        "Bạn có thể lựa chọn ngày giờ thích hợp , phù hợp với lịch trình của bạn",
        "Bạn có thể thanh toán 100% hoặc là đặt cọc 50% để có thể giữ chỗ",
        "Sau khi liên hệ đặt chỗ với nhân viên bên A Păng bạn chỉ cần đến đúng giờ và nhận chỗ đã đặt trước",
        "Khi đến với A Păng bạn chỉ cần chill và giải tỏa căng thẳng sau những giờ làm việc vất vả",
      ],
      images: [
        require("../../assest/image/New Image/4ac1f1ef51cdeb93b2dc31.jpg"),
        require("../../assest/image/New Image/974e216081423b1c625337.jpg"),
        require("../../assest/image/New Image/2f41d656339689c8d08755.jpg"),
      ],
    },
    huyDoiLichBooking: {
      description:
        "Nếu bạn muốn hủy hoặc dời lịch, hãy tham khảo các chính sách hủy, dời và làm theo hướng dẫn để đảm bảo quyền lợi của mình.",
      activities: [
        "Khi hủy lịch, bạn sẽ mất phí tùy theo thời gian hủy",
        "Dời lịch linh hoạt mà không mất phí",
        "Sau khi bạn liên hệ với nhân viên để hủy hoặc dời lịch, bạn sẽ nhận được thông báo xác nhận",
        "Nếu bạn muốn hủy thì cần liên hệ với A Păng sớm nhất để tránh mất nhiều phí",
        "Nếu bạn hủy trước 48h bạn sẽ không mất phí , trước 24h và sau 12h bạn sẽ mất 30% của phí cọc",
        "Nếu bạn muốn dời lịch thì cần liên hệ với A Păng trước 1 ngày so với ngày đặt lịch",
        "Vui lòng đọc kỹ để tránh những rắc rối không đáng có",
        "A Păng xin cảm ơn",
      ],
    },
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
              <a href="/menu-food">Bạn có thể tìm hiểu thêm tại đây</a>
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
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  openModal(content.chuongTrinhHangNgay, "chuongTrinhHangNgay");
                }}
              >
                Bạn có thể tìm hiểu thêm tại đây
              </a>
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
              Đặt lịch dễ dàng, thanh toán thuận tiện
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  openModal(content.datLichThanhToan, "datLichThanhToan"); // Mở modal cho phần "Đặt lịch, thanh toán"
                }}
              >
                Bạn có thể tìm hiểu thêm tại đây
              </a>
            </div>
          )}
        </div>

        {/* Hủy, dời lịch booking */}
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
              Các quy định về việc dời, hủy lịch tại đây
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  openModal(content.huyDoiLichBooking, "huyDoiLichBooking"); // Mở modal cho phần "Hủy, dời lịch booking"
                }}
              >
                Bạn có thể tìm hiểu thêm tại đây
              </a>
            </div>
          )}
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        content={modalContent}
        key={modalKey}
      />
    </div>
  );
};

export default ProgramRegistration;
