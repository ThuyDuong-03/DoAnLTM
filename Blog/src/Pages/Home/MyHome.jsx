export default function MyHome() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Xin chào mọi người</p>
          <p className="hero--section-description">
            Chào mừng các bạn đã đến với blog của tôi, nơi chia sẻ những điều thú vị về Java và JavaScript.
          </p>
          <p className="hero--section-description">
            Blog này được xây dựng với mục tiêu giúp các bạn yêu thích lập trình có thêm nguồn cảm hứng, kiến thức bổ ích 
            và các mẹo hữu ích trong quá trình học tập và làm việc với hai ngôn ngữ lập trình phổ biến này.
          </p>
          <p className="hero--section-description">
            Bên cạnh đó, tôi sẽ chia sẻ những thông tin cơ bản của bản thân tôi cũng như những mục tiêu nghề nghiệp mà tôi muốn hướng đến
            sau này.
          </p>
          <p className="hero--section-description">
            Hãy cùng khám phá thế giới lập trình đầy thú vị, và đừng quên liên hệ với tôi nếu bạn có những thắc mắc cần hỗ trợ nhé
          </p>
        </div>
      </div>
      <div>
        <img
          src="./img/wel.jpg"
          alt="my blog"
          className="small-image"
          style={{ width: "600px", height: "auto" }} // Giảm kích thước xuống 30px
        />
      </div>
    </section>
  );
}
