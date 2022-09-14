import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './form.scss';
function Form() {
  return (
    <div className="content">
      <form className="form-content" id="Form"  >
        <div className="form-title">
          <h3>SỞ GIÁO DỤC VÀ ĐÀO TẠO THÀNH PHỐ HỒ CHÍ MINH</h3>
          <h2>TRA CỨU ĐIỂM THI THPT QUỐC GIA 2018</h2>
        </div>
        <div className="form-input">
          <div className="input-guide">
            <p>Thí Sinh Nhập Số Báo Danh Và Mã Xác Nhận Vào Các Ô Dưới Đây</p>
          </div>
          <div className="input-group">
            <label>Số báo danh</label>
            <input
              type="text"
            />
          </div>
        </div>
        <ReCAPTCHA
          className="captcha"
          size="normal"
          data-theme="dark"
          render="explicit"
          sitekey="6LcWLvIhAAAAAH6V9xminkJUAyGPMIZWxaP_luPu"
        />
        <div className="form-button" >
          <button id = "submit" > 
            Tra Cứu
          </button>
        </div>
      </form>
    </div>
  );
}
// function captchaHandle (){
//   const hide = ReactDOM.querySelector('.captcha') 
//   const sub = ReactDOM.querySelector('submit').disable = true
//   if (onClick = {hide}){
//     sub.disable = flase
//   }
// }

export default Form;
