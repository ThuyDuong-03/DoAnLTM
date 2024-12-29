import { FaPhoneAlt, FaEnvelope, FaFacebook } from "react-icons/fa"; // Importing icons for contact methods

export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div className="contact--header">
        <h2>Liên hệ với tôi</h2>
        <p className="contact--intro">
          Bạn có thể liên hệ với tôi qua các phương thức dưới đây:
        </p>
      </div>

      <div className="contact--info">
        <div className="contact--detail">
          <FaPhoneAlt className="contact--icon" />
          <p className="contact--text">
            <strong>Số điện thoại:</strong> (+84) 0866 393 703
          </p>
        </div>
        <div className="contact--detail">
          <FaEnvelope className="contact--icon" />
          <p className="contact--text">
            <strong>Email:</strong> tttduong0903@gmail.com
          </p>
        </div>
        <div className="contact--detail">
          <FaFacebook className="contact--icon" />
          <p className="contact--text">
            <strong>Facebook:</strong> 
            <a 
              href="https://www.facebook.com/ALD2302?mibextid=ZbWKwL" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="facebook-link"
            >
               https://www.facebook.com/ALD2302?mibextid=ZbWKwL
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
