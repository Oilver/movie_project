
	var header = document.getElementsByTagName("header")[0];
	var login = header.querySelector("header div.login");
	login.onmouseover = function(){
		header.className = header.className + " c";
	}
	window.onscroll = function(){
		if($(window).scrollTop() > 100){
			header.className = "b";
		}else if($(window).scrollTop() > 80){
			header.className="a";
		}else{
			header.className = "";
		}
	}  

