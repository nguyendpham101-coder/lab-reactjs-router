import React from 'react';
import './Style.css';

function AboutUs() {
  return (
    <div className="container">
      <div className="card">
        <h3>Về chúng tôi (About Us)</h3>
        <p style={{ marginTop: '10px', lineHeight: '1.6' }}>
          Đây là ứng dụng web với ReactJS. 
          Dự án hướng tới việc giải quyết bài toán tổ chức bình chọn nhanh chóng 
          cho các câu lạc bộ, lớp học và sự kiện nội bộ.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;