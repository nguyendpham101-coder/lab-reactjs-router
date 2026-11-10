import React from 'react';
import './Style.css';

function AboutUs() {
  return (
    <div className="container">
      <div className="about-hero">
        <span className="status-tag" style={{ marginBottom: '12px', display: 'inline-block' }}>
          Giới thiệu dự án
        </span>
        <h1>Về Hệ thống Bình chọn Trực tuyến V-Vote</h1>
        <p>
          V-Vote là dự án phát triển ứng dụng web hiện đại sử dụng thư viện ReactJS và React Router. 
          Nền tảng được thiết kế nhằm số hóa quy trình khảo sát ý kiến, bầu cử câu lạc bộ và bình chọn 
          sự kiện trong môi trường đại học cũng như doanh nghiệp, thay thế hoàn toàn hình thức bỏ phiếu giấy truyền thống.
        </p>
      </div>

      <div className="section-header">
        <h2>Giá trị cốt lõi & Công nghệ</h2>
      </div>

      <div className="card-grid">
        <div className="poll-card">
          <h3>⚡ Trải nghiệm Single Page App</h3>
          <p className="poll-desc" style={{ marginTop: '10px', marginBottom: 0 }}>
            Tích hợp React Router giúp chuyển đổi mượt mà giữa các trang mà không cần tải lại trình duyệt, 
            tối ưu tốc độ phản hồi cho người dùng.
          </p>
        </div>

        <div className="poll-card">
          <h3>🛡️ Bảo mật & Chống gian lận</h3>
          <p className="poll-desc" style={{ marginTop: '10px', marginBottom: 0 }}>
            Mỗi tài khoản định danh chỉ được phép thực hiện quyền bỏ phiếu duy nhất một lần cho mỗi 
            chiến dịch, ngăn chặn các cuộc tấn công giả mạo yêu cầu.
          </p>
        </div>

        <div className="poll-card">
          <h3>📈 Thống kê Thời gian thực</h3>
          <p className="poll-desc" style={{ marginTop: '10px', marginBottom: 0 }}>
            Biểu đồ phần trăm được tính toán và cập nhật tức thì ngay sau khi phiếu bầu được ghi nhận, 
            đảm bảo tính công khai và minh bạch.
          </p>
        </div>
      </div>

      <div className="about-hero" style={{ background: '#f1f5f9', border: 'none' }}>
        <h3 style={{ marginBottom: '10px' }}>Thông tin liên hệ & Hỗ trợ kỹ thuật</h3>
        <p style={{ fontSize: '14px' }}>
          📍 Địa chỉ: Khu Công nghệ cao, TP. Thủ Đức, TP. Hồ Chí Minh<br />
          📧 Email hỗ trợ: support@v-vote-system.edu.vn<br />
          🌐 Phiên bản: 1.0.0 (React + Vite)
        </p>
      </div>
    </div>
  );
}

export default AboutUs;