import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './form.scss';
function Form() {
  return (
    <div className="container">
      <div className="content">
        <form className="form-content" id="Form">
          <div className="form-title">
            <h2 id="Dung">SỞ GIÁO DỤC VÀ ĐÀO TẠO THÀNH PHỐ HỒ CHÍ MINH</h2>
            <h3 id="Quan">TRA CỨU ĐIỂM THI THPT QUỐC GIA 2022</h3>
          </div>
          <div className="form-input">
            <div className="input-guide">
              <p>Thí Sinh Nhập Số Báo Danh Vào Ô Dưới Đây và Tích Check</p>
            </div>
            <div className="input-group">
              <label>Số báo danh</label>
              <input type="text" />
            </div>
          </div>
          <ReCAPTCHA
            onChange={captchaHandle}
            className="captcha"
            size="normal"
            data-theme="dark"
            render="explicit"
            sitekey="6LcWLvIhAAAAAH6V9xminkJUAyGPMIZWxaP_luPu"
          />
          <div className="form-click">
            <div className="form-button" id="btn">
              <button type="submit"> Tra Cứu </button>
            </div>
            <div className="form-next">
              <button type="button">Phổ Điểm</button>
            </div>
          </div>
          <div id="data-form"></div>
        </form>
      </div>
    </div>
  );
}
function captchaHandle() {
  document.getElementById('btn').style.visibility = 'visible';
  document.querySelector('.form-button').addEventListener('click', (event) => {
    fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET' })
      .then((response) => response.json())
      .then((posts) => {
        let jsxs = posts.map((dung) => {
          return `<p>Toán Học: </p> <p>${dung.maths}</p>
                  <p>Ngữ Văn: </p> <p>${dung.literatures}</p>
                  <p>Ngoại Ngữ: </p> <p>${dung.foreignLang}</p>
                  <p>Vậy Lý: </p> <p>${dung.physics}</p>
                  <p>Hóa Học: </p> <p>${dung.chemistry}</p>
                  <p>Sinh Học: </p> <p>${dung.biology}</p>    
                  <p>Lịch Sử: </p> <p>${dung.history}</p>
                  <p>Địa Lý: </p> <p>${dung.geography}</p>
                  <p>???: </p> <p>${dung.civicEdu}</p>
                  `;
        }); //DunggDung
        let jsx = jsxs.join('');
        document.getElementById('data-form').innerHTML = jsx;
      })
      .catch((err) => console.log(err));
    event.preventDefault();
  });
}
export default Form;
