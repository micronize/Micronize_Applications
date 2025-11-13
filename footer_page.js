
function footerUICSS(){
	var css = `
	<style>
	 /* Footer container */
.footer {
  background-color: #222;
  color: #ddd;
  padding: 40px 0 20px;
  font-family: 'Poppins', sans-serif;
}

.footer-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  max-width: 1100px;
  margin: auto;
  gap: 30px;
}

.footer-section {
  flex: 1 1 250px;
  min-width: 200px;
}

.footer h3 {
  color: #fff;
  margin-bottom: 15px;
}

.footer p, .footer a {
  color: #bbb;
  text-decoration: none;
  font-size: 14px;
  line-height: 1.6;
}

.footer a:hover {
  color: #fff;
}

/* Social icons */
.social-icons a img {
  width: 24px;
  height: 24px;
  margin-right: 10px;
  filter: brightness(0) invert(1);
  transition: 0.3s;
}

.social-icons a img:hover {
  transform: scale(1.1);
}

/* Footer bottom */
.footer-bottom {
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid #444;
  font-size: 13px;
  color: #aaa;
}

/* Responsive layout */
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
}
</style>
	
	`
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