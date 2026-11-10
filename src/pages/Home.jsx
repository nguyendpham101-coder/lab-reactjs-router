import React from 'react';
import './Style.css';

function Home() {
  const polls = [
    {
      id: 1,
      category: 'Học thuật & Công nghệ',
      status: 'Đang diễn ra',
      isEnding: false,
      title: 'Bình chọn Đồ án Xuất sắc nhất Học kỳ I - 2026',
      desc: 'Đánh giá các dự án ứng dụng AI, An toàn thông tin và Phát triển Web của sinh viên.',
      opt1: 'Hệ thống phát hiện mã độc AI',
      pct1: 48,
      opt2: 'Ứng dụng bình chọn bảo mật',
      pct2: 52,
      totalVotes: '1,248 phiếu',
    },
    {
      id: 2,
      category: 'Hoạt động Sinh viên',
      status: 'Sắp kết thúc',
      isEnding: true,
      title: 'Khảo sát địa điểm tổ chức Tech Fest 2026',
      desc: 'Lấy ý kiến sinh viên toàn trường về không gian tổ chức ngày hội công nghệ thường niên.',
      opt1: 'Hội trường lớn khu A',
      pct1: 65,
      opt2: 'Sân vận động ngoài trời',
      pct2: 35,
      totalVotes: '892 phiếu',
    },
    {
      id: 3,
      category: 'Câu lạc bộ',
      status: 'Đang diễn ra',
      isEnding: false,
      title: 'Bầu chọn Ban Chủ nhiệm CLB An toàn thông tin',
      desc: 'Bỏ phiếu tín nhiệm cho các ứng viên vị trí Chủ nhiệm và Phó chủ nhiệm nhiệm kỳ mới.',
      opt1: 'Liên danh Ứng viên số 01',
      pct1: 58,
      opt2: 'Liên danh Ứng viên số 02',
      pct2: 42,
      totalVotes: '540 phiếu',
    },
  ];

  return (
    <div className="container">
      {/* Banner chính */}
      <div className="hero-box">
        <div className="hero-content">
          <span className="badge-hero">🔒 Nền tảng Bỏ phiếu Trực tuyến Bảo mật</span>
          <h1>Minh bạch hóa mọi quyết định tập thể của bạn</h1>
          <p>
            Hệ thống tạo cuộc thăm dò ý kiến và bầu cử trực tuyến theo thời gian thực. 
            Đảm bảo tính toàn vẹn dữ liệu, chống gian lận và thống kê trực quan.
          </p>
          <div className="search-bar">
            <input type="text" placeholder="Nhập mã cuộc bình chọn hoặc từ khóa..." />
            <button className="btn-primary">Tìm kiếm</button>
          </div>
        </div>
      </div>

      {/* Số liệu thống kê */}
      <div className="stats-row">
        <div className="stat-card">
          <h2>150+</h2>
          <p>Cuộc bình chọn đã mở</p>
        </div>
        <div className="stat-card">
          <h2>24,500+</h2>
          <p>Lượt phiếu hợp lệ</p>
        </div>
        <div className="stat-card">
          <h2>99.9%</h2>
          <p>Độ ổn định hệ thống</p>
        </div>
        <div className="stat-card">
          <h2>100%</h2>
          <p>Mã hóa & Xác thực</p>
        </div>
      </div>

      {/* Danh sách cuộc bình chọn */}
      <div className="section-header">
        <div>
          <h2>Các cuộc bình chọn nổi bật</h2>
          <p style={{ color: '#64748b', marginTop: '4px', fontSize: '14px' }}>
            Tham gia bỏ phiếu và theo dõi kết quả trực tiếp
          </p>
        </div>
        <button className="btn-outline">Xem tất cả →</button>
      </div>

      <div className="card-grid">
        {polls.map((poll) => (
          <div className="poll-card" key={poll.id}>
            <div>
              <div className="poll-meta">
                <span style={{ fontSize: '12px', color: '#2563eb', fontWeight: 600 }}>
                  {poll.category}
                </span>
                <span className={`status-tag ${poll.isEnding ? 'ending' : ''}`}>
                  {poll.status}
                </span>
              </div>
              <h3>{poll.title}</h3>
              <p className="poll-desc">{poll.desc}</p>

              <div className="option-item">
                <div className="option-label">
                  <span>{poll.opt1}</span>
                  <span>{poll.pct1}%</span>
                </div>
                <div className="progress-bg">
                  <div className="progress-fill" style={{ width: `${poll.pct1}%` }}></div>
                </div>
              </div>

              <div className="option-item">
                <div className="option-label">
                  <span>{poll.opt2}</span>
                  <span>{poll.pct2}%</span>
                </div>
                <div className="progress-bg">
                  <div className="progress-fill" style={{ width: `${poll.pct2}%` }}></div>
                </div>
              </div>
            </div>

            <div className="poll-footer">
              <span>📊 {poll.totalVotes}</span>
              <button className="btn-primary" style={{ padding: '7px 14px', fontSize: '13px' }}>
                Bỏ phiếu ngay
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;