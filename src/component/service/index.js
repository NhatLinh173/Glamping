import React from "react";
import "../../assest/css/service.css";
import stream from "../../assest/image/suoi2.jpg";
import glamping from "../../assest/image/glamping.jpg";
import food from "../../assest/image/food2.jpg";
const Service = () => {
  return (
    <div className="service-container">
      <h1>Dịch Vụ Tại </h1>
      <h2>A Păng</h2>
      <div className="service-details">
        <div className="service-detail">
          <img src={glamping} alt="camping" />
          <div className="caption">Cắm trại qua đêm</div>
        </div>
        <div className="service-detail">
          <img src={stream} alt="" />
          <div className="caption">Miễn phí tắm suối</div>
        </div>
        <div className="service-detail">
          <img src={food} />
          <div className="caption">Dịch vụ ăn uống</div>
        </div>
      </div>
    </div>
  );
};

export default Service;
