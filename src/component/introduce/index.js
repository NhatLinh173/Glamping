import React from "react";
import "../../assest/css/introduce.css";
import glamping from "../../assest/image/AdobeStock_565333598.webp";
import stream from "../../assest/image/stream.jpg";
const Introduce = () => {
  return (
    <div className="introduce-wrapper">
      <div className="introduce-container">
        <div className="introduce-info">
          <h2>Glamping – Trải nghiệm nghỉ dưỡng cao cấp giữa thiên nhiên</h2>
          <p>
            Glamping – Trải nghiệm nghỉ dưỡng cao cấp giữa thiên nhiên Glamping
            (Glamorous Camping) là sự kết hợp hoàn hảo giữa trải nghiệm cắm trại
            và sự sang trọng của những tiện nghi cao cấp. Đây là lựa chọn lý
            tưởng cho những ai muốn hòa mình vào thiên nhiên hoang sơ mà vẫn tận
            hưởng đầy đủ tiện ích hiện đại. Tại Glamping, du khách có thể nghỉ
            ngơi trong những lều trại đẹp mắt, rộng rãi, được trang bị đầy đủ
            giường nệm êm ái, điều hòa, và khu vực vệ sinh riêng. Không còn
            những khó khăn, thiếu thốn của việc cắm trại truyền thống, glamping
            mang đến sự thoải mái, thư giãn tuyệt đối.
          </p>
        </div>
        <div className="introduce-image">
          <img src={glamping} alt="Glamping" />
        </div>
      </div>

      <div className="introduce-container reverse">
        <div className="introduce-image">
          <img src={stream} alt="Suối A Păng" />
        </div>
        <div className="introduce-info">
          <h2>
            Khu du lịch suối A Păng – Thiên đường nghỉ dưỡng giữa lòng Đông
            Giang
          </h2>
          <p>
            Nằm ẩn mình giữa khung cảnh thiên nhiên hùng vĩ của huyện Đông
            Giang, tỉnh Quảng Nam, suối A Păng là điểm đến lý tưởng cho những ai
            yêu thích sự tĩnh lặng và vẻ đẹp nguyên sơ. Khu du lịch suối A Păng
            không chỉ nổi tiếng với làn nước trong xanh, mát lạnh quanh năm mà
            còn sở hữu những dãy núi rừng bạt ngàn, tạo nên không gian yên bình,
            thơ mộng.
          </p>
        </div>
      </div>
      <button className="btn-introduce">Liên Hệ Đặt Chỗ Ngay</button>
    </div>
  );
};

export default Introduce;
