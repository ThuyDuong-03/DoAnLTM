import { FaDatabase, FaUsers, FaClock, FaBullhorn } from "react-icons/fa"; // Importing icons for skills

export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section" style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Phần hình ảnh và phần "Xin chào" nằm ngang */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
        <div className="about--section--img">
          <div>
            <img
              src="./img/about-me.jpg"
              alt="my blog"
              className="small-image"
              style={{ width: "500px", height: "auto", marginTop: "-90px" }} // Đẩy hình ảnh lên trên
            />
          </div>
        </div>

        {/* Phần "Xin chào" nằm ngang với hình ảnh */}
        <div style={{ marginLeft: '30px' }}>
          <p className="section--title">Xin chào, tôi là Trần Thị Thùy Dương</p>
          <p className="hero--section-description">
            Hiện là sinh viên năm cuối ngành Công nghệ Thông tin tại Trường Đại học Công nghệ TP.HCM. 
            Với niềm đam mê và sự nỗ lực không ngừng, tôi đang hướng đến việc phát triển sự nghiệp trong lĩnh vực 
            Chuyên viên Phân tích Nghiệp vụ – một vị trí mà tôi tin rằng có thể khai thác tối đa 
            tiềm năng của bản thân và phù hợp với định hướng phát triển nghề nghiệp.
          </p>
          <p className="hero--section-description">
            Trong quá trình học tập tại trường, bên cạnh việc nắm vững các kiến thức chuyên ngành, tôi đã chủ động 
            tìm hiểu và học hỏi thêm các kỹ năng như phân tích, thiết kế dữ liệu, cũng như sử dụng các công cụ và công 
            nghệ hỗ trợ trong quá trình phân tích và thiết kế. Tôi cũng đã tham gia vào nhiều dự án môn học với vai 
            trò trưởng nhóm, trong đó tôi đảm nhận công việc phân tích nghiệp vụ, bao gồm xác định và phân tích yêu cầu, 
            lập kế hoạch, và quản lý tiến độ dự án. 
          </p>
          <p className="hero--section-description">
            Những trải nghiệm này đã giúp tôi rèn luyện được kỹ năng làm việc nhóm, quản lý thời gian và tư duy logic, 
            cũng như hình thành phong cách làm việc chuyên nghiệp và trách nhiệm.
          </p>
        </div>
      </div>

      {/* Phần tiếp theo */}
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h2 className="skills-section--heading">Mục tiêu</h2>
          <p className="hero--section-description">
            Tôi tận dụng mọi cơ hội để áp dụng những kiến thức lý thuyết đã tiếp thu vào thực tế và học hỏi từ môi trường làm việc. 
            Tôi mong muốn nâng cao kỹ năng phân tích và quản lý dự án, đồng thời tích lũy kinh nghiệm quý báu để phát triển bản thân hơn nữa.
            Tôi đặt mục tiêu xây dựng sự nghiệp của mình trong lĩnh vực công nghệ và trở thành một nhà phân tích nghiệp vụ giỏi.
          </p>

          <h2 className="skills-section--heading">Kỹ Năng</h2>
          <ul className="skills-list">
            <li><FaUsers className="icon" /> Kỹ năng giao tiếp và làm việc nhóm</li>
            <li><FaClock className="icon" /> Kỹ năng quản lý thời gian</li>
            <li><FaBullhorn className="icon" /> Kỹ năng thuyết trình</li>
            <li><FaDatabase className="icon" /> Kỹ năng chuyên ngành</li>
            <li><FaDatabase className="icon" /> Cơ sở dữ liệu: SQL Server, MySQL, MongoDB</li>
            <li><FaDatabase className="icon" /> Phần mềm thiết kế: StarUML</li>
          </ul>

          <h2 className="skills-section--heading">Kinh Nghiệm</h2>
          <div className="experience">
            <p><strong>Dự án:</strong> Website quản lý lịch trình cá nhân (4/2024 - 6/2024)</p>
            <p><strong>Vị trí:</strong> Nhóm trưởng</p>
            <p><strong>Công nghệ sử dụng:</strong> ASP.NET Core 8</p>
            <p><strong>Trách nhiệm:</strong> Với tư cách là nhóm trưởng, tôi chịu trách nhiệm phân tích nghiệp vụ của trang web. Điều này bao gồm thu thập và phân tích các yêu cầu của người dùng, lập kế hoạch và ghi lại các yêu cầu kinh doanh.</p>
          </div>
          
      {/* Mục chứng chỉ - Đặt dưới phần hình ảnh */}
      <h2 className="skills-section--heading">Chứng chỉ</h2>
      <div className="certifications">
        <div className="certification-item">
          <img
            src="./img/network.png"
            alt="Certification 1"
            className="certification-img"
            style={{ width: "500px", height: "auto", marginRight: "20px" }}
          />
          <p><strong>Chứng chỉ Networking Basic</strong> - 2024</p>
        </div>
        <div className="certification-item">
          <img
            src="./img/js1.png"
            alt="Certification 2"
            className="certification-img"
            style={{ width: "500px", height: "auto", marginRight: "20px" }}
          />
          <p><strong>Chứng chỉ JavaScript Essentials 1</strong> - 2024</p>
        </div>
        <div className="certification-item">
          <img
            src="./img/js2.png"
            alt="Certification 2"
            className="certification-img"
            style={{ width: "500px", height: "auto", marginRight: "20px" }}
          />
          <p><strong>Chứng chỉ JavaScript Essentials 2</strong> - 2024</p>
        </div>
      </div>
        </div>
      </div>
    </section>
  );
}
