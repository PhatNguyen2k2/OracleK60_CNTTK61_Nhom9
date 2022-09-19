import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './form.scss';
function Form() {
  // const [sbd, setSBD] = useState('');
  // const [validationMsg, setValidationMsg] = useState('');

  // const onChangeSBD = (event) => {
  //   const value = event.target.value;
  //   setSBD(value);
  // };
  // const validateAll = () => {
  //   const msg = {};
  //   if (isEmpty(sbd)) {
  //     msg.sbd = 'Vui Lòng Nhập Số Báo Danh';
  //   } else if (sbd.lenght() != 7) {
  //     msg.sbd = 'Vui Lòng Nhập Đủ 7 Chữ Số';
  //   }
  //   setValidationMsg(msg);
  //   if (Object.keys(msg).length > 0) return flase;
  //   return true;
  // };

  // const onSubmitSBD = (event) => {
  //   const isValid = validateAll();
  //   if (!isValid) return;
  //   //call API
  // };
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
              <br></br>
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
// function idCheckbutonClick() {
//   const input = document.getElementById('sbd').value;
//   // document.getElementById('btn').style.visibility = 'hidden';
//   if (input.length < 7 ) {
//     text.style.visibility = 'visible';
//     // location.reload()
//   }
//   else if(isNaN(input)){
//     text.style.visibility = 'visible';
//   }
//   else {
//     text.style.visibility = 'hidden';

//   }
// }dị đó
function captchaHandle() {
  // // idCheckbutonClick()
  // if (idCheck == true){
  document.getElementById('btn').style.visibility = 'visible';
  let sbd = document.querySelector('#sbd').value;
  console.log(sbd);
  document.querySelector('.form-button').addEventListener('click', (event) => {
    if (idCheck()) {
      fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET' })
        .then((response) => response.json())
        .then((posts) => {
          // if (posts.id === parseInt(sbd)){
          let jsxs = posts.map((dung) => {
            // if (posts.id === sbd){
            return `<p>Toán Học: </p> <p>${dung.maths}</p>
                      <p>Ngữ Văn: </p> <p>${dung.literatures}</p>
                      <p>Ngoại Ngữ: </p> <p>${dung.foreignLang}</p>
                      <p>Vậy Lý: </p> <p>${dung.physics}</p>
                      <p>Hóa Học: </p> <p>${dung.chemistry}</p>
                      <p>Sinh Học: </p> <p>${dung.biology}</p>    
                      <p>Lịch Sử: </p> <p>${dung.history}</p>
                      <p>Địa Lý: </p> <p>${dung.geography}</p>
                      <p>e he: </p> <p>${dung.civicEdu}</p>
                      `; //}
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
// }

export default Form;
