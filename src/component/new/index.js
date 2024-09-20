import React from "react";
import data from "../../Data/new";
import "../../assest/css/new.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const New = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="new-container">
      <h1 className="new-title">BẢN TIN & SỰ KIỆN</h1>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index} className="new-item">
            <div className="new-image">
              <img src={item.image} alt={item.title} />
              <div className="date-label">
                <span className="date-day">{item.date.split(" ")[0]}</span>
                <span className="date-month">{item.date.split(" ")[1]}</span>
              </div>
            </div>
            <div className="new-info">
              <h3 className="new-item-title">{item.title}</h3>
              <p className="new-item-details">{item.details}</p>
              <button className="new-button">XEM THÊM</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-next`}
      style={{ ...style, zIndex: 1 }}
      onClick={onClick}
    >
      <span>{">"}</span>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} slick-prev`}
      style={{ ...style, zIndex: 1 }}
      onClick={onClick}
    >
      <span>{"<"}</span>
    </div>
  );
}

export default New;
