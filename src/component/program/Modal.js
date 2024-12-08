import React from "react";
import "../../assest/css/modal.css";

const Modal = ({ isOpen, closeModal, content }) => {
  if (!isOpen) return null;

  const activities = Array.isArray(content.activities)
    ? content.activities
    : [];
  const images = Array.isArray(content.images) ? content.images : [];
  const isChuongTrinhHangNgay =
    content &&
    content.description ===
      "Khi bạn đến với A Păng bạn sẽ có được những trải nghiệm thú vị";
  const isDangKy =
    content &&
    content.description === "Nếu bạn quan tâm bạn có thể liên hệ tại đây";
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={closeModal}>
          X
        </button>
        <div className="modal-body">
          {/* Content Section */}
          <h2 className="modal-title">Thông Tin Chi Tiết</h2>
          <p className="modal-description">{content.description}</p>

          {/* Display images */}
          {images.length > 0 && (
            <div className="modal-images">
              {images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Experience ${index}`}
                  className="modal-image"
                />
              ))}
            </div>
          )}

          <ul className="modal-list">
            {activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
          {(isChuongTrinhHangNgay || isDangKy) && (
            <button
              className="register-btn"
              onClick={() =>
                window.open("https://zalo.me/0344038365", "_blank")
              }
            >
              Liên Hệ Đăng Ký
            </button>
          )}
          {!(isChuongTrinhHangNgay || isDangKy) && (
            <button
              className="register-btn"
              onClick={() =>
                window.open("https://zalo.me/0344038365", "_blank")
              }
            >
              Liên Hệ Hủy
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
