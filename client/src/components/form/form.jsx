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
              <p>Thí sinh nhập số báo danh và tích vào các ô dưới đây</p>
            </div>
            <div className="input-group">
              <label htmlFor="sbd">Số báo danh</label>
              <input
                type="text"
                id="sbd"
                name="sbd"
                maxLength="7"
                size="7"
                autoFocus
                autoComplete="off"
                placeholder="VD: 1234567"
                onKeyDown={idCheck}
                pattern="[0-9]{7}"
                required
              />
               <p id="msg">Vui Lòng Nhập Số Và Đủ 7 Ký Tự </p>
            </div>
          </div>
          <ReCAPTCHA
            onChange={captchaHandle}
            id="captcha"
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
              <a href="http://localhost:3000/statistics">
                <button type="button">Phổ Điểm</button>
              </a>
            </div>
          </div>
          <div id="data-form"></div>
        </form>
      </div>
    </div>
  );
}
function idCheck() {
  let flag = false;
  const input = document.getElementById('sbd').value;
  const text = document.getElementById('msg');
  if (input.length < 7 || input.length == 0) {
    text.style.visibility = 'visible';
    flag = false;
  } else if (isNaN(input)) {
    text.style.visibility = 'visible';
    flag = false;
  } else {
    text.style.visibility = 'hidden';
    flag = true;
  }
  return flag;
}
function captchaHandle() {
  document.getElementById('btn').style.visibility = 'visible';
  let sbd = document.querySelector('#sbd').value;
  console.log(sbd);
  document.querySelector('.form-button').addEventListener('click', (event) => {
    if (idCheck()) {
      fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET' })
        .then((response) => response.json())
        .then((posts) => {
          let jsxs = posts.map((dung) => {
            return
              `<table>
                <tr>
                  <th colspan = "9">Bang Diem Thi THPT Quoc Gia 2022</th>
                  </tr>
                <tr>
                  <td>Toan</td>
                  <td>Ngu Van</td>
                  <td>Ngoai Ngu</td>
                  <td>Vat Ly</td>
                  <td>Sinh Hoc</td>
                  <td>Lich Su</td>
                  <td>Dia Ly</td>
                  <td>KHTN</td>
                  <td>KHXH</td>
                </tr>
                <tr>
                  <td>${dung.maths}</td>
                  <td>${dung.literatures}</td>
                  <td>${dung.foreignLang}</td>
                  <td>${dung.physics}</td>
                  <td>${dung.chemistry}</td>
                  <td>${dung.biology}</td>
                  <td>${dung.history}</td>
                  <td>${dung.geography}</td>
                  <td>${dung.civicEdu}</td>
                </tr>
              </table>`
            // return `<p>Toán Học: </p> <p>${dung.maths}</p>
            //           <p>Ngữ Văn: </p> <p>${dung.literatures}</p>
            //           <p>Ngoại Ngữ: </p> <p>${dung.foreignLang}</p>
            //           <p>Vậy Lý: </p> <p>${dung.physics}</p>
            //           <p>Hóa Học: </p> <p>${dung.chemistry}</p>
            //           <p>Sinh Học: </p> <p>${dung.biology}</p>    
            //           <p>Lịch Sử: </p> <p>${dung.history}</p>
            //           <p>Địa Lý: </p> <p>${dung.geography}</p>
            //           <p>e he: </p> <p>${dung.civicEdu}</p>
            //           `; 
          });
          let jsx = jsxs.join('');
          document.getElementById('data-form').innerHTML = jsx;
          // }
        })
        .catch((err) => console.log(err));
      event.preventDefault();
    }
  });
}


export default Form;
