// function Header() {
//   return (
//     <header>
//       <h2>This is header</h2>
//     </header>
//   );
// }
import React from "react";
import './header.scss';
import logo from '../images/logo-removebg-preview (1).png';
function Header(){
  return (
    <div className="nav-bg">
      <div className="container">
        <div className="nav">
          <div className="nav-logo">
            <img src={logo}/>
          </div>

          <div className="nav-content">
            <p>SỞ GIÁO DỤC VÀ ĐÀO TẠO THÀNH PHỐ HỒ CHÍ MINH <br /> TRANG THÔNG TIN KỲ THI TỐT NGHIỆP THPT </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
