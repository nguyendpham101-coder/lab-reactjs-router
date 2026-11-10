import React from 'react';
import './Style.css';

function Home() {
  return (
    <div className="container">
      <div className="hero-box">
        <h1>Chào mừng đến với Hệ Thống Bình Chọn Trực Tuyến</h1>
        <p>Nền tảng tạo và quản lý các cuộc khảo sát, bầu chọn minh bạch và bảo mật.</p>
      </div>

      <div className="card-grid">
        <div className="card">
          <h3>Tạo cuộc bình chọn</h3>
          <p>Thiết lập câu hỏi và các phương án lựa chọn chỉ trong vài phút.</p>
        </div>
        <div className="card">
          <h3>Bảo mật dữ liệu</h3>
          <p>Mỗi tài khoản chỉ được bỏ phiếu một lần, đảm bảo tính công bằng.</p>
        </div>
        <div className="card">
          <h3>Thống kê trực quan</h3>
          <p>Kết quả được cập nhật theo thời gian thực ngay sau khi bỏ phiếu.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;