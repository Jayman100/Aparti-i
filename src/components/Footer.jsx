function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__container--1">
          <div className="footer__company">
            <img src="#" className="footer__logo" alt="logo" />
            <address className="footer__address">
              olohunda street,ilorin, kwara, Nigeria
            </address>
            <div className="footer__company-contact">
              <a
                href="mailto:garbajamiu2000@gmail.com"
                className="footer__company-contact--mail"
              >
                email
              </a>
              <a
                href="tel:07018473861"
                className="footer__company-contact--tel"
              >
                Tel
              </a>
            </div>
          </div>
          <div className="footer__box">
            <div className="footer__about">
              <h2 className="footer__heading margin-bottom--sm">Company</h2>
              <ul className="footer__link">
                <li>
                  <a href="#" className="footer__link--1">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link--2">
                    Career
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link--3">
                    Packaged
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link--4">
                    Safety
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__product">
              <h2 className="footer__heading margin-bottom--sm">Products</h2>
              <ul className="footer__link">
                <li>
                  <a href="#" className="footer__link--1">
                    Apartment pro
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link--1">
                    Rents
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link--2">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link--3">
                    Advertise
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__dash">&nbsp;</div>
        <div className="footer__container--2">
          <div className="footer__copyright">
            <p>© Apartment.inc</p>
          </div>
          <ul className="footer__services">
            <li>
              <a href="#" className="footer__link footer__link--1">
                Help center
              </a>
            </li>
            <li>
              <a href="#" className="footer__link footer__link--2">
                Patner with us
              </a>
            </li>
            <li>
              <a href="#" className="footer__link footer__link--3">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="footer__link footer__link--4">
                Privacy policy
              </a>
            </li>
          </ul>
          <ul className="footer__social">
            <li>
              <a href="#" className="footer__social--x">
                x-app
              </a>
            </li>
            <li>
              <a href="#" className="footer__social--fb">
                Fb
              </a>
            </li>
            <li>
              <a href="#" className="footer__social--ig">
                Ig
              </a>
            </li>
            <li>
              <a href="#" className="footer__social--w">
                Whatsapp
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
