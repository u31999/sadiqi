import "../styles/Footer.scss"

export default function Footer() {
  return (
    <footer className="footer" dir="rtl">
      <div className="footer-content">
        <div className="logo">
          <i className="fas fa-robot"></i>
          <h3>منصة صديقي للذكاء الاصطناعي</h3>
          <p>مستقبل خدمة العملاء الذكية - حيث تلتقي التكنولوجيا بالإبداع</p>
        </div>

        <div className="social-icons">
          <a href="mailto:info@sadiqi.ai"><i className="fas fa-envelope"></i></a>
          <a href="https://wa.me"><i className="fab fa-whatsapp"></i></a>
          <a href="https://t.me"><i className="fab fa-telegram-plane"></i></a>
        </div>

        <hr />
        <p className="copyright">© 2024 منصة صديقي للذكاء الاصطناعي. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
}
