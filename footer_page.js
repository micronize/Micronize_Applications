
function footerUICSS() {
  var css = `
  <style>
  /* === Footer Container === */
  .footer {
    background-color: #222;
    color: #ddd;
    padding: 50px 0 25px;
    font-family: 'Poppins', sans-serif;
  }

  .footer-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: auto;
    gap: 40px;
    padding: 0 20px;
  }

  .footer-section {
    flex: 1 1 260px;
    min-width: 200px;
  }

  .footer h3 {
    color: #fff;
    margin-bottom: 18px;
    font-size: 18px;
    font-weight: 600;
  }

  .footer p,
  .footer a {
    color: #bbb;
    text-decoration: none;
    font-size: 15px;
    line-height: 1.7;
    display: block;
    transition: color 0.3s ease;
  }

  .footer a:hover {
    color: #fff;
  }

  /* === Social Icons === */
  .social-icons {
    margin-top: 15px;
  }

  .social-icons a img {
    width: 26px;
    height: 26px;
    margin-right: 12px;
    filter: brightness(0) invert(1);
    transition: transform 0.3s ease, filter 0.3s ease;
  }

  .social-icons a img:hover {
    transform: scale(1.15);
    filter: brightness(1) invert(0);
  }

  /* === Footer Bottom === */
  .footer-bottom {
    text-align: center;
    padding-top: 25px;
    border-top: 1px solid #444;
    font-size: 13px;
    color: #aaa;
  }

  /* === Tablet View === */
  @media (max-width: 1024px) {
    .footer {
      padding: 40px 0 20px;
    }

    .footer-container {
      gap: 30px;
      padding: 0 15px;
    }

    .footer h3 {
      font-size: 17px;
    }

    .footer p,
    .footer a {
      font-size: 14px;
    }
  }

  /* === Mobile View === */
  @media (max-width: 768px) {
    .footer-container {
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 35px;
    }

    .footer-section {
      width: 100%;
      max-width: 500px;
    }

    .social-icons {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 15px;
    }

    .social-icons a img {
      margin: 0;
      width: 30px;
      height: 30px;
    }
  }

  /* === Small Phones (≤480px) === */
  @media (max-width: 480px) {
    .footer {
      padding: 35px 0 20px;
    }

    .footer h3 {
      font-size: 16px;
      margin-bottom: 12px;
    }

    .footer p,
    .footer a {
      font-size: 13px;
      line-height: 1.6;
    }

    .social-icons a img {
      width: 32px;
      height: 32px;
    }

    .footer-bottom {
      font-size: 12px;
      padding-top: 20px;
    }
  }
  </style>
  `;
  return css;
}


function footerUI(){

 var html = `
 ${footerUICSS()}
  <footer class="footer">
  <div class="footer-container">
    <div class="footer-section about">
      <h3>About Us</h3>
      <p>We are a data application provider specializing in building dynamic data collection applications tailored to your companys needs.</p>
    </div>


    <div class="footer-section contact">
      <h3>Contact Us</h3>
      <p>Email: <a href="mark.young@micronizeapp.com">mark.young@micronizeapp.com</a></p>
      <p>Phone: +1 (720) 339-6101</p>
    </div>
  </div>

  <div class="footer-bottom">
    <p>&copy; 2025 Micronize Applications. All Rights Reserved.</p>
  </div>
</footer>

 
 
 `
 
 document.getElementById("footer_section").innerHTML = html; 

}


footerUI()
