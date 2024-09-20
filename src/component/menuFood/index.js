import React from "react";
import "../../assest/css/menuFood.css";
import food from "../../assest/image/food.jpg";
import food2 from "../../assest/image/food3.jpg";

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
              <p className="food-name-title">1/ Salad sốt mè rang</p>
              <p className="food-name-title">
                2/ Combo nướng dành cho 2 người:
                <span className="food-detail">
                  <p className="food-name">Thăn ngoại bò</p>
                  <p className="food-name">Ba rọi</p>
                  <p className="food-name">Xúc xích</p>
                </span>
              </p>
              <p className="food-name-title">3/ Canh kim chi</p>
              <p className="food-name-title">4/ Cơm trắng</p>
              <p className="food-name-title">5/ Tráng miệng</p>
              <p className="food-name-title">
                6/ Nước uống free:
                <span className="food-detail">
                  <p className="food-name">Cà phê gói</p>
                  <p className="food-name">Trà đá</p>
                  <p className="food-name">Nước lọc</p>
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
                  <p className="food-name">Bánh mì sandwich</p>
                  <p className="food-name">Trứng gà</p>
                  <p className="food-name">Mứt dâu tây / Việt quất</p>
                  <p className="food-name">Bơ đậu phộng</p>
                  <p className="food-name">Sữa đặc</p>
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
        <button className="btn-contact-food">Liên hệ đặt chỗ ngay</button>
      </div>
    </>
  );
};

export default Menu;
