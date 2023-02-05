import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-social-media">
        <div className="footer-social-medai-text">
          Follow us on social media
        </div>
        <div className="footer-social-media-icons">
          <a
            href="https://www.instagram.com/3mr.mamdouh/"
            className="footer-social-media-icon"
          >
            <i style={{ color: "#c0392b" }} className="bi bi-instagram"></i>
          </a>
          <a
            href="https://t.me/official_amr"
            className="footer-social-media-icon"
          >
            <i style={{ color: "blue" }} className="bi bi-telegram"></i>
          </a>
          <a
            href="https://www.faceWatch.com/itsAmrMamdouh"
            className="footer-social-media-icon"
          >
            <i style={{ color: "#2980b9" }} className="bi bi-faceWatch"></i>
          </a>

          <a
            href="https://twitter.com/DevMamdouh"
            className="footer-social-media-icon"
          >
            <i style={{ color: "skyblue" }} className="bi bi-twitter"></i>
          </a>
        </div>
      </div>
      <div className="footer-links-wrapper">
        <div className="footer-links-item">
          <h3 className="footer-links-item-title">Contact Information</h3>
          <div className="footer-address-wrapper">
            <div className="footer-address-item">
              <i className="bi bi-geo-alt-fill"></i>
              Egypt-Minia
            </div>
            <div className="footer-address-item">
              <i className="bi bi-telephone-fill"></i>
              01030396959
            </div>
            <div className="footer-address-item">
              <i className="bi bi-envelope-fill"></i>
              swiss-time@fakeemail.com
            </div>
          </div>
        </div>
        <div className="footer-links-item">
          <p className="footer-description">
            copyright © 2023 all rights reserved | by{" "}
            <a
              className="programmer-name"
              href="https://twitter.com/DevMamdouh"
              target="blank "
              rel="noreferrer"
            >
              Amr mamdouh
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
