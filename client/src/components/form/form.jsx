import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import './form.scss';
function Form() {
  return (
    <div className="content">
      <form className="form-content" id="Form">
        <div className="form-title">
          <h3>SỞ GIÁO DỤC VÀ ĐÀO TẠO HÀ NỘI</h3>
          <h2>TRA CỨU ĐIỂM THI THPT QUỐC GIA 2018</h2>
        </div>
        <div className="form-input">
          <div className="input-guide">
            <p>Thí Sinh Nhập Số Báo Danh Và Mã Xác Nhận Vào Các Ô Dưới Đây</p>
          </div>
          <div className="input-group">
            <label>Số báo danh</label>
            <input type="text" />
          </div>
          <div className="input-group">
            <label>Mã Xác Nhận</label>
            <input type="text" />
          </div>
        </div>
        <ReCAPTCHA className="captcha"
          size="normal"
          data-theme="dark"
          render="explicit"
          sitekey="6LcWLvIhAAAAAH6V9xminkJUAyGPMIZWxaP_luPu"
        />
        <div className="form-button">
          <button>Tra Cứu</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
//https://vntalking.com/tich-hop-google-recaptcha-vao-form-trong-react.html
