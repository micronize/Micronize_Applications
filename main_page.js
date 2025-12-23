
function Home_page() {
  this.titleOne = "Micronize Applications, LLC.";
  this.titleTwo = "Mission";
  this.titleWhy = "Services";

  this.getTitleOne = function() {
	  return this.titleOne
  }
  this.getTitleTwo = function(){
	  return this.titleTwo; 
  }
  
  this.getTitleWhy = function(){
	  return this.titleWhy; 
  }
}

const home = new Home_page(); 
 




var mainTheme = {
	title: "Micronize Applications LLC",
	fontSize_title: "60px",
	color_title: "#1a62ff",
	image_one: "site_image/micro_logo.png",
	missionTitleFont: "60px",
	p_size: "25px",
	mission: `
		Our mission is to empower small businesses by providing simple, affordable, and reliable data collection tools 
		that turn everyday information into meaningful, actionable insights. We believe that data should not be 
		complicated or expensive to access, every business, regardless of size or technical expertise, deserves 
		the ability to understand their operations, customers, and opportunities.
	`, 
	
	why: `
		Tell us what you know about your business and what you want to learn. Share what you know about your customers and what insights you would like to gain about them. 			Whatever data you need to grow your company, our team will create a customized application tailored to your goals. From CRM systems to inventory management tools, 		       Micronize Applications will bring your vision to life.
		You do not have to spend astronomical amounts of money to get a high-quality application. Get great value at a fair price. Request a free consultation today and explore 		examples of our past projects to see why we are the right team for you.

	`
};


function mainPageCss() {
  var css = `
  <style>
    /* === General Layout === */
    .mainpage_container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      padding: 40px 15px 60px;
      background: linear-gradient(135deg, #f5f7fa, #e4ebf5);
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      flex-wrap: wrap;
    }

    .mainpage_container a {
      font-size: ${mainTheme.fontSize_title};
      color: ${mainTheme.color_title};
      text-decoration: none;
      font-family: 'Segoe UI', Arial, Helvetica, sans-serif;
      font-weight: 700;
      letter-spacing: 1px;
      transition: color 0.3s ease, transform 0.3s ease;
      word-break: break-word;
    }

    .mainpage_container a:hover {
      color: #0078ff;
      transform: scale(1.05);
    }

    /* === HERO IMAGE === */
    .first_image {
      padding: 50px 20px;
      display: flex;
      justify-content: center;
    }

    .first_image img {
      width: 100%;
      max-width: 900px;
      border-radius: 18px;
     
      transition: transform .3s ease;
    }

    .first_image img:hover {
      transform: scale(1.03);
    }


    /* === Section Titles === */
    .mission_title, .why_title {
      width: 100%;
      padding: 25px;
      display: flex;
      justify-content: center;
      text-align: center;
      font-size: ${mainTheme.missionTitleFont};
      font-family: 'Segoe UI', Arial, Helvetica, sans-serif;
      color: ${mainTheme.color_title};
      font-weight: bold;
      letter-spacing: 0.5px;
    }

    /* === Paragraph Sections === */
    .mission, .why {
      width: 100%;
      padding: 10px 20px 40px;
      display: flex;
      justify-content: center;
      font-size: ${mainTheme.p_size};
      font-family: 'Segoe UI', Arial, Helvetica, sans-serif;
      line-height: 1.6;
      color: #333;
    }

    .mission p, .why p {
      width: 80%;
      max-width: 900px;
      text-align: center;
    }

    /* === Call to Action Button === */
    .request_console {
      width: 100%;
      display: flex;
      justify-content: center;
      padding-bottom: 90px;
    }

    .request_console button {
      width: 320px;
      height: 70px;
      background: linear-gradient(135deg, #0078ff, #00c6ff);
      color: white;
      font-size: 24px;
      border: none;
      border-radius: 40px;
      font-weight: 600;
      letter-spacing: 0.5px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease;
    }

    .request_console button:hover {
      background: linear-gradient(135deg, #00a8ff, #00f2ff);
      transform: translateY(-3px);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
      cursor: pointer;
    }

    .request_console button:active {
      transform: translateY(0);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
    }

    /* === Responsive Design === */
    @media (max-width: 1024px) {
      .first_image img {
        width: 85%;
      }
      .request_console button {
        width: 260px;
        height: 60px;
        font-size: 20px;
      }
    }

    @media (max-width: 768px) {
      .mainpage_container {
        padding: 30px 10px 40px;
      }

      .mainpage_container a {
        font-size: calc(${mainTheme.fontSize_title} * 0.9);
      }

      .mission p, .why p {
        width: 90%;
      }

   
      .request_console button {
        width: 220px;
        height: 55px;
        font-size: 18px;
      }
    }

    @media (max-width: 480px) {
      .mainpage_container {
        padding: 20px 8px 30px;
      }

      .mainpage_container a {
        font-size: calc(${mainTheme.fontSize_title} * 0.75);
      }

      .mission_title, .why_title {
        font-size: calc(${mainTheme.missionTitleFont} * 0.8);
        padding: 15px;
      }

      .mission p, .why p {
        width: 95%;
        font-size: calc(${mainTheme.p_size} * 0.9);
      }

      .first_image {
  position: relative;
  background: linear-gradient(135deg, #f5f7fa, #e4ebf5);
  padding: 60px 0;
}

.first_image::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(245,247,250,1),
    rgba(245,247,250,0.6),
    rgba(245,247,250,1)
  );
  pointer-events: none;
}

.first_image img {
  position: relative;
  z-index: 1;
}

      .request_console button {
        width: 200px;
        height: 50px;
        font-size: 16px;
        border-radius: 30px;
      }
    }
  </style>
  `
  return css;
}function mainPage(){
	var html = `
	 ${mainPageCss()}
	 
	
	 
	 <div class="first_image">
	 <img src="${mainTheme.image_one}" alt="Data visualization">
	 </div>
	 
	 <div class="mission_container">
	 <div class="mission_title"><a>${home.getTitleTwo()}</a></div>
	 <div class="mission"><p>${mainTheme.mission} </p></div>
	 </div>
	 
	 <div class="why_container">
	 <div class="why_title"><a>${home.getTitleWhy()}</a></div>
	 <div class="why"><p>${mainTheme.why} </p></div>
	 </div>

	<div class="request_console" id="request_console">

		<button id="request_button" onclick="showPopup()">Request Consoltation</button>
 		
		</div>
	 
	
	 
	`
	
	document.getElementById('main_page').innerHTML = html; 
	
}
function requestConsoleCSS(){
  return `
  <style>
   .form-container {
            max-width: 100%;
            margin: 50px auto;
            background: #ffffff;
            padding: 20px;
            border-radius: 6px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        label {
            display: block;
            margin-top: 12px;
            font-weight: bold;
        }
        input[type="text"],
        input[type="email"],
        input[type="tel"] {
            width: 100%;
            padding: 8px;
            margin-top: 4px;
            box-sizing: border-box;
        }
        .consent {
            margin-top: 15px;
            font-size: 0.9em;
        }
        #submit_inquireBtn {
            margin-top: 20px;
            width: 100%;
            padding: 10px;
              background: linear-gradient(135deg, #0078ff, #00c6ff);
            color: #fff;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        #submit_inquireBtn:hover {
            background-color: #0056b3;
        }

        #close_pop:hover {
           cursor: pointer;
           color: blue; 
        }

  </style>
  `
}



function requestConsoleUI(){
  return `
  ${requestConsoleCSS()}
   <div class="form-container">
    <form action="#" method="post">
    <a id="close_pop" onclick="closePopup()">close</a>
        <label for="company_name">Company</label>
        <input type="text" id="company_name" name="company_name" required>

        <label for="lastName">Name</label>
        <input type="text" id="lastName" name="lastName" required>

        <label for="email">Email Address</label>
        <input type="email" id="email" name="email" required>

        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" name="phone" required>

        <div class="consent">
            <input type="checkbox" id="consent" name="consent" required>
            <label for="consent">
                I consent to receive phone calls regarding my inquiry.
            </label>
        </div>

        <button id="submit_inquireBtn" type="submit">Submit</button>
    </form>
</div>

  
  
  
  `
}



function showPopup(){
  const popup = document.getElementById("popup_");
  const overlay = document.getElementById("overlay");
  const popupContent = document.getElementById("popupContent_");

  popupContent.innerHTML = requestConsoleUI()
  popup.style.display = "block";
  overlay.style.display = "block";
}


function closePopup(){
  const popup = document.getElementById("popup_");
  const overlay = document.getElementById("overlay");
  const popupContent = document.getElementById("popupContent_");

  popupContent.innerHTML = ""
  popup.style.display = "none";
  overlay.style.display = "none";
}



mainPage()

