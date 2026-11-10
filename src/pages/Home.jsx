import React, { useState } from 'react';
import './Style.css';

function Home() {
  const [polls, setPolls] = useState([
    {
      id: 1,
      category: 'Học thuật & Công nghệ',
      status: 'Đang diễn ra',
      isEnding: false,
      title: 'Bình chọn Đồ án Xuất sắc nhất Học kỳ I - 2026',
      desc: 'Đánh giá các dự án ứng dụng AI, An toàn thông tin và Phát triển Web của sinh viên.',
      opt1: 'Hệ thống phát hiện mã độc AI',
      votes1: 600,
      opt2: 'Ứng dụng bình chọn bảo mật',
      votes2: 648,
      selectedOption: null,
      hasVoted: false,
    },
    {
      id: 2,
      category: 'Hoạt động Sinh viên',
      status: 'Sắp kết thúc',
      isEnding: true,
      title: 'Khảo sát địa điểm tổ chức Tech Fest 2026',
      desc: 'Lấy ý kiến sinh viên toàn trường về không gian tổ chức ngày hội công nghệ thường niên.',
      opt1: 'Hội trường lớn khu A',
      votes1: 580,
      opt2: 'Sân vận động ngoài trời',
      votes2: 312,
      selectedOption: null,
      hasVoted: false,
    },
    {
      id: 3,
      category: 'Câu lạc bộ',
      status: 'Đang diễn ra',
      isEnding: false,
      title: 'Bầu chọn Ban Chủ nhiệm CLB An toàn thông tin',
      desc: 'Bỏ phiếu tín nhiệm cho các ứng viên vị trí Chủ nhiệm và Phó chủ nhiệm nhiệm kỳ mới.',
      opt1: 'Liên danh Ứng viên số 01',
      votes1: 313,
      opt2: 'Liên danh Ứng viên số 02',
      votes2: 227,
      selectedOption: null,
      hasVoted: false,
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  // Chọn phương án 1 hoặc 2
  const handleSelectOption = (pollId, optionNum) => {
    setPolls(
      polls.map((poll) => {
        if (poll.id === pollId && !poll.hasVoted) {
          return { ...poll, selectedOption: optionNum };
        }
        return poll;
      })
    );
  };

  // Xử lý khi bấm nút "Bỏ phiếu ngay"
  const handleVote = (pollId) => {
    setPolls(
      polls.map((poll) => {
        if (poll.id === pollId) {
          if (!poll.selectedOption) {
            alert('Vui lòng click chọn 1 trong 2 phương án trước khi bấm Bỏ phiếu!');
            return poll;
          }
          if (poll.hasVoted) return poll;

          return {
            ...poll,
            votes1: poll.selectedOption === 1 ? poll.votes1 + 1 : poll.votes1,
            votes2: poll.selectedOption === 2 ? poll.votes2 + 1 : poll.votes2,
            hasVoted: true,
          };
        }
        return poll;
      })
    );
  };

  // Lọc theo ô tìm kiếm
  const filteredPolls = polls.filter((poll) =>
    poll.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    poll.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Tính tổng số phiếu của toàn hệ thống
  const totalSystemVotes = polls.reduce((sum, p) => sum + p.votes1 + p.votes2, 21820);

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
            <input
              type="text"
              placeholder="Tìm tên cuộc bình chọn hoặc danh mục..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="btn-primary">Tìm kiếm</button>
          </div>
        </div>
      </div>

      {/* Số liệu thống kê (Tự động nhảy số khi bỏ phiếu) */}
      <div className="stats-row">
        <div className="stat-card">
          <h2>150+</h2>
          <p>Cuộc bình chọn đã mở</p>
        </div>
        <div className="stat-card">
          <h2>{totalSystemVotes.toLocaleString()}+</h2>
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
            Click trực tiếp vào phương án bạn muốn chọn rồi bấm "Bỏ phiếu ngay"
          </p>
        </div>
      </div>

      <div className="card-grid">
        {filteredPolls.map((poll) => {
          const total = poll.votes1 + poll.votes2;
          const pct1 = Math.round((poll.votes1 / total) * 100);
          const pct2 = 100 - pct1;

          return (
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

                {/* Phương án 1 */}
                <div
                  className={`option-box ${poll.selectedOption === 1 ? 'selected' : ''}`}
                  onClick={() => handleSelectOption(poll.id, 1)}
                >
                  <div className="option-label">
                    <span>
                      <input
                        type="radio"
                        checked={poll.selectedOption === 1}
                        readOnly
                        style={{ marginRight: '8px' }}
                      />
                      {poll.opt1}
                    </span>
                    <span>{pct1}% ({poll.votes1})</span>
                  </div>
                  <div className="progress-bg">
                    <div className="progress-fill" style={{ width: `${pct1}%` }}></div>
                  </div>
                </div>

                {/* Phương án 2 */}
                <div
                  className={`option-box ${poll.selectedOption === 2 ? 'selected' : ''}`}
                  onClick={() => handleSelectOption(poll.id, 2)}
                >
                  <div className="option-label">
                    <span>
                      <input
                        type="radio"
                        checked={poll.selectedOption === 2}
                        readOnly
                        style={{ marginRight: '8px' }}
                      />
                      {poll.opt2}
                    </span>
                    <span>{pct2}% ({poll.votes2})</span>
                  </div>
                  <div className="progress-bg">
                    <div className="progress-fill" style={{ width: `${pct2}%` }}></div>
                  </div>
                </div>
              </div>

              <div className="poll-footer">
                <span>📊 {total.toLocaleString()} phiếu</span>
                {poll.hasVoted ? (
                  <button className="btn-voted" disabled>
                    ✓ Đã ghi nhận phiếu
                  </button>
                ) : (
                  <button
                    className="btn-primary"
                    style={{ padding: '7px 14px', fontSize: '13px' }}
                    onClick={() => handleVote(poll.id)}
                  >
                    Bỏ phiếu ngay
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;