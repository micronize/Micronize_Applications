
// Constructor function
function AppBar(id_, label) {
  this.id_ = id_;
  this.label = label;

  this.getId = function() {
	  return this.id_
  }
  this.getLabel = function(){
	  return this.label; 
  }
}

var aboutUs = new AppBar("about_us", "About us");
var services = new AppBar("service_offer", "Services");
var requestQuote = new AppBar("request_quote", "Request quote");
 





function appBarCSS(){

	var css = `
	<style>
	.app_bar{
		width: 100%; 
		height: 60px; 
		background-color: ${theme.appBarColor};
		display: flex; 
		align-content: center; 
		
	}
	
	.app_bar a{
		text-decoration: none;
		color: ${theme.appBarFont};
		font-size: 	${textTheme.appBarFontSize};
		margin: 15px;  
		font-family: Arial, Helvetica, sans-serif;
		 
	}
	
	.app_bar a:hover {
		color: ${theme.fontHover};
        font-size: 25px; 		
	}
	
	
	  
	  </style>
	`
	return css; 
}

function topBarHead(){
	var html =`
	${appBarCSS()}
	 <div class="app_bar" id="app_bar">
	 <a href="#" id="${requestQuote.getId()}" onclick="eventHandler(this)">${requestQuote.getLabel()} </a>
	 <a href="#" id="${services.getId()}" onclick="eventHandler(this)">${services.getLabel()} </a>

	 
	 </div> 
	 
	`
	
	document.getElementById('main_bar').innerHTML = html;
}

 function eventHandler(element){
	 var id = element.id; 
	 switch(id){
		 case requestQuote.getId(): alert(id); 
		 break;
		 case services.getId(): alert(id); 
		 break;
	 }
 }
 


function append(html){
	document.getElementById('main_page').innerHTML = html; 
}

