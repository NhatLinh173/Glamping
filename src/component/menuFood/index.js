import React from "react";
import "../../assest/css/menuFood.css";
import food from "../../assest/image/New Image/DeWatermark.ai_1732511749223.png";
import food2 from "../../assest/image/New Image/unnamed (1).jpg";

const Menu = () => {
  return (
    <>
      <div className="menu-container">
        <div className="dinner-menu">
          <h3 className="title-menu">SET MENU ĂN TỐI</h3>
          <p className="menu-subtitle">(đã bao gồm trong giá vé)</p>
          <div className="img-food">
            <img src={food} alt="food" />
          </div>
          <div className="info-food">
            <span className="food-item">
              <p className="food-name-title">
                1/ Menu nướng đồ nướng:
                <span className="food-detail">
                  <p className="food-name">Thịt bò</p>
                  <p className="food-name">Thịt heo rừng/Thịt heo</p>
                  <p className="food-name">Hải sản</p>
                  <p className="food-name">Thịt gà</p>
                  <p className="food-name">Cá</p>
                  <p className="food-name">Ếch</p>
                  <p className="food-name">Combo rau củ</p>
                </span>
              </p>
              <p className="food-name-title">
                2/ Menu đồ ăn sẵn:
                <span className="food-detail">
                  <p className="food-name">Khai vị</p>
                  <p className="food-name">Xôi/Cơm lam</p>
                  <p className="food-name">Lẩu</p>
                </span>
              </p>
              <p className="food-name-title">
                3/ Đồ uống:
                <span className="food-detail">
                  <p className="food-name">Rượu/Bia</p>
                  <p className="food-name">Nước ép</p>
                  <p className="food-name">Nước ngọt</p>
                </span>
              </p>
              <p className="food-name-title">
                4/ Trái cây tráng miệng:
                <span className="food-detail">
                  <p className="food-name">Trái cây theo mùa</p>
                  <p className="food-name">Rau câu</p>
                </span>
              </p>
            </span>
          </div>
        </div>
        <div className="breakfast-menu">
          <h3 className="title-menu">SET MENU ĂN SÁNG</h3>
          <p className="menu-subtitle">(đã bao gồm trong giá vé)</p>
          <div className="img-food">
            <img src={food2} alt="food" />
          </div>
          <div className="info-food">
            <span className="food-item">
              <p className="food-name-title">
                1/ Món chính
                <span className="food-detail">
                  <p className="food-name">Mỳ quảng / Bún bò / Bún chả cá</p>
                  <p className="food-name">(Mỗi ngày chọn 1 món)</p>
                </span>
              </p>
              <p className="food-name-title">
                2/ Quầy tự phục vụ (self service line)
                <span className="food-detail">
                  <p className="food-name">Mì ly, phở ăn liền</p>
                  <p className="food-name">Trứng gà</p>
                  <p className="food-name">Rau: dưa leo, cà chua, xà lách</p>
                  <p className="food-name">
                    Gia vị: dầu ăn, xì dầu, tương ớt, tương cà, nước sốt
                  </p>
                </span>
              </p>
              <p className="food-name-title">
                3/ Nước uống free
                <span className="food-detail">
                  <p className="food-name">Cà phê gói</p>
                  <p className="food-name">Trà đá</p>
                  <p className="food-name">Nước lọc</p>
                </span>
              </p>
            </span>
          </div>
        </div>
      </div>
      <div className="btn-container">
        <p>Bạn có thể liên hệ trực tiếp để có thể biết rõ hơn</p>
        <button
          className="btn-contact-food"
          onClick={() => window.open("https://zalo.me/0344038365", "_blank")}
        >
          Liên hệ đặt chỗ ngay
        </button>
      </div>
    </>
  );
};

export default Menu;
