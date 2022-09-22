import React from 'react';
import './footer.scss';
import 'bootstrap-icons/font/bootstrap-icons.css';
import $ from 'jquery';
function Footer() {
  return (
    <div className="nav-footer">
      <div className="container">
        <div className="footer">
          <div className="footer-content">
            <p className="footer-title">
              Sở Giáo dục và Đào tạo Thành phố Hồ Chí Minh
            </p>
            <ul className="footer-icon">
              <li>
                <i class="bi bi-geo-alt"></i>
                <span>
                  66-68 Lê Thánh Tôn, Bến Nghé, Quận 1, Thành phố Hồ Chí Minh
                  700000
                </span>
              </li>
              <li>
                <i class="bi bi-telephone"></i>
                <span>(+84) 2838 229 360</span>
              </li>
              <li>
                <i class="bi bi-envelope"></i>
                <span>sgddt@tphcm.gov.vn</span>
              </li>
            </ul>
            <p className="copyright">
              {' '}
              &copy; 2022 Copyright OracleK60_CNTTK61_Nhom9{' '}
            </p>
          </div>
          <div className="footer-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15677.721759986493!2d106.7024947!3d10.7783075!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc33ae565cb446e66!2zU-G7nyBHacOhbyBk4bulYyAmIMSQw6BvIHThuqFvIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1663394733818!5m2!1svi!2s"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="btnTop">
        <i class="bi bi-arrow-up-short"></i>
      </div>
    </div>
  );
}
// document.getElementById('btnTop').addEventListener('click', (e) => {
//   alert('hi');
//   // $('html, body').animate({ scrollTop: 0 }, 'fast');
// });
$(window).scroll(function () {
  if ($(this).scrollTop() >= 100) {
    $('.btnTop').fadeIn();
  } else {
    $('.btnTop').fadeOut();
  }
});
$(document).ready(function() {
  $('.btnTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 150);
  });
})

export default Footer;
