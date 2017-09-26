
	//定义一个分类查询函数
	function sort_click(){
		var lis = this.parentNode.querySelectorAll("ul.sort li");
		for(var i = 0; i < lis.length; i++){
			lis[i].className = "";
		}
		this.className = "active";
	}

	var sort_lis = document.querySelectorAll("#big_sort ul li");
	for(var i = 0; i < sort_lis.length; i++){
		sort_lis[i].onclick = sort_click;
	}
	var type_lis = document.querySelectorAll("#sort_details>div>div ul li");
	for(var i = 0; i < type_lis.length; i++){
		type_lis[i].onclick = sort_click;
	}
	var order_lis = document.querySelectorAll("#order>ul li");
	for(var i = 0; i < order_lis.length; i++){
		order_lis[i].onclick = sort_click;
	}

	var dis_img = document.querySelectorAll("#sort_display ul li a:first-child>img");
	var movieNames = document.querySelectorAll("#sort_display ul li a:nth-child(2)");
	for(var i = 0; i < dis_img.length; i++){
		console.log(movieNames[i].innerHTML)
		dis_img[i].src = "Image/details/" + movieNames[i].innerHTML +".jpg";
	}


